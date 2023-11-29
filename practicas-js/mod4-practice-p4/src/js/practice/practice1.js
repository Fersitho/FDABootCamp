
function createHeaderItemCenter(text) {
    const element = document.createElement("p");
    element.className = "header-item-center";
    element.textContent = text;

    return element;

}

function createHeaderPhoto() {
    const element = document.createElement("div");
    element.className = "foto";

    return element;
}

function createHeaderItemTitle(text) {
    const element = document.createElement("p");
    element.className = "header-item-title";
    element.textContent = text;

    return element;
}

function createHeader() {
    const element = document.createElement("header");
    element.className = "header2";

    element.appendChild(createHeaderItemCenter('Rank'));
    element.appendChild(createHeaderPhoto());
    element.appendChild(createHeaderItemTitle('Title'));
    element.appendChild(createHeaderItemCenter('Average Rating'));
    element.appendChild(createHeaderItemCenter('Num Reviews'));
    element.appendChild(createHeaderItemCenter('Your Rating'));

    return element;
}

const createRowData = (data) => {
    const element = document.createElement("p");
    element.className = "header-item-center";
    element.textContent = data;

    return element;

}
const createRowPhoto = (poster, title) => {
    const element = document.createElement("div");
    element.className = "foto";
    const element2 = document.createElement("img");
    element2.setAttribute('src', 'https://image.tmdb.org/t/p/w400' + poster)
    element2.setAttribute('alt', title)

    element.appendChild(element2)

    return element;

}
const createRowTitle = (title) => {
    const element = document.createElement("div");
    element.className = "title";
    const element2 = document.createElement("a");
    element2.setAttribute('href', '#')
    element2.textContent = title

    element.appendChild(element2)

    return element;

}
const createRowStars = (rating) => {
    const element = document.createElement("div");
    element.className = "header-item-center";
    let numR = Math.floor(Math.random() * 5)
    for (let i = 0; i < numR; i++) {
        const element2 = document.createElement("I");
        element2.className = "fa-solid fa-star yellow-star";
        element.appendChild(element2)
    }
    let numRR = 5 - numR
    console.log(numRR)
    for (let j = 0; j < numRR; j++) {
        const element3 = document.createElement("I");
        element3.className = "fa-regular fa-star empty-star";
        element.appendChild(element3)

    }


    return element;

}


function createFilmArticle(film, position) {
    const element = document.createElement("article");

    element.appendChild(createRowData(position))
    element.appendChild(createRowPhoto(film.poster, film.title))
    element.appendChild(createRowTitle(film.title))
    element.appendChild(createRowStars(film.rating))
    element.appendChild(createRowData(
        `(    ${Math.floor(Math.random() * 100)} reviews  )`
    ))
    element.appendChild(createRowData(Math.floor(Math.random() * 5)))

    return element;
}


export function createFilmsInfoRow(films) {

    const gridSection = document.createElement("section");
    gridSection.className = "grid-container";

    gridSection.appendChild(createHeader());

    for (let i = 0; i < films.length; i++) {
        const film = films[i];
        gridSection.appendChild(createFilmArticle(film, i + 1));
    }

    return gridSection;
}