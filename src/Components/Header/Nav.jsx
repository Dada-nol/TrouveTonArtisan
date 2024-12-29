import { Link } from "react-router-dom";
import "../../css/Nav.css";
import SearchBar from "./SearchBar";

export default function NavBar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg shadow-sm p-0">
        <div className="container d-flex ">
          <div>
            <Link to="/" className="navbar-brand">
              <img className="logo" src="/Img/Logo.png" alt=""></img>
            </Link>
          </div>

          <div className="row">
            <div className="col">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#searchbar"
                aria-controls="searchbar"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </button>
            </div>
            <div className="col">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className=" navbar-toggler-icon"></span>
              </button>
            </div>
          </div>

          <div
            id="searchbar"
            className="collapse navbar-collapse align-self-start mt-3"
          >
            <SearchBar></SearchBar>
          </div>
          <div
            className="collapse navbar-collapse align-self-center mt-5"
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-0 mx-lg-1">
                <Link
                  className={`nav-link  py-3 px-0 px-lg-3`}
                  aria-current="page"
                  to="/Bâtiment"
                >
                  Bâtiment
                </Link>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <Link className={`nav-link py-3 px-0 px-lg-3`} to="/Services">
                  Services
                </Link>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <Link
                  className={`nav-link  py-3 px-0 px-lg-3`}
                  to="/Fabrication"
                >
                  Fabrication
                </Link>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <Link
                  className={`nav-link  py-3 px-0 px-lg-3`}
                  to="/Alimentation"
                >
                  Alimentation
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
