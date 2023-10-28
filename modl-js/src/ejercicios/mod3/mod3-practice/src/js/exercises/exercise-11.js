/* 
EJERCICIO 11:
Ordena las peliculas por valoracion (propiedad "rating") de mayor a menor
*/

const orderFilmByRating = (movies) => {

    return movies.sort((a,b) => b.rating - a.rating)
  
}

showContent(11, orderFilmByRating(movies));