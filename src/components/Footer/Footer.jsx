import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__social">
          <span className="footer__text">Nuestras Redes</span>
          <a
            href="https://web.facebook.com/DIG-APP-105427112229134"
            target="_blank"
            className="footer__icon"
          >
            <FaFacebookF className="icon" />
          </a>
          <a href="https://www.instagram.com/dig_app/" className="footer__icon">
            <FaInstagram className="icon" />
          </a>
        </div>

        <ul className="footer__list">
          <li className="footer__item">
            <Link className="footer__link" to="/aboutus">
              Acerca de Nosotros
            </Link>
          </li>
          <li className="footer__item">
            <Link className="footer__link" to="/donations">
              Donaciones
            </Link>
          </li>
          <li className="footer__item"></li>
        </ul>
        <h3 className="footer__logo">© DIG APP</h3>
      </div>
    </div>
  );
}

export default Footer;
