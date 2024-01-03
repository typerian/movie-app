import { TypesMovies } from "../lib/constants";
import MovieCard from "./movie-card";

const MovieGrid = ({
  movies,
  handleMovieClick,
}: {
  movies: TypesMovies[];
  handleMovieClick: (movie: TypesMovies) => void;
}) => {
  if (movies.length === 0) return null;

  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
      {movies.map((movie: TypesMovies) => (
        <MovieCard key={movie.id} movie={movie} onClick={handleMovieClick} />
      ))}
    </div>
  );
};

export default MovieGrid;
