import { Movie } from "../interfaces/Movie";

export const movieMapper = (list: any) => {
  return list.map(
    (item: any) =>
      <Movie>{
        title: item.Title,
        year: item.Year,
        id: item.imdbID,
        poster: item.Poster,
        plot: item.Plot,
      }
  );
};
