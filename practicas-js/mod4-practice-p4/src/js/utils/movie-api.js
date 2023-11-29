const options = Object.freeze({
    nowPlaying: 'now_playing',
    popular: 'popular',
    topRated: 'top_rated',
    upcoming: 'upcoming'
})

const apiKey = 'c22fb38c26ba2c2d1c63e9fb3f150618' // esto deberia ser variable de entorno o algo privado.
const baseUrl = 'https://api.themoviedb.org/3/movie/'
const langCode = 'en-EN'

async function getMovieDetail(movieId) {
    try {
        let details = await getMovieCredits(movieId)
        let url = `${baseUrl}${movieId}?api_key=${apiKey}&language=${langCode}`

        let response = await fetch(url);
        if (response.status == 34 || response.status == 404 || !response.ok) {
            throw Error(response.statusText);
        }
        let json = await response.json();
       
        if (json.status !== 34 && json.status !== 404) {

            let category = await json.genres.map(a => a?.name ?? 'Not avaliable').join(', ')
            let categories = await json.genres
            const { id, title, overview: description, poster_path: poster, release_date: year, vote_average: rating } = json

            const movie = { id, title, description, poster, year: year.split('-')[0], rating: rating.toFixed(2), ...details, category, categories }

            return movie
        } else {
            return undefined
        }
    } catch (error) {
        console.log(error)
    }
}

async function getMovieCredits(movieId) {
    try {
        let url = `${baseUrl}${movieId}/credits?api_key=${apiKey}&language=${langCode}`

        let response = await fetch(url);

        if (response.status == 34 || response.status == 404 || !response.ok || response.success == false) {
            return {
                actors: 'Not Available',
                director: 'Not Available'
            }
        }
        let json = await response.json();

        let actors = json.cast.map(member => member.name).slice(0, 10).join(', ')
        let director = json.crew.find(member => member.job.toLowerCase() === 'director')?.name ?? 'Not director'


        let recommends = await getRecommendations(movieId)

        return {
            actors,
            director,
            cast: json.cast,
            crew: json.crew,
            recommends
        }

    } catch (error) {
        console.log(error)
    }
}

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
        let promises = results.map(async movie => await getMovieDetail(movie.id));

        let movies = await Promise.all(promises);

        return movies;
    } catch (error) {
        console.log(error);
    }

}

async function getRecommendations(idMovie){
    try {
        let url = `${baseUrl}${idMovie}/recommendations?api_key=${apiKey}&language=${langCode}`

        let response = await fetch(url);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        let json = await response.json();

        let results = json.results
        
        return results;
    } catch (error) {
        console.log(error);
    }
}

// prueba para obtener por keywords una peli!
export async function getMoviesSearch(text = '', page = 1) {
    try {
        let url = `https://api.themoviedb.org/3/search/keyword?api_key=${apiKey}&language=${langCode}&query=${text}&page=${page}`

        let response = await fetch(url);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        let json = await response.json();

        let results = json.results
        // convertir para que se hagan todas las peticiones en paralelo
        let promises = results.map(movie => getMovieDetail(movie.id));

        let movies = await Promise.all(promises);

        return movies.filter(f => f != undefined);
    } catch (error) {
        console.log(error);
    }

}

export const movies = await getMovies(options.popular)