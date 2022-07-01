import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import "./Footer.css";

function Footer() {
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
            <Link className="footer__link" to="/donations">
              Donaciones
            </Link>
          </li>
          <li className="footer__item">
            <Link className="footer__link" to="/donations">
              Privacidad
            </Link>
          </li>
        </ul>
        <div className="footer__social">
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
      </div>
      <div className="footer__container2">
        <h3 className="footer__logo__2">DIG APP</h3>
      </div>
    </div>
  );
}

export default Footer;
