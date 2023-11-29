/* 
EJERCICIO 15:
Muestra un array con el título y la descripción de las mejores peliculas ordenadas de mejor a peor, 
siendo las mejores aquellas cuya valoración es superior a la valoración media de todas las películas




1 tenemos la media que es total del sumatorio de todos los rating entre su longitud el length
2 hacemos un filter con aquellas que tenga mayor rating a la media + luego un sort
3 y un map para crear un array con los datos requeridos

*/

const searchBestFilmTopMedia = (films) => {

    let media = (films.reduce((media, film) => media += film.rating, 0) / films.length).toFixed(2);
    let moviesBestDESC = films.filter(a => a.rating >= media).sort((a, b) => b.rating - a.rating);
    let moviesBest = moviesBestDESC.map((film) => ({
        title: film.title,
        description: film.description
    }));

    return moviesBest;

}

showContent(15, searchBestFilmTopMedia(movies));