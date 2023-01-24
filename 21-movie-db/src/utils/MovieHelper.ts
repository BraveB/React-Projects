import { Movie } from "../interfaces/Movie";

export const movieMapper = (list: any) => {
  if (!list.length)
    return [
      <Movie>{
        title: list.Title,
        year: list.Year,
        id: list.imdbID,
        poster: list.Poster,
        plot: list.Plot,
      },
    ];
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
