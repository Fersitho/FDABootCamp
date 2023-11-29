/* 
EJERCICIO 6:
Genera un array de 10 números aleatorios entre 0 y 100, calcula el menor y
el mayor y muestra el resultado por pantalla
*/
const genNumRandom = (totalNumbers) => {
    const numRandom = [];

    for (let i = 0; i < totalNumbers; i++) {
        numRandom.push(
            Math.floor(Math.random() * 100)
        );
    }

    const numMin = Math.min(...numRandom);
    const numMax = Math.max(...numRandom);
    // lo retorno en objeto porque en texto queda todo muy seguido, me gusta mas asi para visualziarlo
    return {
        arrayOfNumberRandom: numRandom,
        menor: numMin,
        mayor: numMax
    };
}

showContent(6, genNumRandom(10));