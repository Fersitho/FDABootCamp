// añadir las funciones que usemos en string pasar a minuscula etc...

function lowerCase(text) {
    return text.toLowerCase().replaceAll(' ', '');
}

function removeAccents(text) {
    const accents = 'áéíóúÁÉÍÓÚ';
    const vowels = 'aeiouAEIOU';

    for (let i = 0; i < accents.length; i++) {
        if (text.includes(accents.charAt(i))) {
            text = text.replaceAll(accents.charAt(i), vowels.charAt(i));
        }
    }

    return text;
}

function revertText(text) {
    let textRevert = '';

    for (let i = text.length - 1; i >= 0; i--) {
        textRevert += text.charAt(i);
    }

    return textRevert;
}