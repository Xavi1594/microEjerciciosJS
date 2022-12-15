
function obtenerDivisoresComunes(num1, num2) {
  
  const divisoresComunes = [];
  
  for (let i = 1; i <= Math.min(num1, num2); i++) {
 
    if (num1 % i == 0 && num2 % i == 0) {
      divisoresComunes.push(i);
    }
  } 
  return divisoresComunes;
}
let num1 = prompt("Ingresa un número:");
let num2 = prompt("Ingresa otro número:");


alert("Los divisores comunes de " + num1 + " y " + num2 + " son: " + obtenerDivisoresComunes(num1, num2));


