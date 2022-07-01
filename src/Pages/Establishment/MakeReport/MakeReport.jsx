import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import "./MakeReport.css";

const cookies = new Cookies();
const baseURL = "https://backenddig.herokuapp.com/api/reports/";

function MakeReport() {
  const { id } = useParams();

  const postReport = async () => {
    /*    const report = [
      {
        rating_business,
        internet_status,
        occupation_status,
        comments,
        report_support: 0,
        business_id: parseInt(id),
        user_id: cookies.get("id"),
      },
    ]; */

    axios({
      method: "post",
      url: baseURL,
      data: {
        rating_business,
        internet_status,
        occupation_status,
        comments,
        report_support: 0,
        business_id: parseInt(id),
        user_id: cookies.get("id"),
      },
    })
      .then(() => {
        window.location.href = `/establishment/${id}`;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [rating_business, setRating_business] = useState("");
  const [internet_status, setInternet_status] = useState("");
  const [occupation_status, setOccupation_status] = useState("");
  const [comments, setComments] = useState("");

  function handleChange(name, value) {
    if (name === "rating_business") {
      setRating_business(value);
    } else if (name === "internet_status") {
      setInternet_status(value);
    } else if (name === "occupation_status") {
      setOccupation_status(value);
    } else if (name === "comments") {
      setComments(value);
    }
  }

  return (
    <div className="makeReport">
      <h3 className="make__tittle">Reporta</h3>
      <div className="make__form__container">
        <form className="make__form">
          <input
            type="number"
            placeholder="Calificación del lugar"
            className="make__input"
            name="rating_business"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
          <input
            type="number"
            placeholder="Velocidad Internet"
            className="make__input"
            name="internet_status"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
          <input
            type="number"
            placeholder="Ocupación"
            className="make__input"
            name="occupation_status"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
          <input
            type="textarea"
            placeholder="Comentarios"
            className="make__input make__text__area"
            name="comments"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </form>
      </div>
      <button
        className="make__btn"
        onClick={() => {
          postReport();
        }}
      >
        Reportar
      </button>
    </div>
  );
}

export default MakeReport;
