/* 
EJERCICIO 7:
Escribir una función que calcule si una cadena de texto es un palíndromo y
devuelva un mensaje con la cadena de texto y el resultado
*/

const isPalindrome = (text) => {

    let textOriginFormated = removeAccents(lowerCase(text));
    let textOriginFormatedRevert = revertText(textOriginFormated);

    return textOriginFormated == textOriginFormatedRevert ?
        text + ' : esta frase SI es un palindromo'
        :
        text + ' : esta frase NO es un palindromo';
}

showContent(7, isPalindrome('Dábale arroz a la zorra el abad'));