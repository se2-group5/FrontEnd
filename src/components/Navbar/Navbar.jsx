import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Cookies from "universal-cookie";
import "./Navbar.css";

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
        <Link
          className="navbar__logo"
          to="/"
          onClick={() => {
            setMenuactive(false);
          }}
        >
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
                <Link
                  className="navbar__link"
                  to="/establishments"
                  onClick={() => {
                    setMenuactive(false);
                  }}
                >
                  Establecimientos
                </Link>
              </li>
              <li className="navbar__item">
                <Link
                  className="navbar__link"
                  to="/login"
                  onClick={() => {
                    setMenuactive(false);
                  }}
                >
                  Ingresar
                </Link>
              </li>
              <li className="navbar__item">
                <Link
                  className="navbar__link"
                  to="/signup"
                  onClick={() => {
                    setMenuactive(false);
                  }}
                >
                  Registrarse
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="navbar__item">
                <Link
                  className="navbar__link"
                  to="/establishments"
                  onClick={() => {
                    setMenuactive(false);
                  }}
                >
                  Establecimientos
                </Link>
              </li>
              <li className="navbar__item">
                <Link
                  className="navbar__link"
                  to="/establishments"
                  onClick={() => {
                    setMenuactive(false);
                  }}
                >
                  {cookies.get("name")}
                </Link>
              </li>
              <li className="navbar__item">
                <span
                  onClick={() => {
                    closeSesion();
                    setMenuactive(false);
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
