/* 
EJERCICIO 3:
Muestra el siguiente mensaje con el resultado de contar el número de vocales que tiene un string:
“Number of vowels is <result>”
*/
// import { removeAccents, lowerCase } from '../utils/string'

const numOfVowels = (text) => {
    const vowels = 'aeiouAEIOU';
    let totalVowels = 0;
    let textFormated = removeAccents(lowerCase(text))
    
    for (let i = 0; i < textFormated.length; i++) {
        
        vowels.includes(textFormated.charAt(i)) ? totalVowels++ : null;

    }

    return `Number of vowels is ${totalVowels}`
}

showContent(3, numOfVowels('¿Cuantas vocales tendra este texto?'));