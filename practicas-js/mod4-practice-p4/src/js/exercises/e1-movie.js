// import { movies } from '../data/movies'
import { movies } from '../utils/movie-api'
import { createFilmsInfoRow } from '../practice/practice1'
import { createSearchElement } from '../practice/practice2'
import { viewInfoFilm } from '../utils/info-film-load'

const globalValues = {
  filterText: '',
  searchText: '',
  orderType: ''
}

// La practica 3 la encontramos en movie-api.js, 
// tiene en consola, al realizar npm run serve, el objeto de peliculas generado con la practica 3.
console.log(movies)

// ELIMINO LA OPCION DE CAMBIAR A FILAS, EN PRACTICA 2 en adelante. La dejamos disponible para añadir.
document.querySelector("#root").innerHTML = `
  <div class="sec-movies-background">
    <section class="sec-movies-listed max-content">
      <section class="sec-movies-listed-option-view">
        
      </section>

      <section class="sec-movies-listed-load"></section>
    </section>
  </div>
`;

createSearchElement()

// Con esta funcion cambiamos el contenido entre cuadricula o filas!
const changeViewMovies = (e) => {
  document.querySelector('.sec-movies-listed-load').innerHTML = ''
  if (e.target.id === 'viewType1') {
    createFilmsInfo(movies)
  } else if (e.target.id === 'viewType2') {
    document.querySelector('.sec-movies-listed-load').appendChild(createFilmsInfoRow(movies))
  }
}
// añadimos el evento para escuchar el clic lo aplicamos al padre, ahorrando meter 2 event.
document.querySelector('.sec-movies-listed-option-view').addEventListener('click', changeViewMovies);

function eventHiddenData(event) {
  if (event.target.tagName == 'I') {
    let miElement = event.target
    let img = miElement.previousElementSibling


    let container = miElement.nextElementSibling
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

    if (!miElement.classList.contains('show')) {
      miElement.className += ' show'
      event.target.className = 'noShow'
      icons.className = 'fa-regular fa-rotate-left'
    }
  }

}

const genSectionFilm = () => {
  let element = document.createElement('section')
  return element

}

const genImgFilm = (film) => {

  let img = document.createElement('img')
  img.setAttribute('src', 'http://image.tmdb.org/t/p/w400/' + film.poster)
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



export const createFilmsInfo = (movies) => {

  for (let i = 0; i < movies.length; i++) {
    let film = movies[i]

    const sectionFilms = genSectionFilm()
    sectionFilms.appendChild(genImgFilm(film))
    sectionFilms.appendChild(genIconView())

    let divInfo = document.createElement('div');
    divInfo.className = 'container-info-film'
    divInfo.appendChild(genArticleRating(film))
    divInfo.appendChild(genArticleSummary(film))

    divInfo.appendChild(genArticleDirector(film))

    divInfo.appendChild(genArticleActors(film))
    divInfo.appendChild(genArticleCategory(film))

    const button = document.createElement('button')
    button.className = 'bn6'
    button.textContent = 'MORE INFO'
    button.style.alignSelf = 'center'
    button.style.margin = '1rem'
    button.id = i

    button.addEventListener('click', viewInfoFilm)
    divInfo.appendChild(button)

    sectionFilms.appendChild(divInfo)

    document.querySelector('.sec-movies-listed-load').addEventListener('click', eventHiddenData);
    document.querySelector('.sec-movies-listed-load').appendChild(sectionFilms)

  }
 
}

createFilmsInfo(movies)