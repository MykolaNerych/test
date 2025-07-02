import sx from "./CardItem.module.scss";

import { MoviesResponse } from "@/types";
import { useQueryGenre } from "@/api/useQueryGenre";

type Props = {
  item?: MoviesResponse;
};

export const CardItem = ({ item }: Props) => {
  const { data } = useQueryGenre();

  if (!item) return null;

  return (
    <div className={sx.movieCard}>
      <div className={sx.moviePoster}>
        <div className={sx.movieRating}>{item?.popularity}</div>
      </div>
      <div className={sx.movieInfo}>
        <h3 className={sx.movieTitle}>{item?.title}</h3>
        <div className={sx.movieYear}>{item?.release_date}</div>
        <p className={sx.movieOverview}>{item?.overview}</p>
        <div className={sx.movieGenres}>
          {item?.genre_ids?.map((value) => {
            const currentGenre = data?.genres.find(
              (item) => item?.id === value,
            );

            return <span className={sx.genreTag}>{currentGenre?.name}</span>;
          })}
        </div>
      </div>
    </div>
  );
};
