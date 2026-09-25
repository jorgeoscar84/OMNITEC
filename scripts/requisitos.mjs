#!/usr/bin/env node
// Extrae y valida los requisitos del levantamiento y genera su índice.
//
// Uso:
//   node scripts/requisitos.mjs              valida y regenera docs/01-levantamiento/indice-requisitos.csv
//   node scripts/requisitos.mjs --check      valida y falla si el índice no está al día (para CI)
//   node scripts/requisitos.mjs --cobertura docs/02-prd [--prefijos IAM,DISP,ADM]
//                                            lista los requisitos que no aparecen citados en esa carpeta,
//                                            opcionalmente solo de los prefijos indicados
//
// Sin dependencias: solo Node 18 o superior.

import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const RAIZ = new URL('..', import.meta.url).pathname;
const LEV = join(RAIZ, 'docs', '01-levantamiento');
const INDICE = join(LEV, 'indice-requisitos.csv');
const PRIORIDADES = new Set(['P0', 'P1', 'P2', 'P3']);
const FILA = /^\|\s*(?:\*\*)?([A-Z]{2,5}-\d{3})(?:\*\*)?\s*\|(.*)\|\s*$/;

function archivosMd(dir) {
  return readdirSync(dir).flatMap((nombre) => {
    const ruta = join(dir, nombre);
    if (statSync(ruta).isDirectory()) return archivosMd(ruta);
    return nombre.endsWith('.md') ? [ruta] : [];
  });
}

function textoPlano(s) {
  return s.replace(/\*\*|\*|`/g, '').replace(/\s+/g, ' ').trim();
}

// Los requisitos se definen solo en los módulos y en el capítulo de integraciones.
// Otros documentos (cambios, cobertura) los citan, pero no los definen.
const FUENTES = [join(LEV, 'modulos'), join(LEV, '07-integraciones.md')];

function extraer() {
  const requisitos = [];
  const archivos = FUENTES.flatMap((f) => (f.endsWith('.md') ? [f] : archivosMd(f)));
  for (const archivo of archivos.sort()) {
    const lineas = readFileSync(archivo, 'utf8').split('\n');
    lineas.forEach((linea, i) => {
      const m = linea.match(FILA);
      if (!m) return;
      const celdas = m[2].split(/(?<!\\)\|/).map((c) => c.trim());
      const prioridad = celdas.at(-1);
      const texto = celdas[0];
      const origen = celdas.length >= 3 ? celdas[1] : '';
      requisitos.push({
        id: m[1],
        prefijo: m[1].split('-')[0],
        archivo: relative(RAIZ, archivo).split(sep).join('/'),
        linea: i + 1,
        prioridad,
        origen: textoPlano(origen),
        texto: textoPlano(texto),
      });
    });
  }
  return requisitos;
}

function validar(requisitos) {
  const errores = [];
  const avisos = [];
  const vistos = new Map();
  for (const r of requisitos) {
    if (vistos.has(r.id)) errores.push(`${r.id} duplicado: ${vistos.get(r.id)} y ${r.archivo}:${r.linea}`);
    else vistos.set(r.id, `${r.archivo}:${r.linea}`);
    if (!PRIORIDADES.has(r.prioridad)) errores.push(`${r.id} con prioridad inválida «${r.prioridad}» (${r.archivo}:${r.linea})`);
    if (!r.texto) errores.push(`${r.id} sin texto (${r.archivo}:${r.linea})`);
    if (r.prefijo !== 'API' && !r.origen) errores.push(`${r.id} sin origen (${r.archivo}:${r.linea})`);
  }
  // huecos en la numeración de cada prefijo
  const porPrefijo = {};
  for (const r of requisitos) (porPrefijo[r.prefijo] ??= []).push(Number(r.id.split('-')[1]));
  for (const [prefijo, nums] of Object.entries(porPrefijo)) {
    const max = Math.max(...nums);
    for (let n = 1; n <= max; n++) {
      if (!nums.includes(n)) avisos.push(`hueco en la numeración: ${prefijo}-${String(n).padStart(3, '0')}`);
    }
  }
  return { errores, avisos };
}

function csv(requisitos) {
  const esc = (v) => `"${String(v).replace(/"/g, '""')}"`;
  const cab = ['id', 'prefijo', 'prioridad', 'nuevo_v4', 'ajustado_v4', 'origen', 'archivo', 'requisito'];
  const filas = requisitos
    .slice()
    .sort((a, b) => a.id.localeCompare(b.id, 'es', { numeric: true }))
    .map((r) => [r.id, r.prefijo, r.prioridad, r.origen.includes('nuevo v4') ? 'sí' : 'no',
      r.origen.includes('ajustado v4') ? 'sí' : 'no', r.origen, r.archivo, r.texto].map(esc).join(','));
  return [cab.join(','), ...filas].join('\n') + '\n';
}

