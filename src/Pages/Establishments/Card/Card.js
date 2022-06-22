import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

function Card({ id, name, img, desc }) {
  return (
    <div className="card text-center ">
      <div className="card-body ">
        <img src={img} alt="" className="card-img-top" />
        <h4 className="card-tittle">{name}</h4>
        <p className="card-text text-secondary">{desc}</p>
        <Link to={`/establishment/${id}`} className="btn btn-outline-secondary">
          Ir al Establecimiento
        </Link>
      </div>
    </div>
  );
}

export default Card;
