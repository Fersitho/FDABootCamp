
// crear funciones para filtrar, ordenar y buscar.

// filtro por categorias

// ordenar por titulo, director y año de formas (asc o desc)

// busqueda con retardo debounce, busca si el texto esta en: titulo, director, actores o año.

// voy hacer datalist en vez de seletec con options, le aplico el debounce a todo.


// El archivo principal que se ejecuta al iniciar es ../exercises/e1-movies.js
// en ../utils --> puede en contrar filterMovies.js "nos ayuda a filtar peliculas" 
//                 y "movie-api.js" funciones para conseguir pelis via API.

// La practica 3 la encontramos en movie-api.js, 
// tiene en consola, al realizar npm run serve, el objeto de peliculas generado con la practica 3.

import { categories } from '../data/movie-categories'

import { filterMovies } from '../utils/filterFilms'

export function createSearchElement() {
    const sectionNav = document.createElement('section')

    sectionNav.appendChild(createInputDataListFilter(categories))
    sectionNav.appendChild(createInputText())
    sectionNav.appendChild(createInputDataListOrder())
    

    const siteInsert = document.querySelector('.sec-movies-listed')

    siteInsert.insertBefore(createElementReset(), siteInsert.firstChild)

    siteInsert.insertBefore(sectionNav, siteInsert.firstChild)

    document.querySelector('#resetForm').addEventListener('click', () => {
        document.querySelector('#categoryFilter').value = ''
        document.querySelector('#orderMovies').value = ''
        document.querySelector('#findMovie').value = ''
        filterMovies()
    })

    document.querySelector('#categoryFilter').addEventListener('input', filterMovies)
    document.querySelector('#orderMovies').addEventListener('input', filterMovies)
    document.querySelector('#findMovie').addEventListener('input', filterMovies)

}

function createInputText() {
    const element = document.createElement('input')
    element.type = 'text'
    element.id = 'findMovie'
    element.className = 'input-border-bottom'
    element.placeholder = 'Search Films'

    return element
}

function createInputDataListFilter(categories) {
    const element = document.createElement('input')
    element.type = 'text'
    element.id = 'categoryFilter'
    element.className = 'input-border-bottom'
    element.placeholder = 'Filter by Category'
    element.setAttribute('list', 'dataCategorys')

    if (categories !== null && categories !== undefined) {

        const datalist = document.createElement('datalist')
        datalist.id = 'dataCategorys'

        Object.values(categories).forEach(entry => {
            const option = document.createElement('option')
            option.value = entry
            datalist.appendChild(option)
        })

        element.appendChild(datalist)

    }

    return element
}

function createInputDataListOrder() {

    const element = document.createElement('input')
    element.type = 'text'
    element.id = 'orderMovies'
    element.className = 'input-border-bottom'
    element.placeholder = 'Order Movies'
    element.setAttribute('list', 'dataOrder')

    const orderList = [
        'Order by Title ASC',
        'Order by Title DESC',
        'Order by Director ASC',
        'Order by Director DESC',
        'Order by Year ASC',
        'Order by Year DESC'
    ]

    const datalist = document.createElement('datalist')
    datalist.id = 'dataOrder'

    orderList.forEach(entry => {
        const option = document.createElement('option')
        option.value = entry
        datalist.appendChild(option)
    })

    element.appendChild(datalist)

    return element

}

function createElementReset() {
    const sect = document.createElement('section')
    sect.id = 'info-busqueda-sec'
    sect.className = 'info-busqueda-sec'
    sect.style.display = 'none'


    const p = document.createElement('p')
    p.id = 'infoBusqueda'
    p.textContent = ''
    sect.appendChild(p)

    const butReset = document.createElement('button')
    butReset.id = 'resetForm'
    butReset.className = 'bn5'
    butReset.textContent = 'Reset'
    sect.appendChild(butReset)

    return sect
}