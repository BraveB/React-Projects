import React, { useState, useEffect } from "react";
import { Movie } from "../interfaces/Movie";
import { API_ENDPOINT, initialError } from "../utils/constants";
import { movieMapper } from "../utils/MovieHelper";

export const useFetch = (urlParams: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(initialError);
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
