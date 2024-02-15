"use client";
import { useState } from "react";
import { searchMovie } from "./lib/data";
import MovieGrid from "./components/movie-grid";
import { TypesMovies } from "./lib/constants";
import Modal from "./components/modal";

export default function Home() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<TypesMovies[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<TypesMovies | null>();

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query) return;
    const { results } = await searchMovie(query);
    setMovies(results);
    console.log({ results });
  };

  const handleMovieClick = (movie: TypesMovies) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-6xl font-bold m-4">Explorador de películas</h1>
        <form onSubmit={handleSearch} className="mt-8">
          <input
            type="text"
            className="px-4 py-2 w-80 text-gray-900"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="buscar por nombre de pelicula..."
          />
          <button
            type="submit"
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Buscar
          </button>
        </form>
        <MovieGrid movies={movies} handleMovieClick={handleMovieClick} />
      </main>
      <Modal movie={selectedMovie!} onClose={handleCloseModal} />
    </div>
  );
}
