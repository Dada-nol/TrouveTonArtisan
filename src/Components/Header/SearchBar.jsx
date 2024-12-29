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
              return (
                <li key={item.id}>
                  {item.name} - {item.specialty} - {item.location} <br /> <br />
                </li>
              );
            } else return false;
          })}
        </ul>
      </div>
    </form>
  );
}

export default SearchBar;
