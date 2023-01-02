import React, { useState, useContext, useEffect } from "react";
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

export const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [data, setData] = useState(null);

  const fetchMovies = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setIsLoading(false);
      if (data.Response === "True") {
        setData(data.Search || data);
        setError({ show: false, msg: "" });
        return;
      }
      setError({ show: true, msg: data.Error });
    } catch (error) {
      setError({ show: true, msg: error });
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}${urlParams}`);
  }, [urlParams]);

  return { isLoading, error, data };
};
