import React, { useState, useEffect } from "react";
import { Error } from "../interfaces/Error";
import { Movie } from "../interfaces/Movie";
import { movieMapper } from "../utils/MovieHelper";
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

export const useFetch = (urlParams: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error>({ show: false, msg: "" });
  const [data, setData] = useState<Movie[]>([]);

  const fetchMovies = async (url: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setIsLoading(false);
      if (data.Response === "True") {
        const newData = data.Search
          ? movieMapper(data.Search)
          : movieMapper(data);
        setData(newData);
        setError({ show: false, msg: "" });
        return;
      }
      setError({ show: true, msg: data.Error });
    } catch (error) {
      setError({ show: true, msg: String(error) });
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}${urlParams}`);
  }, [urlParams]);

  return { isLoading, error, data };
};
