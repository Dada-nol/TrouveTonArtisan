import "./Nav.css";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg shadow-sm p-3 ">
      <div className="container d-flex ">
        <div>
          <a className="navbar-brand" href="Accueil">
            <img className="logo" src="Img/Logo.png" alt=""></img>
          </a>
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
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
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
              <span className="icon navbar-toggler-icon"></span>
            </button>
          </div>
        </div>

        <div
          id="searchbar"
          className="collapse navbar-collapse align-self-start"
        >
          <SearchBar></SearchBar>
        </div>
        <div className="collapse navbar-collapse " id="navbarNav">
          <Nav></Nav>
        </div>
      </div>
    </nav>
  );
}

function Nav(props) {
  return (
    <ul className="navbar-nav ms-auto">
      <li className="nav-item mx-0 mx-lg-1">
        <a
          className={`nav-link ${props.Bâtiment} py-3 px-0 px-lg-3`}
          aria-current="page"
          href="Bâtiment"
        >
          Bâtiment
        </a>
      </li>
      <li className="nav-item mx-0 mx-lg-1">
        <a
          className={`nav-link ${props.Service} py-3 px-0 px-lg-3`}
          href="Services"
        >
          Service
        </a>
      </li>
      <li className="nav-item mx-0 mx-lg-1">
        <a
          className={`nav-link ${props.Fabrication} py-3 px-0 px-lg-3`}
          href="Fabrication"
        >
          Fabrication
        </a>
      </li>
      <li className="nav-item mx-0 mx-lg-1">
        <a
          className={`nav-link ${props.Alimentation} py-3 px-0 px-lg-3`}
          href="Alimentation"
        >
          Alimentation
        </a>
      </li>
    </ul>
  );
}

function SearchBar() {
  return (
    <form role="search">
      <input
        className="form-control"
        type="search"
        placeholder="Rechercher"
        aria-label="Search"
      ></input>
      {/* <button className="btn btn-outline-success" type="submit">
        Recherche...
      </button> */}
    </form>
  );
}
