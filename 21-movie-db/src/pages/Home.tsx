import React from "react";
import { Search, Movies } from "components";
import { FC } from "react";

export const Home: FC = () => {
  return (
    <main>
      <Search />
      <Movies />
    </main>
  );
};
