import sx from "./Search.module.scss";
import { useMemo } from "react";
import { useRouterQuery } from "@/lib";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";
import { useQueryMoviesPreview } from "@/api/useQueryMoviesPreview";
import { useQueryGenre } from "@/api/useQueryGenre";

export const Search = () => {
  const navigate = useNavigate();
  const { routerQuery, updateRouterQuery } = useRouterQuery();

  const query = routerQuery?.query;

  const debouncedUpdateQuery = useMemo(
    () => debounce((newQuery) => updateRouterQuery("query", newQuery), 400),
    [updateRouterQuery],
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedUpdateQuery(e.target.value);
  };

  const { data } = useQueryMoviesPreview({ query });

  const { data: genre } = useQueryGenre();
  const getGenre = (ids?: number[]) => {
    const result = ids
      ?.map((id) => genre?.genres.find((item) => item.id === id)?.name)
      .filter(Boolean);
    return result?.join(", ");
  };

  const handleSelect = (id: string) => {
    navigate(`/film/${id}`);
  };

  return (
    <div className={sx.searchContainer}>
      <input
        type="text"
        className={sx.searchInput}
        placeholder="Search for movies..."
        id="movieSearch"
        defaultValue={query}
        onChange={handleChange}
      />

      {query && (
        <div className={sx.autocompleteDropdown}>
          {data?.results?.map((value) => (
            <div
              key={value?.id}
              className={sx.autocompleteItem}
              onClick={() => handleSelect(value?.id)}
            >
              <div className={sx.autocompletePoster}></div>
              <div className={sx.autocompleteInfo}>
                <h4>{value?.title}</h4>
                <p>
                  {value?.release_date} • {getGenre(value?.genre_ids)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
