/* 
EJERCICIO 8:
Escribe una o varias funciones para que, dado un string, devuelva un array que contenga la posición 
que ocupa cada carácter en el abecedario. Para que sea más sencillo, elimina los espacios y tildes 
(recuerda que puedes utilizar las funciones de ejercicios anteriores).
*/

const positionOnAlphabetGeneratorArray = (text) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let arrayAlphabet = [];
    let textReformated= removeAccents(lowerCase(text));

    for (let i = 0; i < textReformated.length; i++) {

        arrayAlphabet.push(
            alphabet.indexOf(textReformated.charAt(i)) + 1
        );
        
    }

    return arrayAlphabet;
 
}

showContent(8, positionOnAlphabetGeneratorArray('Dábale arroz a la zorra el abad'));
