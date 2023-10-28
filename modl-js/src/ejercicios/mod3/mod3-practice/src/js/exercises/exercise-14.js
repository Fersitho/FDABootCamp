/* 
EJERCICIO 14:
Muestra un array que solo incluya la pelicula mejor valorada de cada uno de estos actores:
- Leonardo Dicaprio
- Robert De Niro
- Tom Hanks
*/

// filtramos las pelicuas buscando en el string si el actorr esta con includes nos devuelve todas las pelis del actor.
// luego con reduce vamos comparando para traer la peli que tenga mayor rating
// maxRatFilm es el acumulador de reduce y film es la pelicula que estamos viendo e iteramos, comparamos con el actual maxRatFilm

const filterFilmBestActor = (films, actors) => {
    let arrayFilmBestActor = [];


    // Primer intento con un for

    // for (let i = 0; i < actors.length; i++) {

    //     let bestActorMovie = films
    //     .filter(film => film.actors.includes(actors[i]))
    //     .reduce((maxRatFilm, film) => (maxRatFilm.rating > film.rating ? maxRatFilm : film));

    //     arrayFilmBestActor.push(bestActorMovie);
    // }


    actors.forEach(actorName => {
        let bestActorMovie = films
            .filter(film => film.actors.includes(actorName))
            .reduce((maxRatFilm, film) => (maxRatFilm.rating > film.rating ? maxRatFilm : film));

        arrayFilmBestActor.push(bestActorMovie);
    });

    return arrayFilmBestActor;

}

let actors = ['Leonardo DiCaprio', 'Robert De Niro', 'Tom Hanks'];

showContent(14, filterFilmBestActor(movies, actors));