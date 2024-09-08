import React from "react";
import { AutoComplete } from "antd";
import type { AutoCompleteProps } from "antd";
import { usePropertySearch } from "../hooks/usePropertySearch";
import { useNavigate } from "react-router-dom";
import { CostCalculationState } from "../sections/CostCalculationV2";

// const autoValue = (str: string) => ({
//   input: address.Results[0].Title,
// });

const SearchInput = () => {
  const navigate = useNavigate();
  const [input, setInput] = React.useState(process.env.REACT_APP_FIXED_ADDRESS ?? "");

  const properties = usePropertySearch(input);
  const options : AutoCompleteProps["options"] = properties.map(property => ({value: property.title}));

  const onSelect = (propertyTitle: string) => {
    const selectedProperty = properties.find(property => property.title === propertyTitle);
    if (selectedProperty === undefined) {
      console.error("Could not match selected property to search property results by title. ", propertyTitle, properties);
      return;
    }
    console.log("Selected property: ", selectedProperty);

    const state : CostCalculationState = { selectedProperty };
    navigate("/costcalculationv2", { state });
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
      placeholder="input here"
    />
  );
};

export default SearchInput;
