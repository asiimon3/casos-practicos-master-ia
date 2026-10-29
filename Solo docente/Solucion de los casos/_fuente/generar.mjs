/* ══════════════════════════════════════════
   Genera la solución del docente:
   - «../Solucion - Casos practicos.html», autocontenido, con los
     estilos y el comportamiento de «Para clase/_fuente».
   - «../Caso N - esquema.excalidraw», con los marcos «Hoy» y
     «Propuesta» dibujados a partir de los mismos diagramas.

   Uso (desde esta carpeta _fuente):
     node generar.mjs
   ══════════════════════════════════════════ */

import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import { inline } from '../../../Para clase/_fuente/generar.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = join(HERE, '..');

/* ───────────── HTML ───────────── */

const html = inline(join(HERE, 'solucion.html'));
writeFileSync(join(OUT, 'Solucion - Casos practicos.html'), html);
console.log(`Generado: Solucion - Casos practicos.html (${Math.round(Buffer.byteLength(html) / 1024)} KB)`);

/* ───────────── Excalidraw ───────────── */

const sandbox = { window: {} };
vm.runInNewContext(readFileSync(join(HERE, 'solucion_datos.js'), 'utf8'), sandbox);
const DIAGRAMS = sandbox.window.CP_DIAGRAMS;

const TAGS = { manual: 'Manual', dolor: 'Punto de dolor', auto: 'Automático', ia: 'IA', humano: 'Decide una persona', pendiente: 'Por validar' };

/* Colores de la plataforma, en versión Excalidraw */
const NODE = {
  start:   { bg: '#030303', stroke: '#030303', text: '#ffffff' },
  manual:  { bg: '#fbe9dc', stroke: '#a4470c', text: '#1e1e1e' },
  dolor:   { bg: '#f6c39f', stroke: '#ed7d31', text: '#1e1e1e', width: 2 },
  auto:    { bg: '#e6f4ec', stroke: '#2e7d4f', text: '#1e1e1e' },
  ia:      { bg: '#1d1f24', stroke: '#030303', text: '#ffffff' },
  humano:  { bg: '#eaf0fa', stroke: '#2f5597', text: '#1e1e1e' },
  none:    { bg: '#ffffff', stroke: '#44546a', text: '#1e1e1e' }
};
const GROUP = {
  input:   { bg: '#f5f7f9', stroke: '#c3cad4', text: '#44546a' },
  module:  { bg: '#f3f6fc', stroke: '#c9d7ef', text: '#2f5597' },
  output:  { bg: '#f3f6fc', stroke: '#c9d7ef', text: '#2f5597' },
  feed:    { bg: '#f1f9f4', stroke: '#bfe0cc', text: '#2e7d4f' },
  context: { bg: '#f3f6fc', stroke: '#c9d7ef', text: '#2f5597' },
  impact:  { bg: '#fdf4ee', stroke: '#f2c9aa', text: '#a4470c' },
  ext:     { bg: '#f1f2f4', stroke: '#8a96a8', text: '#1e1e1e' },
  end:     { bg: '#f5f7f9', stroke: '#c3cad4', text: '#44546a', dashed: true }
};

const FONT = 16; const LINE = 1.25; const CHARS = 19;
const NODE_W = 180; const PAD_X = 18; const PAD_T = 12; const HEAD = 26;

let seed = 1;
const nextSeed = () => (seed = (seed * 48271) % 2147483647);
let uid = 0;
const id = (p) => `${p}-${++uid}`;

function wrap(text, max = CHARS) {
  const out = [];
  String(text).split('\n').forEach((para) => {
    let line = '';
    para.split(' ').forEach((w) => {
      if (line && (line + ' ' + w).length > max) { out.push(line); line = w; } else line = line ? `${line} ${w}` : w;
    });
    out.push(line);
  });
  return out;
}

function base(type, x, y, w, h, extra = {}) {
  return {
    id: extra.id || id(type), type, x, y, width: w, height: h, angle: 0,
    strokeColor: '#1e1e1e', backgroundColor: 'transparent', fillStyle: 'solid',
    strokeWidth: 1, strokeStyle: 'solid', roughness: 1, opacity: 100,
    groupIds: [], frameId: null, roundness: null,
    seed: nextSeed(), version: 1, versionNonce: nextSeed(), isDeleted: false,
    boundElements: null, updated: 1, link: null, locked: false,
    ...extra
  };
}

function text(x, y, value, { size = FONT, color = '#1e1e1e', align = 'left', containerId = null, w } = {}) {
  const lines = value.split('\n');
  const width = w || Math.max(...lines.map((l) => l.length)) * size * 0.55;
  const height = lines.length * size * LINE;
  return base('text', x, y, width, height, {
    strokeColor: color, text: value, originalText: value, fontSize: size, fontFamily: 2,
    textAlign: align, verticalAlign: containerId ? 'middle' : 'top', containerId,
    lineHeight: LINE, autoResize: true
  });
}

