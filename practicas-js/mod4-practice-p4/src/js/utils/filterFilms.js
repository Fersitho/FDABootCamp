

import { movies } from '../utils/movie-api'
//  la carga de peliculas no esta optimizada va un poco lenta tarde 850ms, 
//      he creado directamente el array de objetos completo para crear la lading page de busqueda y la pagina de detalle de una pelicula

import { categories } from '../data/movie-categories'
import { createFilmsInfoRow } from '../practice/practice1'
import { createFilmsInfo } from '../exercises/e1-movie'


import { getMoviesSearch } from '../utils/movie-api'

// Función para mostrar las películas
function mostrarPeliculas(moviesLoad) {
  const listaPeliculas = document.querySelector(".sec-movies-listed-load");

  if (document.querySelector('.grid-container') !== null) {
    listaPeliculas.innerHTML = "";
    document.querySelector('.sec-movies-listed-load').appendChild(createFilmsInfoRow(moviesLoad))
  } else {
    listaPeliculas.innerHTML = "";
    createFilmsInfo(moviesLoad)
  }
}

// Función para filtar películas segun contenido en titulo, director,...
const inputTextSerachMovies = async (peliculasFil, textInput) => {

  if (textInput != null && textInput.value != '') {
    let value = textInput.value
    let buscamosPelis = peliculasFil.filter(film =>
      film.title.toLowerCase().includes(value.toLowerCase()) ||
      film.category.toLowerCase().includes(value.toLowerCase()) ||
      film.director.toLowerCase().includes(value.toLowerCase()) ||
      film.actors.toLowerCase().includes(value.toLowerCase())
    )
    if (buscamosPelis.length !== 0) {

      return buscamosPelis

    } else {

      return peliculasFil

    }

  } else {
    return peliculasFil
  }



}

// Función para filtrar películas por categoria.
const filtrarPorCategoria = async (peliculasFil, categoriasInput) => {
  if (categoriasInput != null && categoriasInput.value && Object.values(categories).includes(categoriasInput.value)) {
    let val = categoriasInput.value.charAt(0).toUpperCase() + categoriasInput.value.slice(1)

    return await peliculasFil.filter(itm => itm.categories.some(category => category.name.includes(val)) === true);

  } else {

    return peliculasFil;

  }
};

// Función para ordenar películas.
const ordenarPeliculas = async (peliculasFil, ordenInput) => {

  let orderList = [
    'Order by Title ASC',
    'Order by Title DESC',
    'Order by Director ASC',
    'Order by Director DESC',
    'Order by Year ASC',
    'Order by Year DESC'
  ]
  if (ordenInput != null && ordenInput.value && orderList.find(a => a == ordenInput.value) != undefined) {
    const orden = await ordenInput.value;

    switch (orden) {
      case 'Order by Title ASC':
        return await peliculasFil.sort((a, b) => a.title.localeCompare(b.title));

      case 'Order by Title DESC':
        return await peliculasFil.sort((a, b) => b.title.localeCompare(a.title));

      case 'Order by Director ASC':
        return await peliculasFil.sort((a, b) => a.director.localeCompare(b.director));

      case 'Order by Director DESC':
        return await peliculasFil.sort((a, b) => b.director.localeCompare(a.director));

      case 'Order by Year ASC':
        return await peliculasFil.sort((a, b) => a.year - b.year);

      case 'Order by Year DESC':
        return await peliculasFil.sort((a, b) => b.year - a.year);

      default:
        return peliculasFil; // Restaurar el arreglo original

    }
  } else {
    return await peliculasFil.sort((a, b) => b.rating - a.rating);
  }

};

let timeOutId;
export async function filterMovies() {
  if (timeOutId) {
    clearInterval(timeOutId)
  }
  timeOutId = setTimeout(async () => {

    let peliculasFiltradas = [...movies];

    const categoriasInput = document.querySelector("#categoryFilter");
    const ordenInput = document.querySelector("#orderMovies");
    const busquedaInput = document.querySelector("#findMovie");

    try {

      let searchTextFilm = await inputTextSerachMovies([...peliculasFiltradas], busquedaInput)
      let peliculasFilter = await filtrarPorCategoria([...searchTextFilm], categoriasInput)
      let peliculasOrdenadas = await ordenarPeliculas([...peliculasFilter], ordenInput)


      if (categoriasInput != null && categoriasInput.value != '' || ordenInput != null && ordenInput.value != '' || busquedaInput != null && busquedaInput.value != '') {
        // insertar texto total pelis encontradas
        let total = peliculasOrdenadas.length

        document.querySelector('#info-busqueda-sec').style.display = 'flex'

        if (JSON.stringify(peliculasFilter) === JSON.stringify(movies)) {
          document.querySelector('#infoBusqueda').textContent = `No se han encontrado películas que coinciden con tu búsqueda`
        } else {
          document.querySelector('#infoBusqueda').textContent = `Se han encontrado ${total} películas que coinciden con tu búsqueda`
        }

      } else {
        // quitar texto de total pelis
        document.querySelector('#info-busqueda-sec').style.display = 'none'
      }

      mostrarPeliculas(peliculasOrdenadas);
      
      // if (JSON.stringify(peliculasOrdenadas) !== JSON.stringify(movies)) {
      // mostrarPeliculas(peliculasOrdenadas);
      // }

    } catch (error) {
      console.error(error);
    }
  }, 550)
}



// buscamos peliculas que cotengas x texto en la api, una prueba antes de hacer la practica 4.
const inputSearchMovies = async (peliculasFil, busquedaInput, page = 1) => {

  if (busquedaInput != null && busquedaInput.value != '') {
    let buscamosPelis = await getMoviesSearch(busquedaInput.value, page)
    if (buscamosPelis.length !== 0) {
      return buscamosPelis
    } else {
      let copyM = [...movies]
      return copyM
    }

  } else {
    return peliculasFil
  }

}
