import React, { useState, useContext } from "react";
import { useFetch } from "./hooks/useFetch";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
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
