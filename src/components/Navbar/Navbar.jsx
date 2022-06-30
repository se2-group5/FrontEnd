import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const closeSesion = () => {
  cookies.remove("id", { path: "/" });
  cookies.remove("name", { path: "/" });
  window.location.href = "/";
};

function Navbar() {
  return (
    <div className="navbar__container">
      <nav className="navbar">
        <Link className="navbar__logo" to="/">
          DIG APP
        </Link>
        <ul className="navbar__list">
          {!cookies.get("name") ? (
            <>
              <li className="navbar__item">
                <Link className="navbar__link" to="/establishments">
                  Establecimientos
                </Link>
              </li>
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
            </>
          ) : (
            <>
              <li className="navbar__item">
                <Link className="navbar__link" to="/establishments">
                  {cookies.get("name")}
                </Link>
              </li>
              <li className="navbar__item">
                <span
                  onClick={() => {
                    closeSesion();
                  }}
                  className="navbar__link"
                >
                  Cerrar Sesion
                </span>
              </li>
            </>
          )}
        </ul>
        <button className="navbar__toggle">
          <FontAwesomeIcon icon={faBars} className="navbar__menu" />
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
