import React, { useEffect } from "react";
import "./Report.css";

function Report() {
  useEffect(() => {}, []);

  return (
    <div className="report">
      <div className="rep__card">
        <hr />
        <h3 className="rep__tittle">Reporte 1</h3>
        <p className="repp__text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium,
          facere.
        </p>
        <hr />
      </div>
      <div className="rep__card">
        <hr />
        <h3 className="rep__tittle">Reporte 1</h3>
        <p className="repp__text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium,
          facere.
        </p>
        <hr />
      </div>

      <button className="rep__button">¡ Realizar un Reporte !</button>
    </div>
  );
}

export default Report;
