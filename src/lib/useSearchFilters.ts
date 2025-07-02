import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";

export type SearchFilters = {
  include_adult?: boolean;
  language?: string;
  primary_release_year?: number;
  page?: number;
  region?: string;
  year?: number;
};

export const useSearchFilters = (): SearchFilters => {
  const [searchParams] = useSearchParams();

  return useMemo(
    () => ({
      include_adult: searchParams.get("include_adult") === "true",
      language: searchParams.get("language") || "en-US",
      primary_release_year:
        parseInt(searchParams.get("primary_release_year") || "", 10) ||
        undefined,
      page: parseInt(searchParams.get("page") || "", 10) || 1,
      region: searchParams.get("region") || "",
      year: parseInt(searchParams.get("year") || "", 10) || undefined,
    }),
    [searchParams],
  );
};
