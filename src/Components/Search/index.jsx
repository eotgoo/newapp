import React from "react";

const Search = ({ handleChange }) => {
  return (
    <div>
      <input placeholder="search" onChange={handleChange} />
    </div>
  );
};

export default Search;
