exp1
Este código HTML define una barra de navegación que incluye la posibilidad de colocar
un logo mediante el <img>, enlaces a las páginas "Home", "Proyectos" y "Contacto", 
y un menú hamburguesa. Todo está envuelto en un <nav> con clases CSS que 
organizan y permiten el estilo de los elementos. El logo del sitio se coloca 
mediante una etiqueta <img>, seguido por una lista de navegación dentro de un <ul>, 
y finalmente, un botón de menú hamburguesa, representado por tres divs con clases 
específicas que forman las barras horizontales. 


exp2
Contiene una sección de banner superior (section) que se utiliza para 
mostrar una imagen de perfil junto con información personal y un gráfico animado (scroller). 
La clase fh5co-top-banner se usa para aplicar estilos específicos a esta sección. 
Dentro de la sección, hay un contenedor (div) con la clase top-banner__inner site-container 
que organiza el contenido en dos partes principales:
-El div con la clase top-banner__image contiene una etiqueta img, que se utiliza para 
mostrar una imagen de perfil (soyyo.jpeg) con la clase imagenPrincipal para aplicar 
estilos específicos a la imagen.
-El div con la clase top-banner__text se usa para mostrar el texto. Dentro de este div, 
hay otro div con la clase top-banner__text-up que contiene un span para el saludo ("Hola! Soy") 
y un encabezado h6 con la clase top-banner__h2 para mostrar el nombre. Debajo, un span 
adicional con la clase brand-span-button se utiliza para mostrar la descripción.
Finalmente, el div con la clase scroll-downs incluye una animación que sugiere al usuario 
desplazarse hacia abajo, compuesto por un contenedor mousey que contiene un div 
interno (scroller) para representar la animación de desplazamiento. Las etiquetas 
y clases CSS aplicadas permiten estructurar y estilizar visualmente la sección del banner, además
de una función con addEventListener ubicada en el main.js.


exp3
Este código utiliza diferentes etiquetas para darle estructura y estilo al contenido. 
La etiqueta `<section>` delimita la sección como un bloque temático, 
agrupando todo el contenido relacionado con la presentación personal. 
Dentro de esta sección, los `<div>` actúan como contenedores. El `<article>` encapsula un 
bloque de contenido autocontenido, permitiendo que todo lo que contiene sea considerado 
una unidad independiente dentro de la página. La etiqueta `<img>` se utiliza para mostrar 
la imagen de perfil, proporcionando un elemento visual que complementa la información textual.
Los `<span>` se emplean para destacar fragmentos específicos de texto, en este caso la 
inicial de mi nombre, sin interrumpir el flujo del contenido.
Los encabezados `<h2>` y `<h6>` organizan el contenido jerárquicamente: 
`<h2>` se utiliza para títulos principales como "Datos académicos" y "Experiencia", 
mientras que `<h6>` sirve para subtítulos más pequeños, como tu nombre en el portafolio. 
Por último, los párrafos `<p>` estructuran el texto en bloques legibles, permitiendo 
detallar la formación, experiencia profesional y habilidades en un formato claro y organizado.

exp4
La etiqueta <section> define esta parte temática del sitio, mientras que la clase 
fh5co-blog ayuda a darle estilo específico a la sección.
Dentro de la sección, hay un contenedor principal (div con la clase site-container) 
que organiza el contenido. El encabezado <h2> con las clases textoSpan universal-h2-bckg 
sirve para mostrar el título "Galería de proyectos" y las líneas de abajo del texto.
La galería de proyectos en sí se presenta dentro de un carrusel (div con la clase blog-slider 
blog-inner), que permite desplazarse entre varios proyectos. Cada proyecto está representado 
por un bloque (div con la clase single-blog) que contiene una imagen y un título.

exp5
Este código HTML define el pie de página (<footer>) de la página web, proporcionando 
información esencial de contacto y un ícono de redes sociales. Dentro del <footer>, 
un contenedor (<div> con la clase footer-bottom) organiza el contenido, mientras que 
otro div con las clases site-container footer-bottom-inner asegura que el diseño sea 
coherente con el resto del sitio. El pie de página incluye un párrafo con el número 
de teléfono y la dirección de correo electrónico para facilitar el contacto, y un div 
adicional con la clase footer-bottom__img que contiene una imagen de un ícono de Twitter, 
indicando un enlace a redes sociales.

exp6
El código agrega los links para diseño colocados en la carpeta css y el link de 
diseño para bootstrap.

exp7
Este código HTML configura una sección de contacto en una página web, utilizando 
clases de Bootstrap para gestionar el diseño y la disposición de los elementos. 
La sección está contenida dentro de un <section> con la clase fh5co-blog-contact, 
y emplea un contenedor principal (<div class="site-container">) para alinear y 
ajustar el contenido. Dentro del contenedor, la clase row se utiliza para crear 
una fila que agrupa las columnas, permitiendo un diseño en cuadrícula.
Dentro de esta fila (<div class="row">), se definen dos columnas con las clases 
col-md-6 y col-sm-12, que organizan el contenido en un diseño de dos columnas en 
pantallas medianas y grandes, y en una sola columna en pantallas pequeñas. 
La clase col-md-6 indica que cada columna debe ocupar la mitad del ancho de la 
fila en dispositivos medianos y grandes, mientras que col-sm-12 hace que cada 
columna ocupe el ancho completo en dispositivos pequeños, asegurando que el 
diseño sea responsivo y se adapte a diferentes tamaños de pantalla.
La primera columna contiene un encabezado (<h1>) y una lista de métodos de contacto, 
mientras que la segunda columna incluye un formulario de Google incrustado (<iframe>). 
Las clases adicionales como p-4 aplican padding, mt-3 agrega margen superior, 
bg-light-gray establece un fondo gris claro, rounded redondea los bordes, y shadow añade 
una sombra para mejorar la apariencia visual.


exp8
incluye los scripts necesarios para hacer uso del código de la carpeta js y el link necesario 
para bootstrap.

exp9
Dentro de esta sección el contenido está estructurado en un contenedor principal 
(`<div class="site-container">`) que alberga un encabezado (`<h2>`) y varios bloques 
de proyectos. Cada proyecto está organizado en filas (`<div class="row">`) y columnas 
(`<div class="col-lg-6">`) utilizando las clases de Bootstrap para crear un diseño 
responsivo y alineado.
Las filas (`row`) agrupan las columnas de contenido y las imágenes. 
Las columnas (`col-lg-6`) dividen el espacio en la pantalla, ocupando la mitad del 
ancho disponible en dispositivos grandes (con el prefijo `lg` para pantallas grandes). 
Algunas de estas columnas usan la clase `order-lg-2` para cambiar el orden de visualización 
en pantallas grandes, asegurando que el diseño sea visualmente atractivo y fluido.
Dentro de cada columna, se utilizan clases como `p-5` para agregar padding (espacio interior),
y `img-fluid` para hacer que las imágenes se adapten al tamaño de la columna sin perder 
la proporción. Los textos de los proyectos están contenidos en la columna opuesta a la imagen 
y utilizan clases como `textoTitulo` y `justificado` para estilizar los títulos y justificar 
el contenido del texto.
Además, las clases `gx-5` y `align-items-center` se emplean para controlar el espaciado 
horizontal entre columnas y alinear verticalmente el contenido dentro de las filas.