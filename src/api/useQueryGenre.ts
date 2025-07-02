import useSWR from "swr";
import { fetcher } from "@/lib";
import { GenreResponse } from "@/types";

export const useQueryGenre = () =>
  useSWR({ url: "/genre/movie/list" }, async ({ url }) => {
    const response = await fetcher<GenreResponse>({
      description: "Get genre",
      url,
    });
    return response;
  });
