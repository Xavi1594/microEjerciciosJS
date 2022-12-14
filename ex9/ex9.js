let pregunta = prompt("Escribe una palabra")
let cadena = "aAeEiIoOuU son vocales";
let numeroVocales = pregunta.match(/[aeiou]/gi).length;



alert("Hemos encontrado " + numeroVocales + " vocales en tu frase "    ) 