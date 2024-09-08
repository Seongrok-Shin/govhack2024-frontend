import { useEffect, useState } from "react";
import { SearchPropertyResultDto } from "../_generated-openapi/data-contracts";
import { searchClient } from "../api/api";
import { debounce } from "lodash";

export const usePropertySearch = (address: string) => {
  const [properties, setProperties] = useState<SearchPropertyResultDto[]>([]);

  useEffect(() => {
    const fn = (async() => {
      try {
        const properties = await (await searchClient.searchList({ address: address})).data;

        // TODO temporary fix until unit properties are supported on BE
        const noFlats = properties.filter(property => !property.title?.includes("/"));

        setProperties(noFlats);
      } catch (err) {
        console.error("Failed properties search, error: ", err);
      }
    });
    const debounced = debounce(fn, 500);
    debounced();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  return properties;
}