/* ══════════════════════════════════════════
   Casos prácticos · datos
   - STEPS / WHO: recorrido de cada bloque (raíl superior).
   - Sin diagramas del proceso de hoy: lo dibujan los alumnos.
   - DATA: contenido de los exploradores de cada diapositiva.
   Todo es ficticio: empresas, personas, códigos e importes.
   ══════════════════════════════════════════ */

window.CP_STEPS = [
  { id: 'c1-contexto', who: 'c1', label: 'Contexto', slide: 'c1-contexto' },
  { id: 'c1-hoy',      who: 'c1', label: 'Hoy',      slide: 'c1-hoy' },
  { id: 'c1-datos',    who: 'c1', label: 'Datos',    slide: 'c1-datos' },
  { id: 'c1-reto',     who: 'c1', label: 'Encargo',  slide: 'c1-reto' },
  { id: 'c2-contexto', who: 'c2', label: 'Contexto', slide: 'c2-contexto' },
  { id: 'c2-hoy',      who: 'c2', label: 'Hoy',      slide: 'c2-hoy' },
  { id: 'c2-normas',   who: 'c2', label: 'Normas',   slide: 'c2-normas' },
  { id: 'c2-gastos',   who: 'c2', label: 'Gastos',   slide: 'c2-gastos' },
  { id: 'c2-reto',     who: 'c2', label: 'Encargo',  slide: 'c2-reto' },
  { id: 'paso-dibujo', who: 'm',  label: 'Dibujar',      slide: 'paso-dibujo' },
  { id: 'paso-spec',   who: 'm',  label: 'Especificar',  slide: 'paso-spec' },
  { id: 'paso-tec',    who: 'm',  label: 'Construir',    slide: 'paso-tec' },
  { id: 'entrega',     who: 'm',  label: 'Entregar',     slide: 'entrega' }
];

window.CP_WHO = {
  c1: { name: 'Caso 1' },
  c2: { name: 'Caso 2' },
  m:  { name: 'Método' }
};

