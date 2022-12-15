function obtenerDivisores(numero) {
    
    const divisores = [];

    for (let i = 1; i <= numero; i++) {
      if (numero % i == 0) {
        divisores.push(i);
      }
    }
    return divisores;
  }
  
  const numero = prompt("Ingresa un número:");
  
  alert("Los divisores de " + numero + " son: " + obtenerDivisores(numero));


