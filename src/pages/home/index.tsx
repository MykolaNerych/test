import sx from "./Home.module.scss";

import { useQueryMovies } from "@/api/useQueryMovies";

import {
  Header,
  FiltersSection,
  ProgressBar,
  MoviesGrid,
  SkeletonGrid,
  Loading,
  EmptyState,
} from "@/components";

import { useSearchFilters } from "@/lib";

export const Home = () => {
  const filters = useSearchFilters();

  const {
    data,
    isLoading: isFirstRequest,
    isValidating: isRequest,
  } = useQueryMovies(filters);

  const isShowEmptyState =
    !isFirstRequest && !isRequest && data?.results?.length === 0;
  const isShowSkeleton = isFirstRequest && !data;
  const isLoading = !data && !isRequest;
  const resultCount = data?.results?.length;

  return (
    <div className={sx.container}>
      <Header />

      <FiltersSection />

      <section className={sx.resultsSection}>
        <ProgressBar isRequest={isRequest} />

        <div className={sx.resultsHeader}>
          <h2 className={sx.resultsTitle}>Search Results</h2>
          <span className={sx.resultsCount}>{resultCount} movies found</span>
        </div>

        <MoviesGrid movies={data?.results} />

        <SkeletonGrid isShowSkeleton={isShowSkeleton} />

        <Loading isLoading={isLoading} />

        <EmptyState isShowEmptyState={isShowEmptyState} />
      </section>
    </div>
  );
};
