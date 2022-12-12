
let pregunta = prompt("Escribe una palabra")
let caracterA = "a"
let contadorLetras = 0 

for (let i = 0; i < pregunta.length; i++){
    if(pregunta.charAt(i) === caracterA) {
        contadorLetras++;
    }
}
console.log("Hemos encontrado " + contadorLetras + " veces la letra" + " a "     ) 