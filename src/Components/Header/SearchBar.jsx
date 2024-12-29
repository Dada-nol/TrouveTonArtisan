import React, { useContext, useState } from "react";
import { ArtisanContext } from "../../context/ArtisanContext";
import SearchLogo from "./SearchLogo";

function SearchBar() {
  const { datas } = useContext(ArtisanContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(datas);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
    filterData(value);
  };

  const filterData = (searchTerm) => {
    const filteredData = datas.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredData);
  };

  return (
    <div
      id="searchbar"
      className="collapse navbar-collapse align-self-start mt-3"
    >
      <form role="search">
        <div className="form-control pt-1 d-flex align-items-center justify-content-start gap-3">
          <SearchLogo></SearchLogo>
          <div>
            <input
              className="border-0"
              type="text"
              placeholder="Rechercher"
              value={searchTerm}
              onChange={handleInputChange}
            ></input>
          </div>
        </div>
        <div>
          <ul>
            {filteredData.map((item) => {
              if (searchTerm.trim() !== "") {
                // version avec dangerousHTML
                /* const bold = item.name.replace(
                new RegExp(searchTerm, "gi"),
                (match) => `<span style="color: black;">${match}</span>`
              );
              return (
                <li key={item.id}>
                  <a
                    href={`/artisan/${item.id}`}
                    dangerouslySetInnerHTML={{
                      __html: `${bold} - ${item.specialty} - ${item.location}`,
                    }}
                  ></a>
                </li> */
                return (
                  <li key={item.id}>
                    <a href={`/artisan/${item.id}`}>
                      {item.name} - {item.specialty} - {item.location} <br />{" "}
                      <br />
                    </a>
                  </li>
                );
              } else return false;
            })}
          </ul>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
