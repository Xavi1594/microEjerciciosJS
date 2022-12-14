let pregunta = prompt("Escribe una palabra")
let numeroVocales = pregunta.replace(/a|e|i|o|u/gi, "");

const contadorVocales = pregunta.length - numeroVocales.length



alert("Aqui tienes todas las vocales que aparecen " + contadorVocales   ) 