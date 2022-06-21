import React, { useState } from "react";
import { Link, useParams, Outlet } from "react-router-dom";
import Statistics from "./Statistics/Statistics";
import Cookies from "universal-cookie";
import "./Establishment.css";

const cookies = new Cookies();

function Establishment() {
  const { name } = useParams();
  const [outVisible, setOutvisible] = useState(true);

  const sesionValidation = () => {
    if (!cookies.get("name")) {
      setOutvisible(false);
    } else {
      setOutvisible(true);
    }
  };

  return (
    <div className="establishment">
      <div className="container">
        <h3 className="tittle"> {name} </h3>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          laborum placeat delectus ab laboriosam pariatur temporibus distinctio
          tempora excepturi eum.
        </p>
        <Statistics />
        <Link to="report" onClick={() => sesionValidation()}>
          Enviar un reporte
        </Link>
        {outVisible ? <Outlet /> : alert("inicie sesion")}
      </div>
    </div>
  );
}

export default Establishment;
