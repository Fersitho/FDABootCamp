/* 
EJERCICIO 5:
Escribe una función llamada "repetitions" que recibe de entrada una cadena de texto y 
devuelve otra cadena con cada letra repetida tantas veces como la posición que ocupa 
empezando la primera repetición en mayúscula y el resto en minúscula

Ejemplos:
repetitions(‘code’) // result: “COoDddEeee”
repetitions(‘list’) // result: “LIiSssTttt”
repetitions(function) // result: “FUuNnnTtttIiiiiOoooooNnnnnnn”
*/
const  repetitions = (text) => {
    let textResult = ''
    for (let i = 0; i < text.length; i++) {
        
        textResult += text.charAt(i).toUpperCase()
    
        for (let j = 0; j < i; j++) {
            textResult += text.charAt(i).toLowerCase()
        }  

    }
    
    return textResult
}

showContent(5, repetitions('function'));