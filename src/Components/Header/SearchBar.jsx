import React from "react";
import SearchLogo from "./SearchLogo";

function SearchBar({ query, setQuery }) {
  return (
    <form role="search">
      <div className="form-control pt-1 d-flex align-items-center justify-content-start gap-3">
        <SearchLogo></SearchLogo>
        <div>
          <input
            className="border-0"
            type="text"
            placeholder="Rechercher"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          ></input>
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
