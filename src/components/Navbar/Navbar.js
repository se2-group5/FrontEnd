import React from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link className="navbar__logo" to="/">
        DIG APP
      </Link>
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link className="navbar__link" to="/login">
            Ingresar
          </Link>
        </li>
        <li className="navbar__item">
          <Link className="navbar__link" to="/signup">
            Registrarse
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
