import React from "react";
import { useState } from "react";
// import { useGlobalContext } from "../context";
export const SearchForm = () => {
  // const { query, error, setQuery } = useGlobalContext();
  const [query, setQuery] = useState("he");
  const error = { show: true, msg: "error de mientras" };
  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <h2>Search movie</h2>
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {error.show && <div className="error">{error.msg}</div>}
    </form>
  );
};

export default SearchForm;
