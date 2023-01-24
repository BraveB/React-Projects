import React, { FC } from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import { url } from "../utils/constants";
import { Movie } from "interfaces";

export const Movies: FC = () => {
  const { movies, isLoading } = useGlobalContext();
  if (isLoading) return <div className="loading">Loading...</div>;
  return (
    <section className="movies">
      {movies.map((movie: Movie) => {
        const { id, poster, title, year } = movie;
        return (
          <Link to={`/movies/${id}`} key={id} className="movie">
            <article>
              <img src={poster === "N/A" ? url : poster} alt="title" />
              <div className="movie-info">
                <h4 className="title">{title}</h4>
                <p>{year}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};
