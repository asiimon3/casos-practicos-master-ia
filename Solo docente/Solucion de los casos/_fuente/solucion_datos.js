/* ══════════════════════════════════════════
   Solución de los casos · datos
   - STEPS / WHO: recorrido de cada bloque (raíl superior).
   - DIAGRAMS: proceso de hoy (lo que deberían dibujar los alumnos)
     y propuesta de cada caso. generar.mjs también los convierte
     en los archivos .excalidraw.
   Todo es ficticio: empresas, personas, códigos e importes.
   ══════════════════════════════════════════ */

window.CP_STEPS = [
  { id: 'c1-hoy',       who: 'c1', label: 'Hoy',        slide: 'c1-hoy' },
  { id: 'c1-dolor',     who: 'c1', label: 'Diagnóstico', slide: 'c1-dolor' },
  { id: 'c1-propuesta', who: 'c1', label: 'Propuesta',  slide: 'c1-propuesta' },
  { id: 'c1-cambio',    who: 'c1', label: 'Qué cambia', slide: 'c1-cambio' },
  { id: 'c2-hoy',       who: 'c2', label: 'Hoy',        slide: 'c2-hoy' },
  { id: 'c2-regla-ia',  who: 'c2', label: 'Regla o IA', slide: 'c2-regla-ia' },
  { id: 'c2-propuesta', who: 'c2', label: 'Propuesta',  slide: 'c2-propuesta' },
  { id: 'c2-gastos',    who: 'c2', label: 'Los seis gastos', slide: 'c2-gastos' },
  { id: 'c2-cambio',    who: 'c2', label: 'Qué cambia', slide: 'c2-cambio' }
];

window.CP_WHO = {
  c1: { name: 'Caso 1' },
  c2: { name: 'Caso 2' }
};

/* Tipos de grupo: input · module · output · feed · context · impact · ext · end
   Un nodo puede tener: t (título), d (texto), m (dato), items, desc
   (explicación en el panel inferior), tag (manual · dolor · auto · ia ·
   humano · pendiente) y start (punto de partida).
   Rejilla: nodos de 180 px, columnas x = 0, 236, 472, 708, 944 y filas
   cy = 0 y cy = 250. */

