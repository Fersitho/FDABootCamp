/* 
EJERCICIO 19:
Dada una cadena de texto, crea una función que devuelva un objeto donde
las claves (keys) son cada una de las letras de la cadena y el valor el
número de veces que se repite cada una de ellas.
Ejemplo: "Hello world"
{
    h: 1,
    e: 1,
    l: 3,
    o: 2,
    r: 1,
    d: 1,
}
Nota: siempre letras minúsculas y sin tildes (para simplificar)

// en el ejercio 17 hice algo parecido para contar cada una y comparar si era u isogramaa
*/

const objetKeys = (texto) => {

    texto = removeAccents(lowerCase(texto));
    let contadorCaracteres = {};

    for (let i = 0; i < texto.length; i++) {
        let caracter = texto[i];

        if (contadorCaracteres[caracter] === undefined) {
            contadorCaracteres[caracter] = 1;
        } else {
            contadorCaracteres[caracter]++;
        }
    }

    return contadorCaracteres;

}

showContent(19,objetKeys('Hola HOLÁ Caracola'));