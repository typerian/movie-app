export const BASE_URL = "https://api.themoviedb.org/3";

export interface TypesMovies {
  adult: false;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number; //float
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number; //float
  vote_count: number;
}
