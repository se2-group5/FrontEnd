import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import axios from "axios";
import "./Establishments.css";

const baseURL = "http://localhost:8000/api/businesses";

function Establisments() {
  const [establishments, setEstablishments] = useState();

  const getStablishments = async () => {
    const res = await axios.get(baseURL);
    const response = res.data;
    setEstablishments(response);
  };

  useEffect(() => {
    getStablishments();
  }, []);

  return (
    <div className="establishments container text-center justify-content-center">
      <h2>Establecimientos</h2>
      <div className="container d-flex justify-content-center">
        <div className="row">
          {establishments?.map((est) => (
            <div className="col-md-4" key={est.id}>
              <Card
                id={est.id}
                name={est.name}
                img={est.img}
                desc={est.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Establisments;
