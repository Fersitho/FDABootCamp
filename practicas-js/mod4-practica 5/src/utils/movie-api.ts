import { movieApiDefaults } from "../models/movie-api-defaults";
import { moviDetail } from "../models/movie-interface";
import { movieDetailsMapper } from "../mappers/movie-details.mapper";

export async function getMovieDetails(
  idMovie: number
): Promise<moviDetail | undefined> {
  try {
    const movieDetailUrl = `${movieApiDefaults.baseUrl}/movie/${idMovie}?api_key=${movieApiDefaults.apiKey}&language=${movieApiDefaults.lang}&append_to_response=credits`;

    const response = await fetch(movieDetailUrl);
    if (!response.ok) {
      throw Error(response.statusText);
    }

    const json = await response.json();

    // transformamos el response a nuestro objeto movie.

    const movieDetail = movieDetailsMapper(json);

    return movieDetail;
  } catch (e) {
    console.log(e);
  }
}
