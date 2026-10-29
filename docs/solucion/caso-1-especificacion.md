# Especificación · Caso 1 · Las ventas del lunes

> Ejemplo de especificación completa para el caso 1, hecha con la plantilla
> de la clase. Sirve para comparar con las de los alumnos.
> Empresa, personas y datos son ficticios.

## 1. Idea principal

Reporte de 8 diapositivas para Lucía (responsable de administración de
Rodalia, seis tiendas de bicicletas) y su director.
Objetivo: que en 5 minutos entiendan por qué preparar el informe de ventas
del lunes le cuesta 4 horas a Lucía, y cómo un script puede dejarlo listo a
las 10:30 para que ella solo lo revise.

## 2. El problema

- Cada lunes, seis tiendas (cinco físicas y una online) envían por email un
  Excel con las ventas de la semana: unas 1.200 líneas en total.
- Cada tienda usa su propio formato: columnas en otro orden y con otros
  nombres, fechas e importes escritos como texto, productos escritos a mano
  en lugar del código del catálogo (380 productos), filas de TOTAL.
- Algunas tiendas envían dos versiones del mismo fichero o lo envían tarde.
  En septiembre una tienda se contó dos veces.
- Lucía copia, corrige, quita duplicados, actualiza una tabla dinámica y
  envía un PDF al director. Tarda unas 4 horas y a menudo llega después de
  las 12:00.
- Cuando el director duda de una cifra, Lucía no tiene forma rápida de
  comprobarla y vuelve a repasar los datos fila a fila.

## 3. La propuesta

- En origen: una plantilla común de Excel para todas las tiendas, con la
  lista de productos del catálogo en un desplegable. Siguen enviándola por
  email, como hoy.
- Una regla de correo guarda los adjuntos en una carpeta de la semana.
- Un script en Python (pandas y openpyxl), «Preparar lunes», que se lanza
  solo a las 10:00 o con un doble clic:
  - lee todos los ficheros de la carpeta (xlsx, xls y el CSV de la web);
  - traduce los nombres de columna con un diccionario de equivalencias;
  - deja fechas e importes en un único formato;
  - se queda con la última versión de cada tienda y quita las filas de TOTAL;
  - busca el código de cada producto: exacto y, si no, por parecido. Lo
    dudoso no lo decide: lo marca para Lucía;
  - genera una hoja de control (tiendas recibidas, filas descartadas y por
    qué, productos sin código, diferencias grandes con la semana anterior),
    el maestro actualizado y el informe en PDF.
- Si a las 10:00 falta una tienda, le llega un recordatorio automático.
- Lucía revisa la hoja de control (unos 20 minutos) y envía el PDF.
- No hace falta IA: todo son reglas fijas. Opcionalmente, una IA podría
  ayudar a emparejar nombres muy raros, siempre con Lucía revisando.
- Lo instala el informático externo en una de sus visitas. Sin licencias.

## 4. Público y tono

Para Lucía y el director, que no son técnicos. Lenguaje sencillo, sin
siglas. Cuando aparezca algo técnico («script», «pandas»), explicarlo en una
línea. El tono es el de un consultor que ha escuchado: usar las frases de
Lucía para describir el problema.

## 5. Estructura del reporte

1. Portada: «Que el lunes revises el resumen en lugar de fabricarlo»
2. Cómo es hoy el lunes de Lucía (diagrama)
3. Dónde duele: 4 horas, informe tarde, cifras en duda (3 cifras)
4. La propuesta (diagrama, mismos pasos que el de hoy)
5. Un lunes con la propuesta, paso a paso (10:00 → 10:30)
6. La hoja de control: qué verá Lucía (ejemplo con datos ficticios)
7. Qué cambia: hoy frente a la propuesta, en una tabla
8. Qué hay que confirmar con Lucía y siguientes pasos

## 6. Diagramas e interacción

- Diagrama de flujo de «hoy» y de «propuesta», con pestañas para cambiar
  entre los dos sobre el mismo visor.
- Mismos pasos alineados en los dos, para que se vea qué desaparece.
- Al pasar el cursor por un paso, mostrar debajo qué ocurre y quién lo hace.
- Colores: naranja = manual, naranja intenso = punto de dolor,
  verde = automático, azul = decide una persona. Leyenda siempre visible.
- En la diapositiva 6, una tabla de ejemplo de la hoja de control con las
  filas dudosas resaltadas.

## 7. Tecnologías

- Un único archivo HTML con CSS y JavaScript, sin frameworks ni servidor.
- Diagramas en SVG generados con JavaScript a partir de una lista de pasos
  en JSON (o con Mermaid desde cdnjs, con versión fija).
- Los datos de ejemplo, en un objeto aparte del código.
- Animaciones de 150 a 300 ms con ease-out, solo transform y opacity.
  Respetar prefers-reduced-motion.

## 8. Estilo visual

- Formato 16:9 de 1600×900 escalado a la pantalla, navegable con las
  flechas del teclado y con contador de diapositivas.
- Estilo sobrio: fondo blanco, títulos en negrita, un color por significado
  (los de la leyenda). Sin sombras ni degradados.
- Una idea por diapositiva y mucho espacio en blanco.

## 9. Criterios de aceptación

- [ ] Se abre con doble clic, sin internet.
- [ ] El diagrama de hoy y el de la propuesta tienen los mismos pasos.
- [ ] Cada idea de la propuesta responde a un dolor de la diapositiva 3.
- [ ] Se lee bien en un móvil (390 px de ancho).
- [ ] Ningún texto se sale de su caja.
- [ ] Los datos de ejemplo están marcados como ficticios.
- [ ] Si falta un dato, aparece [POR CONFIRMAR] en lugar de inventarlo.
- [ ] No hay errores en la consola del navegador.
