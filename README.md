# Casos prácticos · Optimización de procesos

Dos casos ficticios de consultoría para el máster: entender un proceso,
dibujarlo, especificar una propuesta y construir el reporte con ayuda de una IA.
Empresas, personas y datos son inventados.

## Enlaces

- **Casos prácticos (alumnos):** `docs/index.html`, publicado en la raíz de GitHub Pages.
- **Solución (docente):** `docs/solucion/index.html`, publicado en `/solucion/`.

## Estructura

```
Para clase/                 Presentación de los casos
  _fuente/                  HTML, CSS, JS, datos, fuentes, logos y generar.mjs
Solo docente/
  Solucion de los casos/    Solución, esquemas .excalidraw y especificaciones .md
    _fuente/                Reutiliza los estilos y el JS de «Para clase/_fuente»
docs/                       Lo que sirve GitHub Pages (se genera, no se edita)
publicar.mjs                Regenera todo y actualiza docs/
```

## Actualizar

Necesita Node.js 18 o superior. Después de cambiar algo en `_fuente`:

```
node publicar.mjs
git add -A && git commit -m "Actualiza los casos" && git push
```
