/*
* Conectar archivo javascript al html de destino
* Imprimir Hello Javascript! en nuestra ventana del navegador
* * definir el contenedor o espacio que va a ocupar el mensaje Hello JS
* * acceder al contenedor desde javascript
* * crear el mensaje
* * insertar en el contenedor
* * imprimirlo en pantalla
*/
const sacarTextoEnPantalla = "Hello Javascript"

function ImprimirHelloJavascriptEnPantalla() {
    const divTitulo = document.getElementById("hola-mundo")
    divTitulo.innerHTML = sacarTextoEnPantalla
}
ImprimirHelloJavascriptEnPantalla()