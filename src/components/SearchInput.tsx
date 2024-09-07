import React from "react";
import { AutoComplete } from "antd";
import type { AutoCompleteProps } from "antd";
import address from "../data/address.json";

// const autoValue = (str: string) => ({
//   input: address.Results[0].Title,
// });

const SearchInput = () => {
  const [input, setInput] = React.useState("");
  const [options, setOptions] = React.useState<AutoCompleteProps["options"]>(
    []
  );

  const getPanelValue = (searchText: string) =>
    !searchText ? [] : address.Results.map((result) => ({ value: result.Title }));

  const onSelect = (data: string) => {
    console.log("onSelect", data);
  };

  const onChange = (data: string) => {
    setInput(data);
  };

  return (
    <AutoComplete
      allowClear
      value={input}
      onChange={onChange}
      options={options}
      style={{ width: 200 }}
      onSelect={onSelect}
      onSearch={(text) => setOptions(getPanelValue(text))}
      placeholder="input here"
    />
  );
};

export default SearchInput;
