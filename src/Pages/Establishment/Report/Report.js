import React, { useEffect } from "react";
import Cookies from "universal-cookie";
import { useParams } from "react-router-dom";

const cookies = new Cookies();

function Report() {
  const { name } = useParams();

  useEffect(() => {
    if (!cookies.get("name")) {
      window.location.href = "/establishment/:name";
    }
  }, []);

  return <div>Hola,soy un reporte</div>;
}

export default Report;
