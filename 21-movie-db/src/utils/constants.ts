import { Error, GlobalContext } from "interfaces";

export const initialError: Error = { show: false, msg: "" };
export const initialGlobalContext: GlobalContext = {
  query: "",
  setQuery: () => {},
  error: initialError,
  movies: [],
  isLoading: false,
};

export const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