/* Caja con texto centrado (rectángulo + texto ligado) */
function box(x, y, w, lines, colors, { strokeWidth = 1, dashed = false, minH = 0 } = {}) {
  const h = Math.max(minH, lines.length * FONT * LINE + 28);
  const rect = base('rectangle', x, y, w, h, {
    strokeColor: colors.stroke, backgroundColor: colors.bg, strokeWidth,
    strokeStyle: dashed ? 'dashed' : 'solid', roundness: { type: 3 }
  });
  const label = lines.join('\n');
  const t = text(x + 6, y + (h - lines.length * FONT * LINE) / 2, label, { color: colors.text, align: 'center', containerId: rect.id, w: w - 12 });
  rect.boundElements = [{ type: 'text', id: t.id }];
  return [rect, t];
}

function nodeLines(n) {
  const lines = [...wrap(n.t)];
  if (n.d) lines.push(...wrap(n.d, CHARS + 2));
  (n.items || []).forEach((it) => lines.push(`· ${it.t}`));
  if (n.m) lines.push(n.m);
  if (n.tag && TAGS[n.tag]) lines.push(`[${TAGS[n.tag]}]`);
  return lines;
}

const side = (n, s) => ({
  r: [n.x + n.w, n.y + n.h / 2], l: [n.x, n.y + n.h / 2],
  t: [n.x + n.w / 2, n.y], b: [n.x + n.w / 2, n.y + n.h]
}[s]);

function autoSides(a, b) {
  if (b.x >= a.x + a.w + 8) return ['r', 'l'];
  if (b.x + b.w <= a.x - 8) return ['l', 'r'];
  if (b.y >= a.y + a.h + 8) return ['b', 't'];
  return ['t', 'b'];
}

/* Mismo trazado que el diagrama de la presentación (casos.js) */
function route(e, a, b) {
  if (e.via) {
    const v0 = e.via[0]; const vl = e.via[e.via.length - 1];
    const fs = e.fs || (v0[1] > a.y + a.h ? 'b' : v0[1] < a.y ? 't' : v0[0] > a.x ? 'r' : 'l');
    const ts = e.ts || (vl[1] < b.y ? 't' : vl[1] > b.y + b.h ? 'b' : vl[0] < b.x ? 'l' : 'r');
    const anchor = (n, s, to) => (s === 'l' || s === 'r')
      ? [side(n, s)[0], Math.min(n.y + n.h - 8, Math.max(n.y + 8, to[1]))]
      : [Math.min(n.x + n.w - 10, Math.max(n.x + 10, to[0])), side(n, s)[1]];
    return [anchor(a, fs, v0), ...e.via, anchor(b, ts, vl)];
  }
  const [fs, ts] = e.fs && e.ts ? [e.fs, e.ts] : autoSides(a, b);
  const [sx, sy] = side(a, fs); const [tx, ty] = side(b, ts);
  const h = 'lr'.includes(fs) && 'lr'.includes(ts);
  const v = 'tb'.includes(fs) && 'tb'.includes(ts);
  if (h) { const mx = (sx + tx) / 2; return [[sx, sy], [mx, sy], [mx, ty], [tx, ty]]; }
  if (v) { const my = (sy + ty) / 2; return [[sx, sy], [sx, my], [tx, my], [tx, ty]]; }
  return 'tb'.includes(fs) ? [[sx, sy], [sx, ty], [tx, ty]] : [[sx, sy], [tx, sy], [tx, ty]];
}

const dedupe = (pts) => pts.filter((p, i) => i === 0 || p[0] !== pts[i - 1][0] || p[1] !== pts[i - 1][1]);

