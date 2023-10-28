/* 
EJERCICIO 4:
Muestra el resultado de quitar las vocales a un string que pasamos como parámetro:
“H, m lrnng Jvscrpt” // string original: “Hi, I am learning Javascript”
*/

const removeVowels = (text) => {
    const vowels = 'aeiouAEIOU';
    let textFormated = removeAccents(text);

    for (let i = 0; i < vowels.length; i++) {

        let vowelUse = vowels.charAt(i);

        if (textFormated.includes(vowelUse)) {
            textFormated = textFormated.replaceAll(vowelUse, "");
        }
        
    }
    
    return textFormated

}

showContent(4, removeVowels('Hi, I am learning Javascript'));