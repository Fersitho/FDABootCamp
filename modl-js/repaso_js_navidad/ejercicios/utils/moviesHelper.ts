interface Film {
  title: string;
  type: string;
  id?: number;
}

// simulando datos de BD
export let films: Film[] = [
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

export const getMovieByTitle = (title: string): Film | undefined => {
  return films.find((movie) => movie.title == title);
};

export const printTypeMovie = (movie: Film) => {
  console.log(`La ${movie.title} es una ${movie.type}`);
};

export const getMovieById = (id: number): Film | undefined => {
  return films.find((movie) => movie.id == id);
};

export const getMoviesByType = (type: string): Film[] | [] => {
  return films.filter((movie) => movie.type == type);
};

export const printMovies = (movies: Film[] | []) => {
  if (movies.length == 0) {
    return console.log("Ninguna pelicula/serie/documental detectado");
  }
  for (const movie of movies) {
    console.log(movie);
  }
};

export function selectMovieByTitleId(value: string | number) {
  let movieLoad: Film | undefined;
  if (typeof value == "string") {
    movieLoad = getMovieByTitle(value);
  } else {
    movieLoad = getMovieById(value);
  }

  console.log(movieLoad);
}

export function addMovie(film: Film) {
  if (films.findIndex((movie) => movie.title == film.title) == -1) {
    films.unshift(film);
  } else {
    console.log("La pelicula ya existe");
  }
}
