import { useEffect } from "react";
import { SearchPropertyResultDto } from "../_generated-openapi/data-contracts";
import { searchClient } from "../api/api";
import { debounce } from "lodash";

type SearchResultsCallback = (results: SearchPropertyResultDto[]) => void;

export const usePropertySearch = (input: string, callback: SearchResultsCallback) => {
  useEffect(() => {
    const fn = (async() => {
      try {
        const properties = await searchClient.searchList({ address: input});
        callback(properties.data);
      } catch (err) {
        console.error("Failed properties search, error: ", err);
      }
    });
    const debounced = debounce(fn, 500);
    debounced();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input])
}