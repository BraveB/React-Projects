import React, { FC } from "react";
import { useParams, Link } from "react-router-dom";
import { useFetch } from "hooks";

export const SingleMovie: FC = () => {
  const { id } = useParams();
  const { isLoading, error, data: movie } = useFetch(`&i=${id}`);

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

  const { poster, title, plot, year } = movie[0] || {};
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
