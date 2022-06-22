import React, { useEffect, useState } from "react";
import { Link, useParams, Outlet } from "react-router-dom";
import Statistics from "./Statistics/Statistics";
import Cookies from "universal-cookie";
import "./Establishment.css";
import axios from "axios";

const cookies = new Cookies();

function Establishment() {
  const { id } = useParams();
  const [outVisible, setOutvisible] = useState(true);
  const [est, setEst] = useState();

  const baseURL = `http://localhost:8000/api/businesses/${id}`;

  const data = async () => {
    await axios.get(baseURL).then((response) => {
      setEst(response.data);
    });
  };

  useEffect(() => {
    data();
  });

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
        <h3 className="tittle"> {est?.name} </h3>
        <p className="text"> {est?.description} </p>
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
