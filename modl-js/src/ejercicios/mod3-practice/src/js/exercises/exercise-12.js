/* 
EJERCICIO 12:
Filtra las peliculas que pertenezcan a la categoria "Drama" e incluye solo el título y la descripción
Sugerencia: puedes usar la variable "categories" en el archivo "src/js/data/movies.js"
*/

const arrayFilCatInfoTitleDes = (films, category) => {
    // filtamos por categoria "category" las "films" y con map creamos un nuvo array solo con la info solicitada
    let arrayFilCatInfoTitleDes = films.filter(a => a.category === category).map((film) => ({
        title: film.title,
        description: film.description,
    }))

    return arrayFilCatInfoTitleDes

}

showContent(12, arrayFilCatInfoTitleDes(movies,'Drama'));