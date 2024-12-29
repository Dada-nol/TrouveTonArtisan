import { Link } from "react-router-dom";

const NavBar = () => {
  return (
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
          <Link className={`nav-link  py-3 px-0 px-lg-3`} to="/Fabrication">
            Fabrication
          </Link>
        </li>
        <li className="nav-item mx-0 mx-lg-1">
          <Link className={`nav-link  py-3 px-0 px-lg-3`} to="/Alimentation">
            Alimentation
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
