import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import axios from "axios";
import img1 from "../../assets/images/image9.jpg";
import "./Establishments.css";

const baseURL = "https://backenddig.herokuapp.com/api/businesses/";

function Establisments() {
  const [establishments, setEstablishments] = useState();

  const getStablishments = async () => {
    await axios
      .get(baseURL)
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        setEstablishments(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getStablishments();
  }, []);

  return (
    <div className="establishments">
      <h2 className="ests__tittle">Establecimientos</h2>

      <div className="card">
        {establishments?.map((est) => (
          <div key={est.id}>
            <Card
              id={est.id}
              name={est.name}
              img={est.cover_picture}
              desc={est.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Establisments;
