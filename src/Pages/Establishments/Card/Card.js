import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

function Card({ id, name, img, desc }) {
  return (
    <div className="card">
      <Link className="card__link" to={`/establishment/${id}`}>
        <div className="card__container">
          <div className="image__card">
            <img src={img} alt="img__card" />
          </div>
          <div className="card__desc">
            <p>{desc}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
