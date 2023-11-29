import { CrewMember, moviDetail, Actor } from "../models/movie-interface";

export function movieDetailsMapper(json: any): moviDetail {
  const { title, overview: description, credits, vote_average: rating } = json;

  const movie = {
    title,
    description,
    rating: rating.toFixed(2),
    actors: credits.cast
      .slice(0, 5)
      .map((actor: Actor) => `${actor.original_name}`)
      .join(", "),
    director:
      credits.crew.find(
        (member: CrewMember) => member.department === "Directing"
      )?.name ?? "Not Avaliable",
  };

  return movie;
}