function resumen(requisitos) {
  const tabla = {};
  for (const r of requisitos) {
    tabla[r.prefijo] ??= { P0: 0, P1: 0, P2: 0, P3: 0, total: 0 };
    tabla[r.prefijo][r.prioridad] = (tabla[r.prefijo][r.prioridad] ?? 0) + 1;
    tabla[r.prefijo].total++;
  }
  const tot = { P0: 0, P1: 0, P2: 0, P3: 0, total: 0 };
  console.log('prefijo   P0   P1   P2   P3  total');
  for (const [p, c] of Object.entries(tabla).sort()) {
    console.log(`${p.padEnd(8)}${[c.P0, c.P1, c.P2, c.P3, c.total].map((n) => String(n).padStart(5)).join('')}`);
    for (const k of Object.keys(tot)) tot[k] += c[k];
  }
  console.log(`${'TOTAL'.padEnd(8)}${[tot.P0, tot.P1, tot.P2, tot.P3, tot.total].map((n) => String(n).padStart(5)).join('')}`);
  const nuevos = requisitos.filter((r) => r.origen.includes('nuevo v4')).length;
  const ajustados = requisitos.filter((r) => r.origen.includes('ajustado v4')).length;
  console.log(`nuevos en v4: ${nuevos} · ajustados en v4: ${ajustados}`);
}

function cobertura(todos, carpeta, prefijos) {
  const requisitos = prefijos ? todos.filter((r) => prefijos.includes(r.prefijo)) : todos;
  const dir = join(RAIZ, carpeta);
  if (!existsSync(dir)) {
    console.error(`No existe la carpeta ${carpeta}`);
    process.exit(2);
  }
  // Las plantillas y los README no cuentan como cobertura.
  const texto = archivosMd(dir)
    .filter((f) => !/(^|[\\/])(README|PLANTILLA[^\\/]*)\.md$/.test(f))
    .map((f) => readFileSync(f, 'utf8'))
    .join('\n');
  const faltan = requisitos.filter((r) => !new RegExp(`\\b${r.id}\\b`).test(texto));
  if (faltan.length === 0) {
    console.log(`Cobertura completa: los ${requisitos.length} requisitos aparecen en ${carpeta}.`);
    return;
  }
  console.log(`Faltan ${faltan.length} de ${requisitos.length} requisitos en ${carpeta}:`);
  for (const r of faltan) console.log(`  ${r.id} [${r.prioridad}] ${r.texto.slice(0, 90)}`);
  process.exit(1);
}

const args = process.argv.slice(2);
const requisitos = extraer();
const { errores, avisos } = validar(requisitos);
avisos.forEach((a) => console.warn(`aviso: ${a}`));
if (errores.length) {
  errores.forEach((e) => console.error(`error: ${e}`));
  process.exit(1);
}

if (args[0] === '--cobertura') {
  const i = args.indexOf('--prefijos');
  const prefijos = i >= 0 && args[i + 1] ? args[i + 1].split(',').map((p) => p.trim().toUpperCase()) : null;
  const carpeta = args[1] && !args[1].startsWith('--') ? args[1] : 'docs/02-prd';
  cobertura(requisitos, carpeta, prefijos);
} else if (args[0] === '--check') {
  const actual = existsSync(INDICE) ? readFileSync(INDICE, 'utf8') : '';
  if (actual !== csv(requisitos)) {
    console.error('El índice de requisitos no está al día. Ejecuta: node scripts/requisitos.mjs');
    process.exit(1);
  }
  resumen(requisitos);
  console.log('Índice al día.');
} else {
  writeFileSync(INDICE, csv(requisitos));
  resumen(requisitos);
  console.log(`Índice escrito en ${relative(RAIZ, INDICE)}`);
}
