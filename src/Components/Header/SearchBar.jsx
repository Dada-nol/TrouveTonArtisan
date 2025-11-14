import React, { useContext, useState, useRef, useEffect } from "react";
import { ArtisanContext } from "../../context/ArtisanContext";
import SearchLogo from "./SearchLogo";

function SearchBar() {
  const { datas } = useContext(ArtisanContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);

  // Gérer le clic en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
    filterData(value);
  };

  const filterData = (searchTerm) => {
    if (searchTerm.trim() === "") {
      setFilteredData([]);
      setShowResults(false);
      return;
    }

    const filtered = datas.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
    setShowResults(true);
  };

  const handleResultClick = () => {
    setShowResults(false);
    setSearchTerm("");
    setFilteredData([]);
  };

  return (
    <div
      ref={searchRef}
      id="searchbar"
      className="collapse navbar-collapse align-self-start mt-3"
    >
      <form role="search" onSubmit={(e) => e.preventDefault()}>
        <div className="form-control pt-1 d-flex align-items-center justify-content-start gap-3">
          <SearchLogo />
          <div>
            <input
              className="border-0"
              type="text"
              placeholder="Rechercher"
              value={searchTerm}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Résultats en position absolue pour ne pas agrandir la barre */}
        {showResults && filteredData.length > 0 && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              backgroundColor: "white",
              border: "1px solid #ddd",
              borderRadius: "4px",
              marginTop: "4px",
              maxHeight: "400px",
              overflowY: "auto",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              zIndex: 1000,
            }}
          >
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {filteredData.map((item) => (
                <li
                  key={item.id}
                  style={{
                    borderBottom: "1px solid #f0f0f0",
                  }}
                >
                  <a
                    href={`/artisan/${item.id}`}
                    onClick={handleResultClick}
                    style={{
                      display: "block",
                      padding: "12px 16px",
                      textDecoration: "none",
                      color: "#333",
                      transition: "background-color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#f5f5f5";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent";
                    }}
                  >
                    <strong>{item.name}</strong> - {item.specialty} -{" "}
                    {item.location}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </form>
    </div>
  );
}

export default SearchBar;
