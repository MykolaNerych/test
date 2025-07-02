import { useState } from "react";
import sx from "./FiltersSection.module.scss";
import { useRouterQuery } from "@/lib";

import { debounce } from "lodash";

import { Input, Select, Checkbox, Search } from "@/components";
import type { SelectOption } from "@/components";

export const FiltersSection = () => {
  const { routerQuery, updateRouterQuery } = useRouterQuery();
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters((prev) => !prev);
  };

  const languageSelectOptions: Array<SelectOption> = [
    { title: "English (US)", value: "en-US  " },
    { title: "English (UK)", value: "en-GB" },
    { title: "Spanish", value: "es-ES" },
    { title: "French", value: "fr-FR" },
    { title: "German", value: "de-DE" },
    { title: "Italian", value: "it-IT" },
    { title: "Japanese", value: "ja-JP" },
    { title: "Korean", value: "ko-KR" },
    { title: "Chinese", value: "zh-CN" },
  ];

  const regionSelectOptions: Array<SelectOption> = [
    { title: "All Regions", value: "" },
    { title: "United States", value: "US" },
    { title: "United Kingdom", value: "GB" },
    { title: "Canada", value: "CA" },
    { title: "Australia", value: "AU" },
    { title: "Germany", value: "DE" },
    { title: "France", value: "FR" },
    { title: "Spain", value: "ES" },
    { title: "Italy", value: "IT" },
    { title: "Japan", value: "JP" },
    { title: "South Korea", value: "KR" },
  ];

  const setLanguage = (value: string) => {
    updateRouterQuery("language", value);
  };

  const setReleaseYear = (value: string) => {
    updateRouterQuery("primary_release_year", value);
  };
  const setYear = (() => {
    const debounced = debounce((value: string) => {
      updateRouterQuery("year", value);
    }, 500);

    return (value: string) => {
      debounced(value);
    };
  })();

  const setRegion = (value: string) => {
    updateRouterQuery("region", value);
  };

  const setPage = (value: string) => {
    updateRouterQuery("page", value);
  };

  const setAdult = (value: boolean) => {
    updateRouterQuery("include_adult", value);
  };

  return (
    <div className={sx.searchSection}>
      <Search />
      {/* Advanced Filters */}
      <div className={sx.advancedFilters}>
        <button className={sx.filtersToggle} onClick={toggleFilters}>
          {showFilters
            ? "🔼 Hide Advanced Options"
            : "🔽 Advanced Search Options"}
        </button>

        {showFilters && (
          <div className={sx.filtersContent}>
            <Select
              label="Language"
              options={languageSelectOptions}
              onChange={setLanguage}
              value={routerQuery?.language}
            />

            <Input
              label="Release Year"
              placeholder="e.g. 2024"
              min="1900"
              max="2030"
              type="number"
              onChange={setReleaseYear}
              defaultValue={routerQuery?.primary_release_year}
            />

            <Input
              label="Year"
              placeholder="e.g. 2024"
              min="1900"
              max="2030"
              type="number"
              onChange={setYear}
              defaultValue={routerQuery?.year}
            />

            <Select
              label="Region"
              options={regionSelectOptions}
              onChange={setRegion}
              value={routerQuery?.region}
            />

            <Input
              label="Page"
              placeholder="1"
              min="1"
              max="1000"
              type="number"
              defaultValue={routerQuery?.page || "1"}
              onChange={setPage}
            />

            <Checkbox
              title="Content Filter"
              label="Include Adult Content"
              checked={routerQuery?.include_adult === "true"}
              onChange={setAdult}
            />
          </div>
        )}
      </div>
    </div>
  );
};
