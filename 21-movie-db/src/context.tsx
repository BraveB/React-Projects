import React, { useState, useContext } from "react";
import { useFetch } from "./hooks/useFetch";
import { AppProviderProps, GlobalContext } from "interfaces";
import { initialGlobalContext } from "utils";

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
