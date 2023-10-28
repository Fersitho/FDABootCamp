/* 
EJERCICIO 2:
Muestra el siguiente mensaje dependiendo de si un número es par o impar:
“Number 34 is even” ó “Number 13 is odd”
*/

const esParOImpar = (num) => {
    return num % 2 === 0 ? `Number ${num} is even` : `Number ${num} is odd`;
}

showContent(2, esParOImpar(4));