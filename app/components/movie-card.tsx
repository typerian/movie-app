"use client";
import Image from "next/image";
import { TypesMovies } from "../lib/constants";

const MovieCard = ({
  movie,
  onClick,
}: {
  movie: TypesMovies;
  onClick: (movie: TypesMovies) => void;
}) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const truncTitle =
    movie.title.length > 25
      ? movie.title.substring(0, 25) + "..."
      : movie.title;
  return (
    <div className="cursor-pointer" onClick={() => onClick(movie)}>
      <div className="relative w-64 h-96">
        <Image
          src={imageUrl}
          alt={truncTitle}
          layout="responsive"
          width={128}
          height={192}
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <h3 className="text-white text-lg">{truncTitle}</h3>
    </div>
  );
};

export default MovieCard;
