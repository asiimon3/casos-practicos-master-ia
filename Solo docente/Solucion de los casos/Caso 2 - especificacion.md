# Especificación · Caso 2 · Las notas de gastos

> Ejemplo de especificación completa para el caso 2, hecha con la plantilla
> de la clase. Sirve para comparar con las de los alumnos.
> Empresa, personas y datos son ficticios.

## 1. Idea principal

Reporte de 9 diapositivas para Javier (administración de Faro Consultores,
80 personas) y la directora financiera, que tiene que aprobar el cambio.
Objetivo: que en 5 minutos entiendan por qué revisar los gastos de viaje le
cuesta a Javier 3 días al mes, y cómo dedicar ese tiempo solo a los gastos
que tienen un problema, sin que Javier deje de decidir.

## 2. El problema

- Unos 150 gastos al mes. Cada empleado rellena un formulario (fecha,
  categoría, importe, comentario) y adjunta una foto del ticket.
- Javier revisa todos igual, uno a uno: abre la foto, compara el ticket con
  el formulario y comprueba la política (6 normas: plazo, comidas, hotel,
  conceptos que no se pagan, justificante y una sola vez).
- Tarda entre 2 y 10 minutos por gasto. La mayoría están bien.
- 1 de cada 3 se devuelve por email. Mientras, el gasto se queda parado y la
  revisión empieza de cero cuando vuelve. Hay quien cobra 6 semanas después.
- Se escapan duplicados (el mismo ticket subido por dos personas) y fechas
  mal escritas.

## 3. La propuesta

- En origen: el formulario pide lo que falta antes de enviar (asistentes en
  las comidas, noches en el hotel, factura desde 100 €) y enseña el límite
  de cada categoría.
- IA, solo para leer: un modelo con visión lee la foto del ticket y devuelve
  siempre los mismos campos en JSON (fecha, importe, establecimiento, líneas
  y si se lee bien). No aprueba ni rechaza nada.
- Si la foto no se lee, el empleado lo sabe al momento y repite la foto.
- Reglas en Python, con los límites en un archivo aparte que Javier puede
  cambiar: plazo, límites por categoría, conceptos que no se pagan, factura,
  duplicados (también entre empleados) y que el ticket coincida con el
  formulario.
- Cada gasto cae en una de tres bandejas, con la norma que lo explica:
  Correcto, Ajustar (con el importe propuesto ya calculado) y Revisar.
- Javier sigue firmando todo, como exige la auditoría: aprueba en bloque los
  correctos (revisando al azar 1 de cada 10) y decide uno a uno el resto.
- Los aprobados salen solos al Excel de contabilidad y el empleado recibe un
  aviso con lo aprobado y la norma aplicada.
- Privacidad: proveedor de IA con acuerdo de tratamiento de datos y sin usar
  los tickets para entrenar. [POR CONFIRMAR con la directora financiera]

## 4. Público y tono

Para Javier y la directora financiera, que no son técnicos. Lenguaje
sencillo, sin siglas. Dejar muy claro qué hace la IA y qué no, y que la
decisión final sigue siendo de Javier.

## 5. Estructura del reporte

1. Portada: «Que Javier solo mire los gastos que tienen un problema»
2. Cómo es hoy la revisión (diagrama, con el bucle de las devoluciones)
3. Dónde duele: 3 días al mes, 1 de cada 3 devueltos, 6 semanas para cobrar
4. ¿Regla o IA? Cada comprobación, clasificada
5. La propuesta (diagrama)
6. Los seis gastos de ejemplo, pasados por la propuesta
7. Qué cambia: hoy frente a la propuesta, en una tabla
8. Datos personales y auditoría
9. Qué hay que confirmar y siguientes pasos

## 6. Diagramas e interacción

- Diagrama de flujo de «hoy» y de «propuesta», con pestañas para cambiar
  entre los dos sobre el mismo visor.
- Al pasar el cursor por un paso, mostrar debajo qué ocurre y quién lo hace.
- Colores: naranja = manual, naranja intenso = punto de dolor,
  verde = automático, negro = IA, azul = decide una persona. Leyenda siempre
  visible.
- Diapositiva 6: lista de los seis gastos a la izquierda; al elegir uno, a
  la derecha se ve qué detecta el sistema, en qué bandeja cae y qué hace
  Javier. Tren: correcto. Comida: ajustar a 65,10 €. Hotel: ajustar a 220 €.
  Taxi: revisar (fecha y plazo). Parking: foto repetida al momento. Cena:
  revisar (duplicado).

## 7. Tecnologías

- Un único archivo HTML con CSS y JavaScript, sin frameworks ni servidor.
- Diagramas en SVG generados con JavaScript a partir de una lista de pasos
  en JSON (o con Mermaid desde cdnjs, con versión fija).
- Los seis gastos, en un objeto de datos aparte del código.
- Animaciones de 150 a 300 ms con ease-out, solo transform y opacity.
  Respetar prefers-reduced-motion.

## 8. Estilo visual

- Formato 16:9 de 1600×900 escalado a la pantalla, navegable con las
  flechas del teclado y con contador de diapositivas.
- Estilo sobrio: fondo blanco, títulos en negrita, un color por significado
  (los de la leyenda). Las bandejas, siempre con el mismo color: verde
  correcto, naranja ajustar, rojo revisar.
- Una idea por diapositiva y mucho espacio en blanco.

## 9. Criterios de aceptación

- [ ] Se abre con doble clic, sin internet.
- [ ] Queda claro en una frase qué hace la IA y qué no.
- [ ] En ningún paso la IA aprueba o rechaza un gasto.
- [ ] Los importes de los seis gastos coinciden con los del caso.
- [ ] Se lee bien en un móvil (390 px de ancho).
- [ ] Ningún texto se sale de su caja.
- [ ] Los datos de ejemplo están marcados como ficticios.
- [ ] No hay errores en la consola del navegador.
