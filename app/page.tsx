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
      <main className="flex flex-col items-center justify-center py-2 h-screen">
        <h1 className="text-6xl font-bold m-4 text-center">
          Explorar de películas
        </h1>
        <form
          onSubmit={handleSearch}
          className="mt-8 grid grid-cols-4 md:grid-rows-1 grid-rows-2"
        >
          <input
            type="text"
            className="py-2 sm:w-96 px-2 w-full text-gray-900 md:col-span-3 col-span-4 text-center"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por nombre de pelicula..."
          />
          <button
            type="submit"
            className=" py-2 bg-blue-500 text-white rounded md:col-span-1 col-span-4"
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
