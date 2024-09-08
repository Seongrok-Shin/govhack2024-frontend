import React from "react";
import { AutoComplete } from "antd";
import type { AutoCompleteProps } from "antd";
import { usePropertySearch } from "../hooks/usePropertySearch";

// const autoValue = (str: string) => ({
//   input: address.Results[0].Title,
// });

const SearchInput = () => {
  const [input, setInput] = React.useState("");
  const [options, setOptions] = React.useState<AutoCompleteProps["options"]>(
    []
  );
  usePropertySearch(input, (searchResults) => {
    const options = searchResults.map(property => ({value: property.title}));
    setOptions(options);
  });

  const onSelect = (data: string) => {
    console.log("onSelect", data);
  };

  const onChange = (data: string) => {
    setInput(data);
  };

  return (
    <AutoComplete
      className="search-box"
      allowClear
      value={input}
      onChange={onChange}
      options={options}
      style={{ width: 200 }}
      onSelect={onSelect}
      placeholder="input here"
    />
  );
};

export default SearchInput;
