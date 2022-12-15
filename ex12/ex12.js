const numero = prompt("Dime un número")
const resultado = function saberSiEsDivisible() {
    if (numero % 7 === 0  ) { alert("El número es divisible entre 7")
    }
    if (numero % 2 === 0)  { alert("El número es divsible entre 2 ")
        
    }
    if (numero % 3 === 0) { alert("El número es divisible entre 3")
        
    
    }
    if (numero % 5 === 0) { alert("El número es divisible entre 5")
        
    }
}
resultado()