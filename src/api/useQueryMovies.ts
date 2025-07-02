import useSWR from "swr";
import { fetcher } from "@/lib";
import type { SearchFilters } from "@/lib";
import { FetcherResponse, MoviesResponse } from "@/types";

export const useQueryMovies = (params?: SearchFilters) =>
  useSWR({ url: "/discover/movie", params }, async ({ url, params }) => {
    const response = await fetcher<FetcherResponse<MoviesResponse>>({
      description: "Get movies",
      url,
      params,
    });
    return response;
  });
