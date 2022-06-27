import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Report.css";

function Report() {
  const { id } = useParams();
  const baseURL = "http://localhost:8000/api/reports";
  const [reports, setReports] = useState([]);

  const data = async () => {
    await axios
      .get(baseURL)
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        const reps = [];
        response.map((rep) => {
          if (rep.business_id === parseInt(id)) {
            reps.push(rep);
          }
        });
        setReports(reps);
      });
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <div className="report">
      {reports?.map((rep) => (
        <div className="report__container">
          <hr />
          <div className="report__info">
            <div className="rep__item">
              <h3>Usuario</h3>
              <span>{rep.user_id}</span>
            </div>
            <div className="rep__item">
              <h3>Calificación</h3>
              <span>{rep.rating_business}</span>
            </div>
            <div className="rep__item">
              <h3>Internet</h3>
              <span>{rep.internet_status}</span>
            </div>
            <div className="rep__item">
              <h3>Ocupación</h3>
              <span>{rep.occupation_status}</span>
            </div>
          </div>
          <div className="report__comment">
            <div className="rep__item">
              <h3>Comentario</h3>
              <span>{rep.comments}</span>
            </div>
          </div>
          <hr />
        </div>
      ))}
      <button className="rep__button">¡ Realizar un Reporte !</button>
    </div>
  );
}

export default Report;
