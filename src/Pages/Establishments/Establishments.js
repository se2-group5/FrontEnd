import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import axios from "axios";

import img1 from "../../assets/images/image9.jpg";

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
    <div className="establishments">
      <h2 className="ests__tittle">Establecimientos</h2>

      <div className="card">
        {establishments?.map((est) => (
          <div key={est.id}>
            <Card
              id={est.id}
              name={est.name}
              img={img1}
              desc={est.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Establisments;
