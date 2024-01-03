"use client";
import React, { useEffect, useState } from "react";
import { BASE_URL, TypesMovies } from "../lib/constants";
import MovieGrid from "../components/movie-grid";
import Modal from "../components/modal";

const NowPlayingPage = () => {
  const [movies, setMovies] = useState<TypesMovies[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<TypesMovies | null>();

  useEffect(() => {
    fetch(
      `${BASE_URL}/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    )
      .then((res) => res.json())
      .then((results) => setMovies(results.results))
      .catch((error) =>
        console.error(`Error consultando: Estrenandose Ahora: `, error)
      );
  }, []);

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  const handleMovieClick = (movie: TypesMovies) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <main className="flex flex-col justify-center items-center min-h-screen py-2">
        <h1 className="text-6xl font-bold m-3">Estrenandose ahora</h1>
        <MovieGrid movies={movies} handleMovieClick={handleMovieClick} />
        {selectedMovie && (
          <Modal movie={selectedMovie} onClose={handleCloseModal} />
        )}
      </main>
    </div>
  );
};

export default NowPlayingPage;
