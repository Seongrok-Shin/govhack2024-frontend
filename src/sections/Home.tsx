import React from "react";
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <div className="home">
      <div className="body">
        <h1 className="heading1">
          Power with your home Solar,
          <br />
          Save for 25 years.
        </h1>
      </div>
      <span className="span"/>
      <SearchForm />
    </div>
  );
};

export default Home;
