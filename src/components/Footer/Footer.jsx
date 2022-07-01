import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


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
        <nav className="footer__container">
            <h3 className="footer__logo">
                © Copyright 2022
            </h3>
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
                    <Link className="footer__link" to="/NotFound">
                        Donaciones
                    </Link>
                </li>
            </ul>
            <button 
              className="footer__toggle"
              onClick={() => {
                isActive();
              }}
            >
              <FontAwesomeIcon icon={faBars} className="footer__menu" />
            </button>
        </nav>
    </div>
  );
}

export default Footer;