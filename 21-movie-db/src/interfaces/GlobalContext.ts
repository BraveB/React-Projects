import React, { Dispatch } from "react";
import { Error } from "./Error";
import { Movie } from "./Movie";

export interface GlobalContext {
  query: string;
  setQuery: Dispatch<string>;
  error: Error;
  movies: Movie[];
  isLoading: boolean;
}
