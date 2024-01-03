// simulando datos de BD
export let films = [
    {
        title: "Example 1",
        type: "film",
    },
    {
        title: "Example 2",
        type: "serie",
    },
    {
        title: "Example 3",
        type: "documental",
    },
    {
        title: "Example 4",
        type: "serie",
    },
];
export const getMovieByTitle = (title) => {
    return films.find((movie) => movie.title == title);
};
export const printTypeMovie = (movie) => {
    console.log(`La ${movie.title} es una ${movie.type}`);
};
export const getMovieById = (id) => {
    return films.find((movie) => movie.id == id);
};
export const getMoviesByType = (type) => {
    return films.filter((movie) => movie.type == type);
};
export const printMovies = (movies) => {
    if (movies.length == 0) {
        return console.log("Ninguna pelicula/serie/documental detectado");
    }
    for (const movie of movies) {
        console.log(movie);
    }
};
export function selectMovieByTitleId(value) {
    let movieLoad;
    if (typeof value == "string") {
        movieLoad = getMovieByTitle(value);
    }
    else {
        movieLoad = getMovieById(value);
    }
    console.log(movieLoad);
}
export function addMovie(film) {
    if (films.findIndex((movie) => movie.title == film.title) == -1) {
        films.unshift(film);
    }
    else {
        console.log("La pelicula ya existe");
    }
}
