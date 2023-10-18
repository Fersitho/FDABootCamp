let animalEstado = 'pajaro feliz'
let maxInsert = 8
let nombres = []

for (let i = 0; i < maxInsert; i++) {
    
    let randomNumber = Math.random();

    let minValue = 7.00;
    let maxValue = 25.00;

    let scaledNumber = randomNumber * (maxValue - minValue) + minValue;

    let roundedNumber = scaledNumber.toFixed(2);

    console.log(roundedNumber);
    nombres.push({
        num: i,
        nombre: 'El Nombre-' + i,
        size: roundedNumber + ' cm'
    })

}

console.log('b contiene como valor:', nombres)

document.getElementById('h1').innerText = 'Hola mundo'

// EJERCICIO REPLACE
let result = 'Hello World!'

result = result.replace(" ","").replace("e","3").replace("o","0").toLowerCase()

console.log('result',result)

// OPERADORES + - * / % ++ -- 