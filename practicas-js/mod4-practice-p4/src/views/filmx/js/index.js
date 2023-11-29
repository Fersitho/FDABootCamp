import { movies } from '../../../data/movies'


function eventHiddenDescription(e) {
    if (e.target.tagName == 'H3') {
        let miElementFocus = e.target.nextElementSibling
        miElementFocus.style.display = miElementFocus.style.display == 'none' ? '-webkit-box' : 'none'
    }
    // let elementos = document.querySelectorAll('.summary p')

    // for (let i = 0; i < elementos.length; i++) {
    //     elementos[i].style.display = elementos[i].style.display == 'none' ? '-webkit-box' : 'none'
    // }

}

function eventHiddenData(event) {
    // console.log(event)
    if (event.target.tagName == 'I') {
        let miElement = event.target
        let img = miElement.previousElementSibling


        let container = miElement.nextElementSibling
        // .parentNode nos da el padre!
        // event.srcElement nos da el elemento principal clcado donde se producio el evento
        if (img.classList.contains('noShow')) {
            img.className = ''
            container.className = 'container-info-film'
            miElement.className = 'fa-regular fa-eye noShow'
        }
    }

    if (event.target.tagName == 'IMG') {

        let miElement = event.target.nextElementSibling.nextElementSibling


        let icons = event.target.nextElementSibling

        let altoImg = event.target.offsetHeight - 50
        console.log(altoImg)


        // .parentNode nos da el padre!
        // event.srcElement nos da el elemento principal clcado donde se producio el evento
        if (!miElement.classList.contains('show')) {
            miElement.className += ' show'
            event.target.className = 'noShow'
            icons.className = 'fa-regular fa-rotate-left'
        }
    }



    // let elementos = document.querySelectorAll('section > div > article')
    // let icons = document.querySelectorAll('section > i')

    // for (let i = 0; i < elementos.length; i++) {

    //     elementos[i].toggleAttribute('hidden')

    //     if (icons[i] !== undefined) {
    //         if (elementos[i].hasAttribute('hidden')) {

    //             icons[i].className = 'fa-sharp fa-regular fa-eye-slash'

    //         } else {

    //             icons[i].className = 'fa-regular fa-eye'

    //         }
    //     }

    // }

}

const genSectionFilm = () => {
    let a = document.createElement('section')
    return a

}

const genImgFilm = (film) => {

    let img = document.createElement('img')
    img.setAttribute('src', film.poster)
    img.setAttribute('alt', `Film: ${film.title}`)

    return img
}
const genIconView = () => {
    let icon = document.createElement('i')
    icon.className = 'fa-regular fa-eye noShow'

    return icon
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
        sectionFilms.appendChild(genIconView())

        let divInfo = document.createElement('div');
        divInfo.className = 'container-info-film'
        // divInfo.appendChild(genIconView())
        divInfo.appendChild(genArticleRating(film))
        divInfo.appendChild(genArticleSummary(film))

        divInfo.appendChild(genArticleDirector(film))

        divInfo.appendChild(genArticleActors(film))
        divInfo.appendChild(genArticleCategory(film))
        sectionFilms.appendChild(divInfo)

        document.querySelector('#browser').addEventListener('click', eventHiddenData);
        // document.querySelector('body>main').addEventListener('click', eventHiddenDescription);

        document.querySelector('#browser').appendChild(sectionFilms)

    }

}

console.log(movies)

createFilmsInfo(
    // movies.filter(film => film.title.includes('F')).sort((a, b) => b.year - a.year)
    movies.filter(film => film.actors.includes('Brad Pitt')).sort((a, b) => b.year - a.year)
    // movies.sort((a, b) => b.year - a.year)
)