window.CP_DIAGRAMS = {

  /* ───────────── Caso 1 · hoy ───────────── */
  'c1-hoy': {
    layout: 'manual', nodeW: 180, info: true,
    hint: 'Pasa el cursor por cada paso para ver qué ocurre en él.',
    groups: [
      { id: 'g-rec', kind: 'impact',  t: 'Recibir y juntar · Lucía, a mano' },
      { id: 'g-lim', kind: 'impact',  t: 'Limpiar y resumir · Lucía, a mano' },
      { id: 'g-dir', kind: 'context', t: 'Dirección' }
    ],
    nodes: [
      { id: 'tiendas',    x: 0,   cy: 0, start: true, t: 'Seis tiendas', d: 'un Excel por email, antes de las 10:00', desc: 'Cada encargado envía el lunes las ventas de la semana anterior. No todos usan la misma plantilla y alguno envía tarde o dos veces.' },
      { id: 'descargar',  g: 'g-rec', x: 236, cy: 0, t: 'Descargar adjuntos', d: 'y comprobar quién falta', tag: 'manual', desc: 'Lucía guarda los adjuntos en una carpeta. Si falta una tienda, la llama o le escribe y espera.' },
      { id: 'abrir',      g: 'g-rec', x: 472, cy: 0, t: 'Abrir uno a uno', d: 'cada fichero es distinto', tag: 'manual', desc: 'Abre cada fichero para ver qué formato trae esta vez: columnas, fechas, importes…' },
      { id: 'copiar',     g: 'g-rec', x: 708, cy: 0, t: 'Copiar al maestro', d: 'Excel con todo el año', m: '~1.200 filas', tag: 'dolor', desc: 'Copia y pega las filas en el Excel maestro, columna a columna cuando el orden no coincide. Es el paso donde más errores se cuelan.' },
      { id: 'corregir',   g: 'g-rec', x: 944, cy: 0, t: 'Corregir formatos', d: 'fechas, importes y nombres', tag: 'dolor', desc: 'Unifica fechas, convierte importes escritos como texto y busca en el catálogo el código de cada producto escrito «a mano».' },
      { id: 'duplicados', g: 'g-lim', x: 0,   cy: 250, t: 'Quitar duplicados', d: 'y filas de totales', tag: 'manual', desc: 'Elimina filas repetidas (una tienda que envió dos versiones) y las filas «TOTAL» que se copiaron como si fueran ventas.' },
      { id: 'resumen',    g: 'g-lim', x: 236, cy: 250, t: 'Tabla dinámica', d: 'ventas por tienda y familia', tag: 'manual', desc: 'Actualiza la tabla dinámica y el gráfico, y compara a ojo con la semana anterior.' },
      { id: 'informe',    g: 'g-lim', x: 472, cy: 250, t: 'Informe en PDF', d: 'por email al director', tag: 'manual', desc: 'Exporta el resumen a PDF y lo envía. El objetivo son las 12:00; a menudo llega más tarde.' },
      { id: 'director',   g: 'g-dir', x: 708, cy: 250, t: 'El director lo revisa', d: 'decide pedidos y promociones', desc: 'Con el informe decide reposiciones y promociones de la semana.' },
      { id: 'dudas',      g: 'g-dir', x: 944, cy: 250, t: 'Cifras que no cuadran', d: '«¿Esto está bien?»', tag: 'dolor', desc: 'Si algo parece raro, el director pregunta. Lucía no tiene forma rápida de comprobarlo y vuelve a repasar los datos.' }
    ],
    edges: [
      { from: 'tiendas', to: 'descargar' },
      { from: 'descargar', to: 'abrir' },
      { from: 'abrir', to: 'copiar' },
      { from: 'copiar', to: 'corregir' },
      { from: 'corregir', to: 'duplicados', fs: 'b', ts: 'l', via: [[1034, 112], [-36, 112], [-36, 250]] },
      { from: 'duplicados', to: 'resumen' },
      { from: 'resumen', to: 'informe' },
      { from: 'informe', to: 'director' },
      { from: 'director', to: 'dudas', dashed: true },
      { from: 'dudas', to: 'duplicados', fs: 'b', ts: 'b', via: [[1034, 372], [90, 372]], dashed: true, label: 'repasar fila a fila', nowrap: true, labelAt: [562, 372] }
    ]
  },

  /* ───────────── Caso 1 · propuesta ───────────── */
  'c1-propuesta': {
    layout: 'manual', nodeW: 180, info: true,
    hint: 'Pasa el cursor por cada paso. Lo verde lo hace el script; Lucía solo revisa y envía.',
    groups: [
      { id: 'g-auto',  kind: 'feed',    t: 'Script «Preparar lunes» · 10:00, sin tocar nada' },
      { id: 'g-lucia', kind: 'context', t: 'Lucía · revisa y envía' },
      { id: 'g-dir',   kind: 'input',   t: 'Dirección' }
    ],
    nodes: [
      { id: 'tiendas',  x: 0,   cy: 0, start: true, t: 'Seis tiendas', d: 'plantilla común con lista de productos', desc: 'En origen: todas las tiendas usan la misma plantilla de Excel, con la lista de productos del catálogo en un desplegable. Siguen enviándola por email, como hoy: no aprenden nada nuevo.' },
      { id: 'guardar',  g: 'g-auto', x: 236, cy: 0, t: 'Guardar adjuntos', d: 'una regla de correo los deja en una carpeta', tag: 'auto', desc: 'Una regla del correo guarda cada adjunto en la carpeta de la semana. A las 10:00 el script mira qué tiendas faltan.' },
      { id: 'unir',     g: 'g-auto', x: 472, cy: 0, t: 'Unir y normalizar', d: 'columnas, fechas e importes', tag: 'auto', desc: 'Lee todos los ficheros (también los antiguos y el CSV de la web), traduce los nombres de columna con un diccionario de equivalencias y deja fechas e importes en un único formato.' },
      { id: 'limpiar',  g: 'g-auto', x: 708, cy: 0, t: 'Limpiar y emparejar', d: 'duplicados, TOTAL y códigos', tag: 'auto', desc: 'Se queda con la última versión de cada tienda, quita las filas de TOTAL y busca el código de cada producto: primero exacto y, si no, por parecido. Lo dudoso no lo decide: lo marca para Lucía.' },
      { id: 'control',  g: 'g-auto', x: 944, cy: 0, t: 'Hoja de control', d: 'qué falta, qué se quitó, qué cambia', m: 'y el maestro actualizado', tag: 'auto', desc: 'Una pestaña con tiendas recibidas, filas descartadas y por qué, productos sin código y diferencias grandes con la semana anterior. Junto a ella, el maestro y el resumen ya actualizados.' },
      { id: 'aviso',    x: 0, cy: 250, t: 'Aviso a la tienda', d: 'email automático a las 10:00', tag: 'auto', desc: 'Si a las 10:00 falta una tienda, le llega un recordatorio y Lucía lo ve en la hoja de control. Cuando llega el fichero, Lucía vuelve a lanzar el script con un doble clic.' },
      { id: 'revisar',  g: 'g-lucia', x: 944, cy: 250, t: 'Lucía revisa', d: 'solo lo que está marcado', m: '~20 min', tag: 'humano', desc: 'Lucía mira la hoja de control, resuelve los productos dudosos y comprueba las diferencias grandes. Es ella quien da el visto bueno.' },
      { id: 'informe',  g: 'g-lucia', x: 708, cy: 250, t: 'Informe en PDF', d: 'listo para enviar a las 10:30', tag: 'auto', desc: 'El script ya ha generado el PDF con el mismo formato de siempre. Lucía lo envía cuando ha revisado.' },
      { id: 'director', g: 'g-dir', x: 472, cy: 250, t: 'El director decide', d: 'con cifras que se pueden comprobar', desc: 'Si pregunta «¿esto está bien?», Lucía abre la hoja de control y le contesta al momento: qué entró, qué se quitó y por qué.' }
    ],
    edges: [
      { from: 'tiendas', to: 'guardar' },
      { from: 'guardar', to: 'unir' },
      { from: 'unir', to: 'limpiar' },
      { from: 'limpiar', to: 'control' },
      { from: 'guardar', to: 'aviso', fs: 'b', ts: 'r', via: [[326, 250]], label: 'falta una', labelAt: [326, 160] },
      { from: 'aviso', to: 'tiendas', dashed: true, label: 'recordatorio', labelAt: [90, 125] },
      { from: 'control', to: 'revisar' },
      { from: 'revisar', to: 'informe' },
      { from: 'informe', to: 'director' }
    ]
  },

  /* ───────────── Caso 2 · hoy ───────────── */
  'c2-hoy': {
    layout: 'manual', nodeW: 180, info: true,
    hint: 'Pasa el cursor por cada paso. La fila de abajo es lo que ocurre cuando algo no cumple.',
    groups: [
      { id: 'g-rev', kind: 'impact',  t: 'Revisión de Javier · a mano' },
      { id: 'g-con', kind: 'context', t: 'Contabilidad' },
      { id: 'g-dev', kind: 'end',     t: 'Cuando algo no cumple' }
    ],
    nodes: [
      { id: 'empleado', x: 0,   cy: 0, start: true, t: 'El empleado sube el gasto', d: 'formulario + foto del ticket', desc: 'Rellena fecha, categoría, importe y un comentario, y adjunta una foto del ticket hecha con el móvil.' },
      { id: 'abrir',    g: 'g-rev', x: 236, cy: 0, t: 'Abrir la foto', d: 'una a una, por orden de llegada', tag: 'manual', desc: 'Javier recibe un aviso por cada respuesta del formulario y abre la foto desde la carpeta compartida.' },
      { id: 'comparar', g: 'g-rev', x: 472, cy: 0, t: 'Comparar con el ticket', d: 'fecha, importe, concepto', tag: 'dolor', desc: 'Lee el ticket (a veces borroso o arrugado) y comprueba que coincide con lo que escribió el empleado.' },
      { id: 'normas',   g: 'g-rev', x: 708, cy: 0, t: 'Comprobar la política', d: 'límites, plazos, categorías', tag: 'manual', desc: 'Revisa límites por categoría, plazos de entrega, conceptos que no se pagan y si ese ticket ya se pasó antes. Lo hace de memoria o buscando en el PDF.' },
      { id: 'aprobar',  g: 'g-con', x: 944, cy: 0, t: 'Pasar a contabilidad', d: 'Excel mensual', tag: 'manual', desc: 'Copia los gastos aprobados en el Excel que contabilidad usa para pagarlos en la nómina.' },
      { id: 'pago',     g: 'g-con', x: 944, cy: 250, t: 'Pago en la nómina', d: 'a fin de mes', desc: 'Si el gasto llega aprobado antes del cierre de nómina, se paga ese mes. Si no, el siguiente.' },
      { id: 'devolver', g: 'g-dev', x: 708, cy: 250, t: 'Devolver por email', d: 'explicando qué falta', tag: 'manual', desc: 'Javier escribe al empleado explicando el problema: falta un dato, el ticket no se lee, supera un límite…' },
      { id: 'esperar',  g: 'g-dev', x: 472, cy: 250, t: 'Esperar la respuesta', d: 'a veces, semanas', tag: 'dolor', desc: 'El gasto queda parado. Si se cruza con el cierre de nómina, el empleado cobra un mes más tarde.' },
      { id: 'corrige',  g: 'g-dev', x: 236, cy: 250, t: 'El empleado lo corrige', d: 'y lo vuelve a subir', desc: 'El empleado envía de nuevo el gasto y la revisión empieza otra vez desde el principio.' }
    ],
    edges: [
      { from: 'empleado', to: 'abrir' },
      { from: 'abrir', to: 'comparar' },
      { from: 'comparar', to: 'normas' },
      { from: 'normas', to: 'aprobar', label: 'cumple' },
      { from: 'aprobar', to: 'pago' },
      { from: 'normas', to: 'devolver', dashed: true, label: 'no cumple', labelAt: [798, 113] },
      { from: 'devolver', to: 'esperar' },
      { from: 'esperar', to: 'corrige' },
      { from: 'corrige', to: 'abrir', fs: 'l', ts: 'l', via: [[204, 250], [204, 26]], dashed: true, label: 'vuelta a empezar', labelAt: [204, 113] }
    ]
  },

  /* ───────────── Caso 2 · propuesta ───────────── */
  'c2-propuesta': {
    layout: 'manual', nodeW: 180, info: true,
    hint: 'Pasa el cursor por cada paso. La IA solo lee el ticket; las reglas comprueban y Javier decide.',
    groups: [
      { id: 'g-ia',     kind: 'ext',     t: 'IA · solo lee' },
      { id: 'g-reglas', kind: 'feed',    t: 'Reglas automáticas' },
      { id: 'g-javier', kind: 'context', t: 'Javier · decide' },
      { id: 'g-con',    kind: 'input',   t: 'Contabilidad' }
    ],
    nodes: [
      { id: 'empleado',  x: 0,   cy: 0, start: true, t: 'El empleado sube el gasto', d: 'formulario con avisos y límites', desc: 'El formulario pide lo que falta antes de enviar: asistentes en las comidas, número de noches en el hotel, factura desde 100 €. Y enseña el límite de cada categoría mientras se rellena.' },
      { id: 'leer',      g: 'g-ia', x: 236, cy: 0, t: 'Leer el ticket', d: 'fecha, importe, establecimiento y líneas', tag: 'ia', desc: 'Un modelo con visión lee la foto y devuelve siempre los mismos campos (un JSON). No aprueba ni rechaza nada. Proveedor con acuerdo de tratamiento de datos y sin usar los tickets para entrenar.' },
      { id: 'reglas',    g: 'g-reglas', x: 472, cy: 0, t: 'Comprobar la política', d: 'N1 a N6 y formulario frente a ticket', tag: 'auto', desc: 'Reglas exactas en Python: plazo, límites por categoría, conceptos que no se pagan, factura, duplicados (también entre empleados) y que el ticket diga lo mismo que el formulario. Los límites viven en un archivo aparte que Javier puede cambiar.' },
      { id: 'clasificar', g: 'g-reglas', x: 708, cy: 0, t: 'Tres bandejas', items: [{ t: 'Correcto' }, { t: 'Ajustar', m: 'con el cálculo hecho' }, { t: 'Revisar', m: 'con el motivo' }], tag: 'auto', desc: 'Cada gasto cae en una bandeja con la norma que lo explica. En «Ajustar» el importe propuesto ya está calculado.' },
      { id: 'javier',    g: 'g-javier', x: 944, cy: 0, t: 'Javier decide', d: 'aprueba en bloque lo correcto y mira el resto uno a uno', tag: 'humano', desc: 'Firma todo, como exige la auditoría. Los correctos los aprueba en bloque tras un vistazo (y abre uno de cada diez al azar). El tiempo lo dedica a «Ajustar» y «Revisar».' },
      { id: 'contab',    g: 'g-con', x: 944, cy: 250, t: 'Exportar a contabilidad', d: 'el Excel mensual, sin copiar a mano', tag: 'auto', desc: 'Los gastos aprobados salen solos al Excel de contabilidad. El empleado recibe un aviso con lo aprobado y, si hay ajuste, la norma que se aplicó.' },
      { id: 'pago',      g: 'g-con', x: 708, cy: 250, t: 'Pago en la nómina', d: 'del mismo mes', desc: 'Sin idas y vueltas por email, casi todo llega aprobado antes del cierre de nómina.' },
      { id: 'devolver',  x: 236, cy: 250, t: 'Pedir otra foto', d: 'al momento, en el formulario', tag: 'auto', desc: 'Si la IA no puede leer el ticket, el empleado lo sabe en ese momento y repite la foto. No pasa por Javier ni espera semanas.' }
    ],
    edges: [
      { from: 'empleado', to: 'leer' },
      { from: 'leer', to: 'reglas' },
      { from: 'reglas', to: 'clasificar' },
      { from: 'clasificar', to: 'javier' },
      { from: 'javier', to: 'contab' },
      { from: 'contab', to: 'pago' },
      { from: 'leer', to: 'devolver', dashed: true, label: 'no se lee', labelAt: [326, 160] },
      { from: 'devolver', to: 'empleado', fs: 'l', ts: 'b', via: [[90, 250]], dashed: true, label: 'la repite', labelAt: [90, 150] }
    ]
  }
};
