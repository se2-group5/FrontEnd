import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

function Card({ name, img, text }) {
  return (
    <div className="card text-center ">
      <div className="card-body ">
        <img src={img} alt="" className="card-img-top" />
        <h4 className="card-tittle">{name}</h4>
        <p className="card-text text-secondary">{text}</p>
        <Link
          to={`/establishment/${name}`}
          className="btn btn-outline-secondary"
        >
          Ir al Establecimiento
        </Link>
      </div>
    </div>
  );
}

export default Card;
