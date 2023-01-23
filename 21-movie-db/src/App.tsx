import React from "react";
import { FC } from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { SingleMovie as Movie } from "./pages/SingleMovie";

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movies/:id" element={<Movie />} />
    </Routes>
  );
};
