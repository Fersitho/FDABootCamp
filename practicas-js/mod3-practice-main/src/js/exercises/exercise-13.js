/* 
EJERCICIO 13:
Agrupa en un array las peliculas por categorias:
[
    {
        Drama: {
            {
                title: "Fight Club",
                director: "David Fincher",
                actors: "Brad Pitt, Edward Norton, Helena Bonham Carter",
                year: 1999,
                description:
                "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
                category: "Drama",
                rating: 8.8,
            },
            Action: {
                ...
            },
            ...
        }
    }
]
*/
const arrayFilterFilmsCategories = (films) => {

    let arrayFilmsByCategories = [
        { Drama: [] },
        { Action: [] },
        { Crime: [] },
        { Biography: [] },
        { Adventure: [] },
        { Comedy: [] }
    ]
    
    for (let i = 0; i < arrayFilmsByCategories.length; i++) {
        let categoryName = Object.keys(arrayFilmsByCategories[i])[0];
        let filtradoFilms = films.filter(a => a.category == categoryName)
        
        arrayFilmsByCategories[i][categoryName] = filtradoFilms;
    }
    
    return arrayFilmsByCategories;

}

showContent(13, arrayFilterFilmsCategories(movies));