window.CP_DATA = {

  /* ───────────── Método ───────────── */
  method: [
    {
      n: 1, t: 'Entender', d: 'El problema, con el cliente',
      doing: 'Escuchad el caso como si fuera una reunión real. Anotad cómo es el proceso, quién interviene, qué datos hay y dónde se pierde tiempo.',
      out: 'Notas y una lista de preguntas que haríais al cliente.',
      trap: 'Pensar ya en la solución antes de entender el problema.'
    },
    {
      n: 2, t: 'Dibujar', d: 'Un esquema en Excalidraw',
      doing: 'Dibujad el proceso de hoy y vuestra propuesta en el mismo lienzo. Marcad los puntos de dolor y qué hace cada pieza.',
      out: 'Archivo .excalidraw y su exportación en PNG o SVG.',
      trap: 'Dibujar la tecnología («Python», «IA») en vez de los pasos del proceso.'
    },
    {
      n: 3, t: 'Especificar', d: 'Una instrucción en Markdown',
      doing: 'Convertid el esquema en una especificación que una IA pueda seguir: problema, propuesta, estructura del reporte, diagramas, tecnologías y estilo.',
      out: 'Archivo especificacion.md siguiendo la plantilla.',
      trap: 'Escribir «hazme un reporte bonito» y dejar que la IA decida todo.'
    },
    {
      n: 4, t: 'Construir', d: 'El reporte, con la IA',
      doing: 'Pasad la especificación a la IA, revisad lo que genera, corregid y volved a pedir. Vosotros sois los responsables del resultado.',
      out: 'Un único archivo HTML con CSS y JavaScript.',
      trap: 'Entregar la primera versión sin leerla.'
    }
  ],

  /* ───────────── Caso 1 · ficheros de cada tienda ───────────── */
  ficheros: {
    centro: {
      label: 'Tienda Centro', short: 'Usa la plantilla de referencia',
      files: [{ name: 'ventas_centro_sem45.xlsx', at: 'lunes 08:52' }],
      cols: ['Fecha', 'Código', 'Producto', 'Uds.', 'Importe (€)'],
      rows: [
        ['03/11/2026', 'CAS-URB-M', 'Casco Urban talla M', '2', '79,80'],
        ['03/11/2026', 'CAM-700-28', 'Cámara 700x28', '5', '34,75'],
        ['04/11/2026', 'BIC-CTY-52', 'Bicicleta City 52', '1', '449,00'],
        ['05/11/2026', 'LUZ-USB-01', 'Luz delantera USB', '3', '59,70']
      ],
      marks: [],
      notes: [
        ['ok', 'Es el formato que debería usar todo el mundo: fecha, código del catálogo, unidades e importe.'],
        ['manual', 'Aun así, Lucía copia y pega las filas en el maestro a mano.']
      ]
    },
    puerto: {
      label: 'Tienda Puerto', short: 'Envía dos versiones',
      files: [{ name: 'ventas puerto.xlsx', at: 'lunes 09:40' }, { name: 'ventas puerto CORREGIDO.xlsx', at: 'lunes 11:15' }],
      cols: ['Fecha', 'Código', 'Producto', 'Uds.', 'Importe (€)'],
      rows: [
        ['03/11/2026', 'CAS-URB-L', 'Casco Urban talla L', '1', '39,90'],
        ['04/11/2026', 'CAD-ANT-02', 'Candado antirrobo', '2', '51,80'],
        ['06/11/2026', 'BIC-MTB-29', 'Bicicleta montaña 29', '1', '689,00'],
        ['08/11/2026', 'CAM-700-28', 'Cámara 700x28', '4', '27,80']
      ],
      marks: [[2, 4]],
      notes: [
        ['warn', 'Llegan dos ficheros: el segundo corrige un importe del primero. Hay que saber cuál vale.'],
        ['warn', 'Si se copian los dos, las ventas de la tienda se duplican. Ya pasó en septiembre.']
      ]
    },
    universidad: {
      label: 'Tienda Universidad', short: 'Columnas con otros nombres',
      files: [{ name: 'Ventas semana.xlsx', at: 'lunes 10:05' }],
      cols: ['Día', 'Artículo', 'Cant.', 'Total'],
      rows: [
        ['lunes 3', 'Casco urban M', '1', '39,9'],
        ['lunes 3', 'camara 700', '6', '41,7'],
        ['miércoles 5', 'Bici city 52', '1', '449'],
        ['sábado 8', 'luz usb delantera', '2', '39,8']
      ],
      marks: [[0, 0], [0, 1], [1, 1], [2, 1]],
      notes: [
        ['warn', 'Otras columnas: «Día» en vez de fecha, «Artículo» en vez de producto, y sin código del catálogo.'],
        ['warn', 'Los productos se escriben de memoria: hay que buscar cada uno en el catálogo.'],
        ['manual', 'La fecha hay que deducirla: «lunes 3» es el 3 de noviembre.']
      ]
    },
    norte: {
      label: 'Tienda Norte', short: 'Llega tarde y en otro formato',
      files: [{ name: 'VENTAS_NORTE_03-09NOV.xls', at: 'lunes 12:40' }],
      cols: ['Fecha', 'Ref', 'Descripción', 'Unidades', 'Importe'],
      rows: [
        ['2026-11-03', 'BIC-CTY-52', 'BICICLETA CITY 52', '2', '898,00 €'],
        ['2026-11-04', 'CAS-URB-M', 'CASCO URBAN M', '1', '39,90 €'],
        ['2026-11-07', 'BIC-ELE-48', 'BICICLETA ELÉCTRICA 48', '1', '1.249,00 €'],
        ['2026-11-08', 'CAM-700-28', 'CÁMARA 700X28', '3', '20,85 €']
      ],
      marks: [[0, 0], [2, 4]],
      notes: [
        ['warn', 'Llega a las 12:40, cuando el informe ya debería estar enviado.'],
        ['warn', 'Fechas en otro formato e importes escritos como texto, con el símbolo €. Excel no los suma.'],
        ['manual', 'Formato .xls antiguo: hay que abrirlo y guardarlo de nuevo.']
      ]
    },
    playa: {
      label: 'Tienda Playa', short: 'Nombres libres y fila de total',
      files: [{ name: 'playa.xlsx', at: 'lunes 09:15' }],
      cols: ['Fecha', 'Código', 'Producto', 'Uds.', 'Importe (€)'],
      rows: [
        ['03/11/2026', '', 'casco urban M', '3', '119,70'],
        ['05/11/2026', 'ALQ-DIA', 'Alquiler bici 1 día', '9', '135,00'],
        ['07/11/2026', '', 'CASCO URBAN T.M', '2', '79,80'],
        ['TOTAL', '', '', '14', '334,50']
      ],
      marks: [[0, 2], [2, 2], [3, 0]],
      notes: [
        ['warn', 'El mismo producto escrito de dos formas y sin código.'],
        ['warn', 'La última fila es un total: si se copia, la tienda vende el doble.'],
        ['question', '«Alquiler» no está en el catálogo de productos. ¿Cuenta como venta?']
      ]
    },
    online: {
      label: 'Tienda online', short: 'Exportación automática de la web',
      files: [{ name: 'export_pedidos_2026-11-09.csv', at: 'lunes 07:00' }],
      cols: ['order_id', 'created_at', 'sku', 'qty', 'line_total', 'status'],
      rows: [
        ['W-10482', '2026-11-03T18:22Z', 'LUZ-USB-01', '1', '19.90', 'paid'],
        ['W-10490', '2026-11-04T09:05Z', 'CAS-URB-S', '1', '39.90', 'paid'],
        ['W-10471', '2026-11-05T11:40Z', 'BIC-CTY-52', '-1', '-449.00', 'refunded'],
        ['W-10503', '2026-11-08T21:13Z', 'CAM-700-28', '2', '13.90', 'paid']
      ],
      marks: [[0, 1], [2, 3], [2, 4]],
      notes: [
        ['ok', 'Llega sola y con el código del catálogo (sku).'],
        ['warn', 'Es un CSV en inglés con 38 columnas, de las que solo hacen falta cinco. Decimales con punto.'],
        ['question', 'Las devoluciones aparecen en negativo. ¿Se restan de las ventas de la semana?']
      ]
    }
  },

  /* ───────────── Caso 2 · normas ───────────── */
  normas: [
    { n: 'N1', t: 'Plazo', rule: 'Los gastos se suben como máximo 30 días después de la fecha del ticket.', how: 'Compara la fecha del ticket con la del envío.' },
    { n: 'N2', t: 'Comidas', rule: 'Hasta 30 € por persona y día. Con clientes, hasta 45 € por persona, indicando quién asistió.', how: 'Divide el importe entre los asistentes del comentario.' },
    { n: 'N3', t: 'Hotel', rule: 'Hasta 110 € por noche. Se paga hasta el límite; el exceso corre a cargo del empleado.', how: 'Cuenta las noches del ticket y calcula el precio por noche.' },
    { n: 'N4', t: 'No se pagan', rule: 'Alcohol, minibar, multas y propinas por encima del 10 %.', how: 'Lee el ticket línea a línea buscando esos conceptos.' },
    { n: 'N5', t: 'Justificante', rule: 'Ticket o factura legible con fecha, importe y establecimiento. Desde 100 €, factura a nombre de la empresa.', how: 'Mira si la foto se lee y si hace falta factura.' },
    { n: 'N6', t: 'Una sola vez', rule: 'Cada ticket se reembolsa una única vez, aunque lo suban personas distintas.', how: 'Intenta recordar si ya lo ha visto antes.' }
  ],

  /* ───────────── Caso 2 · gastos ───────────── */
  gastos: {
    tren: {
      label: 'Tren a Zaragoza', short: '48,30 € · Transporte',
      form: [['Empleada', 'A. M., Consultoría'], ['Fecha', '12/10/2026'], ['Categoría', 'Transporte'], ['Importe', '48,30 €'], ['Comentario', 'Reunión con cliente'], ['Enviado', '14/10/2026']],
      ticket: { shop: 'RENFE · Billete', date: '12/10/2026', lines: [['Madrid → Zaragoza', '48,30'], ['Turista · plaza 14C', '']], total: '48,30' },
      verdict: 'ok', verdictText: 'Aprobado', minutes: 2,
      rules: [],
      why: 'Todo coincide y cumple la política. Como la mayoría de los gastos: no tenía ningún problema, pero recibió la misma revisión que los demás.'
    },
    comida: {
      label: 'Comida con cliente', short: '86,40 € · Comidas',
      form: [['Empleado', 'R. P., Ventas'], ['Fecha', '07/10/2026'], ['Categoría', 'Comidas'], ['Importe', '86,40 €'], ['Comentario', 'Comida con el cliente (2 personas)'], ['Enviado', '09/10/2026']],
      ticket: { shop: 'Restaurante El Puerto', date: '07/10/2026', lines: [['2 × Menú del día', '58,00'], ['1 × Agua grande', '3,50'], ['2 × Copa de vino', '9,00'], ['2 × Café', '3,60'], ['IVA incluido', '']], total: '74,10' },
      verdict: 'partial', verdictText: 'Aprobado en parte · 65,10 €', minutes: 7,
      rules: ['N2', 'N4', 'N5'],
      why: 'El formulario dice 86,40 € y el ticket suma 74,10 €: el empleado añadió una propina que no aparece en ningún justificante. El vino no se paga. Además, no indica quién era el cliente.'
    },
    hotel: {
      label: 'Hotel en Bilbao', short: '238,00 € · Alojamiento',
      form: [['Empleada', 'L. G., Tecnología'], ['Fecha', '20/10/2026'], ['Categoría', 'Alojamiento'], ['Importe', '238,00 €'], ['Comentario', 'Formación cliente, 2 noches'], ['Enviado', '23/10/2026']],
      ticket: { shop: 'Hotel Ría · Factura', date: '20/10/2026', lines: [['Habitación · 2 noches × 119,00', '238,00'], ['A nombre de: Faro Consultores', ''], ['CIF B-00000000', '']], total: '238,00' },
      verdict: 'partial', verdictText: 'Aprobado en parte · 220,00 €', minutes: 5,
      rules: ['N3'],
      why: '119 € por noche supera el límite de 110 €. Se pagan 220 € y los 18 € restantes corren a cargo de la empleada. La factura sí está a nombre de la empresa.'
    },
    taxi: {
      label: 'Taxi al aeropuerto', short: '23,50 € · Transporte',
      form: [['Empleado', 'M. S., Consultoría'], ['Fecha', '14/10/2026'], ['Categoría', 'Transporte'], ['Importe', '23,50 €'], ['Comentario', 'Vuelo a Lisboa'], ['Enviado', '20/10/2026']],
      ticket: { shop: 'Taxi · Licencia 0000', date: '14/09/2026', lines: [['Carrera urbana', '21,00'], ['Suplemento aeropuerto', '2,50']], total: '23,50' },
      verdict: 'rejected', verdictText: 'Rechazado', minutes: 6,
      rules: ['N1'],
      why: 'El ticket es del 14 de septiembre, no de octubre: el empleado se equivocó al escribir la fecha. Se envió 36 días después, fuera de plazo. Javier solo lo vio al comparar las fechas con calma.'
    },
    parking: {
      label: 'Parking en oficina de cliente', short: '12,00 € · Transporte',
      form: [['Empleada', 'C. R., Proyectos'], ['Fecha', '16/10/2026'], ['Categoría', 'Transporte'], ['Importe', '12,00 €'], ['Comentario', 'Parking reunión'], ['Enviado', '17/10/2026']],
      ticket: { shop: 'P▒rk▒ng C▒ntr▒', date: '1▒/10/20▒▒', lines: [['▒▒▒▒▒▒▒ ▒▒▒▒', '▒▒,▒▒']], total: '▒▒,▒▒', blurry: true },
      verdict: 'returned', verdictText: 'Devuelto al empleado', minutes: 4,
      rules: ['N5'],
      why: 'La foto está movida y no se leen ni la fecha ni el importe. Javier escribe pidiendo una foto nueva. La empleada responde nueve días después.'
    },
    duplicado: {
      label: 'Cena de equipo', short: '54,00 € · Comidas',
      form: [['Empleado', 'D. F., Consultoría'], ['Fecha', '02/10/2026'], ['Categoría', 'Comidas'], ['Importe', '54,00 €'], ['Comentario', 'Cena proyecto con J. T.'], ['Enviado', '05/10/2026']],
      ticket: { shop: 'Taberna La Lonja', date: '02/10/2026', lines: [['2 × Menú noche', '50,00'], ['2 × Agua', '4,00']], total: '54,00' },
      verdict: 'rejected', verdictText: 'Rechazado · ya pagado', minutes: 10,
      rules: ['N6'],
      why: 'J. T. subió el mismo ticket tres días antes y ya estaba aprobado. Javier lo detectó por casualidad, porque le sonaba el restaurante. Otras veces no lo detecta.'
    }
  },

  /* ───────────── Especificación: secciones ─────────────
     Ejemplo neutro (clínica veterinaria) para no dar la solución de los casos. */
  spec: {
    idea: {
      label: '1 · Idea principal', short: 'Qué es y para quién',
      md: '## 1. Idea principal',
      vague: 'Haz un reporte sobre la clínica.',
      good: 'Reporte de 8 diapositivas para la gerente de una clínica veterinaria.\nObjetivo: que entienda en 5 minutos por qué confirmar las citas\npor teléfono le cuesta 2 horas al día y cómo reducirlo.'
    },
    problema: {
      label: '2 · El problema', short: 'Proceso actual, datos y dolor',
      md: '## 2. El problema',
      vague: 'Pierden mucho tiempo con las citas.',
      good: '- Cada tarde, una recepcionista llama a las ~60 citas del día siguiente (2 h).\n- El 15 % no contesta y el 8 % no se presenta.\n- Datos disponibles: agenda en Excel (nombre, teléfono, mascota, hora).'
    },
    propuesta: {
      label: '3 · La propuesta', short: 'Qué cambia y quién hace qué',
      md: '## 3. La propuesta',
      vague: 'Usar IA para las citas.',
      good: '- Un script en Python lee la agenda a las 18:00 y envía un SMS a cada cita.\n- Las respuestas «SÍ» y «NO» se marcan solas en la agenda.\n- Los mensajes libres («¿puedo ir a las 5?») los clasifica un modelo\n  de lenguaje y los revisa recepción antes de contestar.'
    },
    publico: {
      label: '4 · Público y tono', short: 'Quién lo va a leer',
      md: '## 4. Público y tono',
      vague: 'Para el cliente.',
      good: 'Para la gerente, sin conocimientos técnicos. Lenguaje sencillo,\nsin siglas. Cada término técnico se explica en una línea.'
    },
    estructura: {
      label: '5 · Estructura', short: 'Diapositivas o secciones, en orden',
      md: '## 5. Estructura del reporte',
      vague: 'Pon varias secciones.',
      good: '1. Portada\n2. Cómo es hoy (diagrama)\n3. Dónde duele (3 cifras)\n4. La propuesta (diagrama)\n5. Un ejemplo paso a paso\n6. Qué cambia para recepción\n7. Riesgos y qué decide una persona\n8. Siguientes pasos'
    },
    diagramas: {
      label: '6 · Diagramas e interacción', short: 'Qué se ve y qué se puede tocar',
      md: '## 6. Diagramas e interacción',
      vague: 'Que tenga diagramas bonitos.',
      good: '- Diagrama de flujo de «hoy» y de «propuesta», con pestañas para cambiar.\n- Al pasar el cursor por un paso, mostrar debajo qué ocurre y quién lo hace.\n- Colores: naranja = manual, verde = automático, morado = IA,\n  amarillo = decide una persona.'
    },
    tecnologias: {
      label: '7 · Tecnologías', short: 'Con qué se construye',
      md: '## 7. Tecnologías',
      vague: 'Usa lo que quieras.',
      good: '- Un único archivo HTML con CSS y JavaScript, sin frameworks ni servidor.\n- Diagramas en SVG generados con JavaScript a partir de una lista de pasos.\n- Animaciones con transiciones CSS y Web Animations API.\n- Respetar prefers-reduced-motion.'
    },
    estilo: {
      label: '8 · Estilo visual', short: 'Formato, tipografía y color',
      md: '## 8. Estilo visual',
      vague: 'Que sea moderno.',
      good: '- Formato 16:9 navegable con las flechas del teclado.\n- Una tipografía sans legible; como mucho, dos colores de acento.\n- Mucho espacio en blanco: una idea por diapositiva.'
    },
    criterios: {
      label: '9 · Criterios de aceptación', short: 'Cómo sabremos que está bien',
      md: '## 9. Criterios de aceptación',
      vague: 'Que funcione bien.',
      good: '- [ ] Se abre con doble clic, sin internet.\n- [ ] Se lee bien en un móvil.\n- [ ] Ningún texto se sale de su caja.\n- [ ] Los datos de ejemplo están marcados como ficticios.\n- [ ] No hay errores en la consola del navegador.'
    }
  },

  /* ───────────── Tecnologías ───────────── */
  tec: {
    base: {
      label: 'La base del reporte', short: 'Un archivo que se abre en cualquier sitio',
      intro: 'Pedid un único HTML: se entrega, se abre y se presenta sin instalar nada.',
      items: [
        { name: 'HTML + CSS + JavaScript', when: 'Siempre. Sin frameworks: menos piezas que puedan fallar.', ask: 'Un único archivo HTML con el CSS y el JavaScript dentro, sin servidor.' },
        { name: 'Lienzo 16:9 escalado', when: 'Para presentarlo como diapositivas en clase o en una reunión.', ask: 'Diapositivas de 1600×900 que se escalan a la pantalla; flechas para avanzar.' },
        { name: 'Variables CSS', when: 'Para que colores y tipografías sean coherentes en todo el reporte.', ask: 'Define colores y tamaños como variables CSS en :root.' }
      ]
    },
    diagramas: {
      label: 'Diagramas', short: 'Para enseñar un proceso',
      intro: 'Del más rápido al más flexible. Para empezar, Mermaid basta.',
      items: [
        { name: 'Mermaid.js', when: 'Escribís el diagrama como texto y se dibuja solo. Rápido de pedir y de corregir.', ask: 'Diagramas de flujo con Mermaid.js cargado desde un CDN.' },
        { name: 'SVG con JavaScript', when: 'Cuando queréis interacción: resaltar al pasar el cursor, zoom, explicación de cada paso.', ask: 'Genera el diagrama en SVG desde una lista de pasos y conexiones en JSON.' },
        { name: 'Vuestro Excalidraw', when: 'Para reutilizar el esquema tal cual, con su aspecto de boceto.', ask: 'Incluye el SVG exportado de Excalidraw en la diapositiva 2.' }
      ]
    },
    interaccion: {
      label: 'Interacción', short: 'Que se pueda explorar',
      intro: 'Cada interacción debe ayudar a entender algo, no solo adornar.',
      items: [
        { name: 'Pestañas «Hoy / Propuesta»', when: 'Para comparar dos estados del mismo proceso en el mismo sitio.', ask: 'Pestañas accesibles que cambian entre el diagrama actual y el propuesto.' },
        { name: 'Selector de casos', when: 'Para recorrer ejemplos: un fichero, un gasto, una incidencia.', ask: 'Lista a la izquierda; al elegir un caso, el detalle aparece a la derecha.' },
        { name: 'Zoom y arrastre', when: 'Para diagramas grandes que no caben enteros.', ask: 'Rueda para acercar, arrastrar para moverse y botón para ajustar.' }
      ]
    },
    animacion: {
      label: 'Animación', short: 'Movimiento con propósito',
      intro: 'Pocas animaciones, rápidas y suaves. Siempre con alternativa para quien prefiere menos movimiento.',
      items: [
        { name: 'Transiciones CSS', when: 'Cambios de estado: pasar el cursor, seleccionar, abrir.', ask: 'Transiciones de 150 a 300 ms con curvas ease-out.' },
        { name: 'Web Animations API', when: 'Entradas de diapositiva o dibujar un diagrama paso a paso, sin librerías.', ask: 'Anima la entrada de cada diapositiva con element.animate().' },
        { name: 'GSAP', when: 'Solo si hace falta encadenar muchas animaciones. Casi nunca.', ask: 'Usa GSAP desde un CDN para la secuencia de la portada.' }
      ]
    },
    datos: {
      label: 'Gráficos de datos', short: 'Cifras que se comparan',
      intro: 'Un gráfico solo si compara algo. Si es una cifra, mejor escribirla grande.',
      items: [
        { name: 'Chart.js', when: 'Barras y líneas sencillas: horas antes y después, gastos por mes.', ask: 'Un gráfico de barras con Chart.js desde un CDN, con los ejes rotulados.' },
        { name: 'Tablas HTML', when: 'Para enseñar datos de ejemplo tal y como llegan.', ask: 'Tabla con las celdas problemáticas resaltadas.' }
      ]
    },
    solucion: {
      label: 'Si construís la solución', short: 'Opcional: el prototipo técnico',
      intro: 'No es obligatorio, pero podéis acompañar la propuesta con una prueba pequeña.',
      items: [
        { name: 'Python + pandas', when: 'Leer, limpiar, unir y resumir ficheros Excel y CSV.', ask: 'Un script que lea todos los Excel de una carpeta y genere un resumen.' },
        { name: 'Un modelo de lenguaje con visión', when: 'Leer la imagen de un ticket y devolver sus datos en JSON.', ask: 'Extrae fecha, importe y conceptos de la foto en un JSON con campos fijos.' },
        { name: 'Reglas en un archivo aparte', when: 'Límites y plazos que pueden cambiar sin tocar el código.', ask: 'Lee los límites de un archivo de configuración, no del código.' }
      ]
    }
  }
};
