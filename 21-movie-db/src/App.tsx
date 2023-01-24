import React, { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { SingleMovie as Movie } from "./pages/SingleMovie";

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
