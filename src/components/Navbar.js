import { useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.svg";
import { BookmarkContext } from "../contexts/BookmarkContext";

const Navbar = () => {
  const { recipes } = useContext(BookmarkContext);

  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <NavLink to="/" className="brand">
            <img src={logo} alt="Logo" className="brand-img" />
            gorecipe
          </NavLink>
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink
                to="/"
                activeClassName="selected"
                exact
                className="nav-link"
              >
                Resep
              </NavLink>
            </li>
            <li className="nav-item nav-item-group">
              <NavLink
                to="/bookmark"
                activeClassName="selected"
                className="nav-link"
              >
                Disimpan
              </NavLink>
              <span className="favorite-counter">
                {recipes.length && recipes.length}
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
