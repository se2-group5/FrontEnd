import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Statistics from "./Statistics/Statistics";
import Report from "./Report/Report";
import Cookies from "universal-cookie";
import "./Establishment.css";
import axios from "axios";
import img1 from "../../assets/images/image9.jpg";

const cookies = new Cookies();

function Establishment() {
  const { id } = useParams();
  const [outVisible, setOutvisible] = useState(false);
  const [est, setEst] = useState();

  const baseURL = `http://localhost:8000/api/businesses/${id}`;

  const data = async () => {
    await axios.get(baseURL).then((response) => {
      setEst(response.data);
    });
  };

  useEffect(() => {
    data();
    sesionValidation();
  }, []);

  const sesionValidation = () => {
    if (!cookies.get("name")) {
      setOutvisible(false);
    } else {
      setOutvisible(true);
    }
  };

  return (
    <div className="establishment">
      <div className="est__container">
        <img src={img1} className="est__img" alt="cover-img" />
        <h1 className="est__tittle"> {est?.name} </h1>
        <div className="est__desc">
          <h3 className="est__subtittle  cursive">Descripción</h3>
          <p className="est__text"> {est?.description} </p>
          <h3 className="est__subtittle cursive">Menú</h3>
          <p className="est__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sit
            doloribus voluptatibus! Et eius, officiis, in earum at optio aliquam
            voluptate consequatur rem iste consectetur cumque similique minus
            dolores reiciendis accusamus amet placeat tempore veniam.
            Dignissimos dicta, doloribus magnam suscipit molestiae totam rem
            quaerat nesciunt! Atque mollitia nam blanditiis amet.
          </p>
        </div>
        <div className="est__est">
          <h3 className="est_subtittle cursive"> Estadisticas</h3>
          <Statistics est={est} />
        </div>
        <div className="est__rep">
          <h3 className="est_subtittle cursive">Reportes</h3>
          {outVisible ? (
            <Report />
          ) : (
            <span className="est__button">
              Inicie sesion para realizar un reporte
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Establishment;
