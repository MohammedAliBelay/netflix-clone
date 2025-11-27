import React from "react";
import "./movieCard.css";

function MovieCard({ movie }) {
  const base_url = "https://image.tmdb.org/t/p/original/";
  return (
    <img
      className="poster"
      src={`${base_url}${movie.poster_path}`}
      alt={movie.title}
    />
  );
}
export default MovieCard;
