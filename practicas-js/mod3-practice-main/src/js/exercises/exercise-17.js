/* 
EJERCICIO 17:
Un isograma es una palabra o frase en la que cada letra aparece el mismo número de veces.
Dado una cadena de texto, comprueba si es un isograma o no y devuelve un mensaje:
"la cadena 'hola mundo' no es un isograma"

tenemos que ir viendo cada caracter cuantas veces aparece, si volvemos a encontrarlo 
tenemnos que formatear el texto a lowecase, quitar espacios y quitar acentos

la fucnion Object.values nos da un array con todos los valores de las propiedades de un objeto
*/
const isIsogram = (texto) => {
    let textoOriginalReturn = texto
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

    let valores = Object.values(contadorCaracteres);
    let todosIguales = valores.every(valor => valor === valores[0]);

    return todosIguales ? `la cadena '${textoOriginalReturn}' es un isograma`: `la cadena ${textoOriginalReturn} no es un isograma`;
    
}

showContent(17,isIsogram('Hola HOLÁ'));