
import { movies } from "./movie-api"

export async function viewInfoFilm(e) {
    let idTarget = e.target.id
    let infoFilm = movies[idTarget]
    console.log(infoFilm)
    // main root metemos la pagina nueva generar por js!
    const pageInfoPeli = genHeaderInfoFilm(infoFilm)
    const mainInfoFilm = genMainInfoFilm(infoFilm)

}


async function genHeaderInfoFilm(m) {

    // generar section de header-info-film-grid
    const headerInfoFilm = document.createElement('div')
    headerInfoFilm.className = 'header-info-film'

    const headerInfoFilmGrid = document.createElement('section')
    headerInfoFilm.className = 'header-info-film-grid'

    const containerHeaderInfoFilmGrid = document.createElment('div')
    headerInfoFilm.className = 'conteiner-header-info-film'
    
    const e1 = document.createElement('div')
    e1.className = 'titulo-pelicula'
    const e12 = document.createElement('h3')
    e12.textContent = 'The Equalizer Colletion'

}

async function genMainInfoFilm(m) {

    // generar section de main-info-film-grid


}