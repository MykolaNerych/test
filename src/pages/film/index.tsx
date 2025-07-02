import sx from "./FilmPage.module.scss";
import { useParams } from "react-router-dom";
import { CardItem, Loading } from "@/components";

import { useQueryMovie } from "@/api/useQueryMovie";

import { Header } from "@/components";

export const FilmPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useQueryMovie(id);

  return (
    <div className={sx.container}>
      <Header />
      <Loading isLoading={isLoading} />

      <CardItem item={data} />
    </div>
  );
};
