import React, { useState, useEffect } from "react";
import { FC } from "react";
import { useParams, Link } from "react-router-dom";
// import { API_ENDPOINT, useFetch } from "../hooks/useFetch";

export const SingleMovie: FC = () => {
  const { id } = useParams();
  // const { isLoading, error, data: movie } = useFetch(`&i=${id}`);

  const isLoading = false;
  const error = { show: true, msg: "mensaje" };
  const movie = { Poster: "", Title: "titulo", Plot: "jaja", Year: "52" };
  if (isLoading) return <div className="loading">loading...</div>;
  if (error.show)
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link className="btn" to="/">
          back to movies
        </Link>
      </div>
    );

  const { Poster: poster, Title: title, Plot: plot, Year: year } = movie;
  return (
    <section className="single-movie">
      <img src={poster} alt={title} />
      <div className="single-movie-info">
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link className="btn" to="/">
          back to movies
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
