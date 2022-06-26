import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

function Card({ id, name, img, desc }) {
  return (
    <Link className="card__container" to={`/establishment/${id}`}>
      <div className="image__card">
        <img src={img} alt="img__card" />
      </div>
      <div className="card__desc">
        <h3 className="tittle">{name}</h3>
        <p>{desc}</p>
      </div>
    </Link>
  );
}

export default Card;
