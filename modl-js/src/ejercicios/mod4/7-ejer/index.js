// console.clear();

// const button = document.querySelector("button");
// button.addEventListener("click", onClickStart);

// async function onClickStart() {
//   try {
//     console.clear();
//     const result = await randomNums();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   } finally {
//     console.info('Done');
//   }
// }

// function randomNums() {
//   return new Promise((resolve, reject) => {
//     let count = 1;
//     const max = 90;

//     const id = setInterval(() => {
//       const rand = Math.floor(Math.random() * 100);
//       console.log(count, rand);

//       if (rand > max) {
//         resolve(`Num found ${rand}`);
//         clearInterval(id);
//       } else if (count >= 5) {
//         reject(`Number higher than ${max} not found.`);
//         clearInterval(id);
//       } else {
//         count++;
//       }
//     }, 1000);
//   });
// }

console.clear();

const button = document.querySelector("button");
button.addEventListener("click", onClickStart);

async function onClickStart() {
  try {
    console.clear();
    
    let pokemonBuscado = 'bulbasaur'
    let response1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonBuscado}`);
    if (!response1.ok) {
      throw Error(response1.statusText);
    }
    let json1 = await response1.json();
    let pokemon = await json1;

    console.log(pokemon)

    document.querySelector('body main').innerHTML += `
    <img src="${pokemon.sprites.front_default}" alt='pokemon'>
    `

    const result = await randomNum();
    console.log(result);
    
  } catch (error) {
    console.error(error);
  } finally {
    console.info('Done');
  }
}

function randomNum() {
  return new Promise((resolve, reject) => {


    setTimeout(() => {
      const rand = Math.floor(Math.random() * 100);

      if (rand % 2 === 0) {
        resolve(`El numero ${rand} es par.`);
      } else {
        reject(`El numero ${rand} es impar.`);
      }
    }, 1000);

  });
}