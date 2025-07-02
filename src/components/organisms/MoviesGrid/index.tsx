import sx from "./MoviesGrid.module.scss";
import { MoviesResponse } from "@/types";
import { CardItem } from "@/components";

type Props = {
  movies?: Array<MoviesResponse>;
};

export const MoviesGrid = ({ movies }: Props) => {
  if (!movies?.length) return null;

  return (
    <div className={sx.moviesGrid} id="moviesGrid">
      {movies?.map((value) => (
        <CardItem item={value} />
      ))}
    </div>
  );
};
