# Reloj analógico con p5.js

Este es un proyecto simple que muestra cómo hacer un reloj analógico con la librería de JavaScript p5.js.

## ¿Qué es p5.js?

p5.js es una librería de JavaScript para la programación creativa, que busca hacer que programar sea accesible e inclusivo para artistas, diseñadores, educadores, principiantes y cualquier otra persona. p5.js es gratuito y de código abierto porque creemos que el software y las herramientas para aprenderlo deben ser accesibles para todos[^1^][1].

## ¿Cómo funciona el reloj?

El reloj se basa en el objeto `p5.Vector` que representa una posición o dirección en el espacio bidimensional. El reloj tiene tres vectores: uno para las horas, otro para los minutos y otro para los segundos. Cada vector tiene una longitud y un ángulo que dependen del tiempo actual. El ángulo se calcula usando la función `map` que mapea un valor de un rango a otro. Por ejemplo, el ángulo del vector de las horas se mapea del rango 0-12 al rango 0-360 (grados). El vector se dibuja usando la función `line` que dibuja una línea entre dos puntos.

## ¿Cómo ejecutar el proyecto?

Para ejecutar el proyecto solo hay que abrir el archivo `index.html` en un navegador web. También se puede usar el editor web de p5.js[^2^][2] para ver y modificar el código en línea.

## Referencias

[^1^][1]: https://p5js.org/es/
[^2^][2]: https://editor.p5js.org/