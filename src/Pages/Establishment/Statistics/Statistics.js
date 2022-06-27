import React from "react";
import "./Statistics.css";

function Statistics({ est }) {
  return (
    <div className="statistics">
      <div className="stat__item">
        <h3>Calificación</h3>
        <span>{est?.rating}</span>
      </div>
      <div className="stat__item">
        <h3>Internet</h3>
        <span>{est?.internet_quality}</span>
      </div>
      <div className="stat__item">
        <h3>Capacidad</h3>
        <span>{est?.capacity}</span>
      </div>
    </div>
  );
}

export default Statistics;
