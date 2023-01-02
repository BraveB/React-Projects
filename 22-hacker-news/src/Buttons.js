import React from "react";
import { useGlobalContext } from "./context";

const Buttons = () => {
  const { nbPages, isLoading, page, handlePage } = useGlobalContext();
  return (
    <section className="btn-container">
      <button
        disabled={isLoading || page === 0}
        onClick={() => handlePage("dec")}
      >
        prev
      </button>
      <p>{`${page + 1} of ${nbPages}`}</p>
      <button
        disabled={isLoading || page === nbPages - 1}
        onClick={() => handlePage("inc")}
      >
        next
      </button>
    </section>
  );
};

export default Buttons;
