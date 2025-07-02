import useSWR from "swr";
import { fetcher } from "@/lib";
import { MoviesResponse } from "@/types";

export const useQueryMovie = (id?: string) =>
  useSWR({ url: `/movie/${id}` }, async ({ url }) => {
    const response = await fetcher<MoviesResponse>({
      description: "Get movie",
      url,
    });
    return response;
  });
