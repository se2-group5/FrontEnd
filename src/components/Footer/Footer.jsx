import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
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
    <div className="footer">
      <div className="footer__container">
        <h3 className="footer__logo">© Copyright 2022</h3>
        <ul className="footer__list">
          <li className="footer__item">
            <Link className="footer__link" to="/aboutus">
              Acerca de Nosotros
            </Link>
          </li>
          <li className="footer__item">
            <Link className="footer__link" to="/NotFound">
              Redes Sociales
            </Link>
          </li>
          <li className="footer__item">
            <Link className="footer__link" to="/donations">
              Donaciones
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer__container2">
        <h3 className="footer__logo__2">DIG APP</h3>
      </div>
    </div>
  );
}

export default Footer;
