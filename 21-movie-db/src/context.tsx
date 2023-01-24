import React, { useState, useContext, Dispatch, ReactNode } from "react";
import { useFetch } from "./hooks/useFetch";
import { AppProviderProps } from "./interfaces/AppProviderProps";
import { GlobalContext } from "./interfaces/GlobalContext";
import { initialGlobalContext } from "./utils/constants";

const AppContext = React.createContext<GlobalContext>(initialGlobalContext);

const AppProvider = ({ children }: AppProviderProps) => {
  const [query, setQuery] = useState("sup");
  const { isLoading, error, data: movies } = useFetch(`&s=${query}`);
  return (
    <AppContext.Provider value={{ setQuery, isLoading, error, movies, query }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
