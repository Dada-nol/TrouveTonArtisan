import { Link } from "react-router-dom";
import "../../css/Nav.css";
import NavBar from "./NavBar";
import NavButton from "./NavButton";
import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";

export default function Nav() {
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
            <SearchButton></SearchButton>
            <NavButton></NavButton>
          </div>

          <SearchBar></SearchBar>
          <NavBar></NavBar>
        </div>
      </nav>
    </header>
  );
}
