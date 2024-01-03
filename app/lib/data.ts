import { BASE_URL } from "./constants";

export const searchMovie = async (query: string) => {
  try {
    const res = await fetch(
      `${BASE_URL}/search/movie?api_key=${
        process.env.NEXT_PUBLIC_API_KEY
      }&query=${encodeURIComponent(query)}`
    );
    return res.json();
  } catch (error) {
    console.error("Error al buscar la pelicula", error);
    return [];
  }
};
