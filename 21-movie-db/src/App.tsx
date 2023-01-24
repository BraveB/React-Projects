import React, { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, SingleMovie as Movie } from "pages";

export const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies/:id" element={<Movie />} />
      </Routes>
    </Router>
  );
};
