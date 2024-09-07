import React from "react";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";

const SearchForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <SearchInput />
      <SearchButton />
    </form>
  );
};

export default SearchForm;