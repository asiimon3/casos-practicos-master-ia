/* ══════════════════════════════════════════
   Regenera las dos presentaciones y copia en docs/ lo que
   publica GitHub Pages:
     docs/index.html            Casos prácticos (alumnos)
     docs/solucion/index.html   Solución del docente, con los
                                .excalidraw y las especificaciones

   Uso (desde esta carpeta):
     node publicar.mjs
   ══════════════════════════════════════════ */

import { execFileSync } from 'node:child_process';
import { copyFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = dirname(fileURLToPath(import.meta.url));
const CLASE = join(ROOT, 'Para clase');
const SOL = join(ROOT, 'Solo docente', 'Solucion de los casos');
const DOCS = join(ROOT, 'docs');

for (const dir of [join(CLASE, '_fuente'), join(SOL, '_fuente')]) {
  execFileSync(process.execPath, ['generar.mjs'], { cwd: dir, stdio: 'inherit' });
}

mkdirSync(join(DOCS, 'solucion'), { recursive: true });
writeFileSync(join(DOCS, '.nojekyll'), '');
copyFileSync(join(CLASE, 'Casos practicos - Optimizacion de procesos.html'), join(DOCS, 'index.html'));
copyFileSync(join(SOL, 'Solucion - Casos practicos.html'), join(DOCS, 'solucion', 'index.html'));
for (const [from, to] of [
  ['Caso 1 - esquema.excalidraw', 'caso-1-esquema.excalidraw'],
  ['Caso 2 - esquema.excalidraw', 'caso-2-esquema.excalidraw'],
  ['Caso 1 - especificacion.md', 'caso-1-especificacion.md'],
  ['Caso 2 - especificacion.md', 'caso-2-especificacion.md']
]) copyFileSync(join(SOL, from), join(DOCS, 'solucion', to));

console.log('Listo: docs/ actualizado.');