/* Un diagrama dentro de un marco con título, desplazado a (ox, oy) */
function frame(spec, title, ox, oy) {
  const els = [];
  const nodes = new Map();
  spec.nodes.forEach((n) => {
    const lines = nodeLines(n);
    const h = Math.max(96, lines.length * FONT * LINE + 28);
    nodes.set(n.id, { ...n, lines, w: n.w || NODE_W, h, x: n.x, y: n.cy - h / 2 });
  });

  /* Grupos: fondo y título por encima de sus nodos */
  const groupEls = [];
  (spec.groups || []).forEach((g) => {
    const list = [...nodes.values()].filter((n) => n.g === g.id);
    if (!list.length) return;
    const c = GROUP[g.kind] || GROUP.input;
    const x = Math.min(...list.map((n) => n.x)) - PAD_X;
    const right = Math.max(...list.map((n) => n.x + n.w)) + PAD_X;
    const y = Math.min(...list.map((n) => n.y)) - PAD_T - HEAD;
    const bottom = Math.max(...list.map((n) => n.y + n.h)) + PAD_T;
    groupEls.push(base('rectangle', ox + x, oy + y, right - x, bottom - y, {
      strokeColor: c.stroke, backgroundColor: c.bg, strokeStyle: c.dashed ? 'dashed' : 'solid', roughness: 0
    }));
    groupEls.push(text(ox + x + 10, oy + y + 6, g.t, { size: 14, color: c.text }));
  });

  /* Nodos */
  const nodeEls = [];
  nodes.forEach((n) => {
    const kind = n.start ? 'start' : (n.tag && NODE[n.tag] ? n.tag : 'none');
    const c = NODE[kind];
    nodeEls.push(...box(ox + n.x, oy + n.y, n.w, n.lines, c, { strokeWidth: c.width || 1, minH: n.h }));
  });

  /* Flechas y etiquetas */
  const edgeEls = [];
  spec.edges.forEach((e) => {
    const a = nodes.get(e.from); const b = nodes.get(e.to);
    const pts = dedupe(route(e, a, b));
    const [x0, y0] = pts[0];
    const rel = pts.map(([x, y]) => [x - x0, y - y0]);
    const xs = rel.map((p) => p[0]); const ys = rel.map((p) => p[1]);
    edgeEls.push(base('arrow', ox + x0, oy + y0, Math.max(...xs) - Math.min(...xs), Math.max(...ys) - Math.min(...ys), {
      strokeColor: '#5c6b80', strokeStyle: e.dashed ? 'dashed' : 'solid', roughness: 0,
      points: rel, lastCommittedPoint: null, startBinding: null, endBinding: null,
      startArrowhead: null, endArrowhead: 'arrow', elbowed: false
    }));
    if (e.label) {
      let lp = e.labelAt;
      if (!Array.isArray(lp)) {
        let best = null;
        for (let i = 0; i < pts.length - 1; i++) {
          const len = Math.hypot(pts[i + 1][0] - pts[i][0], pts[i + 1][1] - pts[i][1]);
          if (!best || len > best.len) best = { len, mid: [(pts[i][0] + pts[i + 1][0]) / 2, (pts[i][1] + pts[i + 1][1]) / 2] };
        }
        lp = best.mid;
      }
      const t = text(0, 0, e.label, { size: 14, color: '#44546a' });
      t.x = ox + lp[0] - t.width / 2; t.y = oy + lp[1] - t.height - 4;
      edgeEls.push(t);
    }
  });

  /* Marco con su título */
  const all = [...nodes.values()];
  const minX = Math.min(...all.map((n) => n.x)) - 90;
  const maxX = Math.max(...all.map((n) => n.x + n.w)) + 90;
  const minY = Math.min(...all.map((n) => n.y)) - 110;
  const maxY = Math.max(...all.map((n) => n.y + n.h), ...spec.edges.flatMap((e) => (e.via || []).map((v) => v[1]))) + 60;
  const outer = base('rectangle', ox + minX, oy + minY, maxX - minX, maxY - minY, { strokeColor: '#030303', strokeWidth: 2, roughness: 1 });
  const head = text(ox + minX + 24, oy + minY + 18, title, { size: 36, color: '#030303' });

  els.push(outer, head, ...groupEls, ...edgeEls, ...nodeEls);
  return { els, height: maxY - minY, top: minY, left: minX, width: maxX - minX };
}

function legend(x, y) {
  const els = [text(x, y, 'Leyenda', { size: 20, color: '#030303' })];
  ['manual', 'dolor', 'auto', 'ia', 'humano'].forEach((k, i) => {
    els.push(...box(x, y + 40 + i * 58, 200, [TAGS[k]], NODE[k], { strokeWidth: NODE[k].width || 1, minH: 44 }));
  });
  return els;
}

function excalidraw(caseNo, hoy, propuesta, titles) {
  uid = 0; seed = caseNo * 1000;
  const a = frame(DIAGRAMS[hoy], titles[0], 0, 0);
  const b = frame(DIAGRAMS[propuesta], titles[1], 0, 0);
  const dy = a.top + a.height + 160 - b.top;
  b.els.forEach((el) => { el.y += dy; });
  const elements = [...a.els, ...b.els, ...legend(a.left + a.width + 60, a.top)];
  return JSON.stringify({
    type: 'excalidraw', version: 2, source: 'https://excalidraw.com',
    elements, appState: { viewBackgroundColor: '#ffffff', gridSize: null }, files: {}
  }, null, 2);
}

[
  [1, 'c1-hoy', 'c1-propuesta', ['Hoy · el lunes de Lucía', 'Propuesta · script «Preparar lunes»']],
  [2, 'c2-hoy', 'c2-propuesta', ['Hoy · la revisión de Javier', 'Propuesta · tres bandejas para Javier']]
].forEach(([n, hoy, prop, titles]) => {
  const name = `Caso ${n} - esquema.excalidraw`;
  writeFileSync(join(OUT, name), excalidraw(n, hoy, prop, titles));
  console.log(`Generado: ${name}`);
});
