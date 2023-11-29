/* 
EJERCICIO 16:
Dado un año como parámetro (número), devuelve el número del siglo al que pertenece.

¿Como identificamos un siglo?
número del año entre cien year / 100 . 
El número obtenido tiene una parte entera y una parte decimal. 
Si la parte decimal no es exactamente cero, suma una unidad a la parte entera y ese es el siglo.
*/

const whatIsCenturyOfYear = (year) => {
    let calCentury = year / 100

    return calCentury % 1 === 0 ? (`El año ${year} pertenece al siglo ${calCentury}`) : (`El año ${year} pertenece al siglo ${Math.floor(++calCentury)}`);
}

showContent(16, whatIsCenturyOfYear(1813));