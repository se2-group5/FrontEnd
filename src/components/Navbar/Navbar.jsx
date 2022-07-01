import React from "react";
import { useState, useEffect } from "react";
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
  const [menuActive, setMenuactive] = useState(false);

  const isActive = () => {
    if (menuActive) {
      setMenuactive(false);
    } else {
      setMenuactive(true);
    }
  };

  useEffect(() => {
    setMenuactive(false);
  }, []);

  return (
    <div className="navbar">
      <nav className="navbar__container">
        <Link className="navbar__logo" to="/">
          DIG APP
        </Link>
        <ul
          className={
            menuActive ? "navbar__list" : "navbar__list navbar__list__hide"
          }
        >
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
        <button
          className="navbar__toggle"
          onClick={() => {
            isActive();
          }}
        >
          <FontAwesomeIcon icon={faBars} className="navbar__menu" />
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
