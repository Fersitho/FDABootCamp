import { fizzBuzz } from "./utils/fizzBuzz.js";
import { addMovie, films, getMovieByTitle, getMoviesByType, printMovies, printTypeMovie, selectMovieByTitleId, } from "./utils/moviesHelper.js";
import { getPokemonByName } from "./apiPokemon/controllers.js";
console.log("Array inicial de films:", films);
// Ejercicio 1-----------------------------------------------------------:
console.log("-");
console.log("-");
console.log("Ejercicio 1");
// buscamos pelicula por titulo con getMovieByTitle
const searchMovie = getMovieByTitle("Example 2");
//imprimimos el tipo de peli encontrada
searchMovie != undefined
    ? printTypeMovie(searchMovie)
    : console.log("No se encontro la pelicula que busca");
// Ejercicio 2-----------------------------------------------------------:
console.log("-");
console.log("-");
console.log("Ejercicio 2");
const moviesSearchByType = getMoviesByType("serie");
printMovies(moviesSearchByType);
// Ejercicio 3-----------------------------------------------------------:
console.log("-");
console.log("-");
console.log("Ejercicio 3");
fizzBuzz(6);
fizzBuzz(20);
fizzBuzz(30);
fizzBuzz(8);
// Ejercicio 4-----------------------------------------------------------:
console.log("-");
console.log("-");
console.log("Ejercicio 4");
function borrarCeros(data) {
    return data.filter((element) => element !== 0);
}
console.log(borrarCeros([0, 1, 0, 2, 0, 3]));
console.log(borrarCeros([9, 3, 6, 4]));
console.log(borrarCeros([0, 0, 0]));
// Ejercicio 5, entendi que no hay que hacer una funcion solo modificacion de films, he usado forEach nos cambia el array directamente.:
console.log("-");
console.log("-");
console.log("Ejercicio 5");
films.forEach((element, index) => {
    element.id = index;
});
console.log("Array films añadido id con foreach:", films);
// Ejercicio 6-----------------------------------------------------------:
console.log("-");
console.log("-");
console.log("Ejercicio 6");
selectMovieByTitleId(3);
selectMovieByTitleId("Example 2");
// Ejercicio 7-----------------------------------------------------------:
console.log("-");
console.log("-");
console.log("Ejercicio 7");
addMovie({
    title: "Example 5",
    type: "serie",
});
films.forEach((element, index) => {
    element.id = index;
});
console.log(films);
// forzamos error
addMovie({
    title: "Example 5",
    type: "serie",
});
// POKE API
// const fetch = require( 'node-fetch');
// imfport
// Llama a la función
getPokemonByName();
// Archivo            (ejercicios resueltos)
// Ejercicio_Movies     (1,2,5,6,7)
// Ejercicio_FizzBuzz   (3)
// Ejercicios_genericos (4)
// Ejercicio_PokeApi    (8,9)
// Ejercicio_Calculadora(10)
