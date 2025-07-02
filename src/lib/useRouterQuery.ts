import { useSearchParams } from "react-router-dom";

export const useRouterQuery = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const routerQuery = Object.fromEntries(searchParams.entries());

  const updateRouterQuery = (
    key: string,
    value: string | number | boolean | null,
  ) => {
    const params = new URLSearchParams(searchParams);

    if (value === null || value === "") {
      params.delete(key);
    } else {
      params.set(key, String(value));
    }

    setSearchParams(params);
  };

  return { routerQuery, updateRouterQuery };
};
