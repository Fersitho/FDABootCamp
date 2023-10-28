
const moviesA = [{
    title: "The Dark Knight",
    director: "Christopher Nolan",
    actors: "Christian Bale, Heath Ledger, Aaron Eckhart",
    year: 2008,
    category: "Action",
    poster: "http://image.tmdb.org/t/p/w500//qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    rating: 9,
    description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
},
{
    title: "The Dark Knight",
    director: "Christopher Nolan",
    actors: "Christian Bale, Heath Ledger, Aaron Eckhart",
    year: 2008,
    category: "Action",
    poster: "http://image.tmdb.org/t/p/w500//qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    rating: 9,
    description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
}]

const genSectionFilm = () => document.createElement('section')

const genImgFilm = (film) => {

    let img = document.createElement('img')
    img.setAttribute('src', film.poster)
    img.setAttribute('alt', `Film: ${film.title}`)
    return img
}

const genArticleRating = (film) => {
    const articleRating = document.createElement('article')
    articleRating.className = 'rating'

    let h3 = document.createElement('h3')
    h3.textContent = film.title
    articleRating.appendChild(h3)

    let p = document.createElement('p')
    p.textContent = `Rating: ${film.rating} / ${film.year}`
    articleRating.appendChild(p)
    
    return articleRating;
}

const genArticleSummary = (film) => {
    const articleSummary = document.createElement('article')
    articleSummary.className = 'summary'

    let h3 = document.createElement('h3')
    h3.textContent = 'Summary'
    articleSummary.appendChild(h3)
    
    let p = document.createElement('p')
    p.textContent = film.description
    articleSummary.appendChild(p)

    return articleSummary
}

const genArticleDirector = (film) => {
    const articleDirector = document.createElement('article')

    let p = document.createElement('p')
    p.innerHTML = `<strong> Director </strong>: ${film.director}`
    articleDirector.appendChild(p)

    return articleDirector

}

const genArticleActors = (film) => {
    const articleActors = document.createElement('article')
    let p = document.createElement('p')
    p.innerHTML = `<strong> Actors</strong>: ${film.actors}`
    articleActors.appendChild(p)

    return articleActors

}

const genArticleCategory = (film) => {
    const articleCategory = document.createElement('article')
    let p = document.createElement('p')
    p.innerHTML = `<strong> Category</strong>: ${film.category}`
    articleCategory.appendChild(p)

    return articleCategory

}

const createFilmsInfo = (movies) => {

    for (let i = 0; i < movies.length; i++) {
        let film = movies[i]
        const sectionFilms = genSectionFilm()
        sectionFilms.appendChild(genImgFilm(film))
        sectionFilms.appendChild(genArticleRating(film))
        sectionFilms.appendChild(genArticleSummary(film))

        sectionFilms.appendChild(genArticleDirector(film))

        sectionFilms.appendChild(genArticleActors(film))
        sectionFilms.appendChild(genArticleCategory(film))

        document.querySelector('body>main').appendChild(sectionFilms)

    }

}

createFilmsInfo(moviesA)