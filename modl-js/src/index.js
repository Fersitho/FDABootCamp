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

result = result.replace(" ", "").replace("e", "3").replace("o", "0").toLowerCase()

console.log('result', result)

// OPERADORES + - * / % ++ -- 

// function vowels(text) {

// Clase 2 JS - Ejercicio 1
let text = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.";
//--- 1 Ejemplo basico con for 
text = text.toLowerCase();

let count = 0;
for (let i = 0; i < text.length; i++) {
    let character = text[i];
    if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
        count++;
    }
}
let numOfVowels = count;
console.log('Text: ', text)
console.log('Total vowels of text string: ', numOfVowels)
//--- 1 FIN Ejemplo basico con for
// 1.1 Ejercicio
let vowels = 'aeiou'
let counter = 0

for (let i = 0; i < text.length; i++) {
    if (vowels.includes(text.charAt(i))) {
        counter++;
    }
}

console.log('Total vowels of text string counter includes: ', counter)
//- 1.1 FIN Ejercicio

//--- 2 Ejemplo string.match 1 linea
let superCount = text.match(/([aeiou])/gi).length
console.log('Super count match string: ', superCount)
//--- 2 FIN Ejemplo string.match 1 linea


// ejercicio 2

let text2 = 'Hi, I am learning Javascript'

let vowels2 = ['a','e','i','o','u','A','E','I','O','U']

 for (let j = 0; j < vowels2.length - 1; j++) {

    const vowelRegex = new RegExp(vowels2[j], 'gi');
console.log(text2.match(vowelRegex))
    if (text2.match(vowelRegex) != null && text2.match(vowelRegex).length > 0) {
       
        text2 = text2.replaceAll(vowels2[j], '')

    }
    
 }

 console.log('text2 =',text2)
 let text3 = 'Hi, I am learning Javascript'
 let vowels3 = 'aeiouAEIOU'

 for (let x = 0; x < text3.length; x++) {
    let vowel = vowels3.charAt(x)

    if(text3.includes(vowel)) {
        text3 = text3.replaceAll(vowel,"")
    }

 }
console.log('Text3: ',text3)
// }