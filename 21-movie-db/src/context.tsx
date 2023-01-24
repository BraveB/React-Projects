import React, { useState, useContext, Dispatch, ReactNode } from "react";
import { useFetch } from "./hooks/useFetch";
import { Error } from "./interfaces/Error";
import { Movie } from "./interfaces/Movie";

export interface GlobalContext {
  query: string;
  setQuery: Dispatch<string>;
  error?: Error;
  movies?: Movie[];
  isLoading: boolean;
}
interface AppProviderProps {
  children: ReactNode;
}
const AppContext = React.createContext<GlobalContext | null>(null);

const AppProvider = ({ children }: AppProviderProps) => {
  const [query, setQuery] = useState("sup");
  const { isLoading, error, data: movies } = useFetch(`&s=${query}`);
  return (
    <AppContext.Provider value={{ setQuery, isLoading, error, movies, query }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
