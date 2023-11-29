/* 
EJERCICIO 18:
Dada una cadena de texto, crea una función que la recibe como argumento y 
devuelve dicha cadena transformada en hashtag, es decir, la cadena comenzando 
por almohadilla (#) y las palabras sin espacios comenzando la primera letra en mayúscula
Ejemplo: "Programando en Javascript" se transforma en "#ProgramandoEnJavascript"

1 recibomos cadena de texto a convertir en hastag
2 eliminamos espacios, ponemos # al inicio y camelcase

podrimaos hacer un split con espacios en blanco, a cada split poner la primera en mayus con un map para que nos devuelva un array igual que split y con join justo despues los unimos todos.

let text = 'Programando en Javascript';
let splitText = text.split(' ')
let textUpFirstCharWord = splitText.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
let textSplitString = textUpFirstCharWord.join('');
let hastagText = `#${textSplitString}`;

*/

// separamos con split, convertimos el 1ºchar a mayus con map, luego con join creamos un string del array que nos da el map.
const textToHastag = (text) => {
    let hastagText = `#`;
    
    hastagText += text.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join('');

    return hastagText;
}

showContent(18, textToHastag('Programando en Javascript'));