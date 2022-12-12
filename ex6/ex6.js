//Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
function saberNumeroMayor(num1,num2,num3) {
    return Math.max (num1,num2,num3);
}
function Comparador() {
let num1 = parseInt(prompt("Dime un número"))
let num2 = parseInt(prompt("Dime otro número"))
let num3 = parseInt(prompt("Uno más y ya te dejo en paz"))
let mayor = saberNumeroMayor(num1,num2,num3)
alert("El mayor de los tres números es " + mayor)
}
Comparador()

