import useSWR from "swr";
import { fetcher } from "@/lib";
import { FetcherResponse, MoviesResponse } from "@/types";

export const useQueryMoviesPreview = ({ query }: { query?: string }) =>
  useSWR({ url: "/search/movie", query }, async ({ url, query }) => {
    const response = await fetcher<FetcherResponse<MoviesResponse>>({
      description: "Get movies preview",
      url,
      params: {
        query,
      },
    });
    return response;
  });
