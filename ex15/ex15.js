
function esPrimo(numero) {
    
    if (numero < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      
      if (numero % i == 0) {
        return false;
      }
    }
    return true;
  }
  const numero = prompt("Ingresa un número:");
  alert(numero + (esPrimo(numero) ? " es un número primo." : " no es un número primo."));