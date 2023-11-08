console.clear();





// class Movie {
//     title;
//     overview;

//     static options = Object.freeze({
//         nowPlaying: 'now_playing',
//         popular: 'popular',
//         topRated: 'top_rated',
//         upcoming: 'upcoming'
//     })

//     static #baseUrl = 'https://api.themoviedb.org/3/movie/'
//     static #apiKey = 'c22fb38c26ba2c2d1c63e9fb3f150618'
//     static #langCode = 'es-ES'

//     async getMovies() {
//         let baseUrl = 'https://api.themoviedb.org/3/movie/'
//         let apiKey = 'c22fb38c26ba2c2d1c63e9fb3f150618'
//         let langCode = 'es-ES'
//         let url = `${baseUrl}${options.topRated}?api_key=${apiKey}&language=${langCode}`

//         let response = await fetch(url);
//         if (!response.ok) {
//             throw Error(response.statusText);
//         }
//         let json = await response.json();
//         return json.results
//     }

//     async getMovieDetail(movieId) {
//         let baseUrl = 'https://api.themoviedb.org/3/movie/'
//         let apiKey = 'c22fb38c26ba2c2d1c63e9fb3f150618'
//         let langCode = 'es-ES'
//         let url = `${baseUrl}${movieId}?api_key=${apiKey}&language=${langCode}`

//         let response = await fetch(url);
//         if (!response.ok) {
//             throw Error(response.statusText);
//         }
//         let json = await response.json();
//         return json
//     }

// }


const options = Object.freeze({
    nowPlaying: 'now_playing',
    popular: 'popular',
    topRated: 'top_rated',
    upcoming: 'upcoming'
})

const apiKey = 'c22fb38c26ba2c2d1c63e9fb3f150618' // esto deberia ser variable de entorno o algo privado.
const baseUrl = 'https://api.themoviedb.org/3/movie/'
const langCode = 'es-ES'



async function getMovies(optionLoad) {
    try {
        let url = `${baseUrl}${optionLoad}?api_key=${apiKey}&language=${langCode}`

        let response = await fetch(url);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        let json = await response.json();

        let results = json.results

        // convertir para que se hagan todas las peticiones en paralelo
        let promises = results.map(movie => getMovieDetail(movie.id));

        let movies = await Promise.all(promises);

        // console.log(movies);

        return movies;
    } catch (error) {
        console.log(error);
    }

}

async function getMovieDetail(movieId) {
    try {
        let details = await getMovieCredits(movieId)
        let url = `${baseUrl}${movieId}?api_key=${apiKey}&language=${langCode}`

        let response = await fetch(url);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        let json = await response.json();

        // let category = json.genres.map(gen => gen.name).join(', ')
        let category = await json.genres[0].name
        let categories = await json.genres
        const { id, title, overview: description, poster_path: poster, release_date: year, vote_average: rating } = json

        const movie = { id, title, description, poster, year: year.split('-')[0], rating: rating.toFixed(2), ...details, category, categories }

        return movie
    } catch (error) {
        console.log(error)
    }
}

async function getMovieCredits(movieId) {
    try {
        let url = `${baseUrl}${movieId}/credits?api_key=${apiKey}&language=${langCode}`

        let response = await fetch(url);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        let json = await response.json();

        let actors = json.cast.map(member => member.name).slice(0, 10).join(', ')
        let director = json.crew.find(member => member.job.toLowerCase() === 'director')?.name ?? 'Not director'

        return {
            actors,
            director
        }

    } catch (error) {
        console.log(error)
    }
}

async function testMovie() {
    const movies = await getMovies(options.topRated)
    console.log(movies)

    const movieId = movies[0].id
    console.log(movieId)

    const movieDetail = await getMovieDetail(movieId)
    console.log(movieDetail)

    return movieDetail
}

testMovie()