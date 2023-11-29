
import { getMovieDetails } from './utils/movie-api'

async function loadPractica5(): Promise<void> {
    const movieLoad = await getMovieDetails(753342)
    console.log(movieLoad)
}

// Puede ver por consola la pelicula filtrada.

loadPractica5()








