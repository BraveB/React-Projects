import React from "react";
import { SearchForm } from "../components/SearchForm";
import { Movies } from "../components/Movies";
import { FC } from "react";

export const Home: FC = () => {
  return (
    <main>
      <SearchForm />
      <Movies />
    </main>
  );
};
