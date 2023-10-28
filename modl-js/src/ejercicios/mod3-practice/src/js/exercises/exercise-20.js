/* 
EJERCICIO 20:
Los números de Fibonacci es una secuencia de números donde cada número se calcula en base a los dos anteriores:
Fib(n) = (n-2) + (n-1)

Excepto para cuando n > 2: 
Fib(0) = 0
Fib(1) = 1

Calcula el Fib de un número pasado como parámetro y muestra un mensaje:
"El vigésimo número de la serie de Fibonacci es 6765"

Nota: evita calcular números altos.
*/
const numOrdinal = (num) => {

    let und = ["primer", "segundo", "tercer", "cuarto", "quinto", "sexto", "séptimo", "octavo", "noveno"];
    let dec = ["décimo", "vigésimo", "trigésimo", "cuadragésimo", "quincuagésimo", "sexagésimo", "septuagésimo", "octogésimo", "nonagésimo"];

    if (num >= 1 && num <= 9) {
        return und[--num] + ' número'
    } else if (num >= 10 && num <= 99) {
        let unit = num % 10;
        let decen = Math.floor(num / 10);
        return dec[--decen] + (unit !== 0 ? `${und[--unit]}` : '') + ' número';
    } else {
        // num fuera de rango dec y und
        return 'número ' + num.toString()
    }
}

const fibCalc = (num) => {

    let fib = [0, 1];

    if (num > 2) {
        for (let i = 2; i <= num; i++) {
            fib[i] = fib[i - 2] + fib[i - 1];
        }

        result = fib[num];
    } else {
        result = fib[num];
    }

    // numOrdinal nos da el numero ordinal en español solo hasta 99 luego pasa el numero normal como string
    return `El ${numOrdinal(num)} de la serie de Fibonacci es ${result}`;

}

showContent(20, fibCalc(20))