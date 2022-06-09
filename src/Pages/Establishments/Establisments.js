import React, { useEffect } from "react";
import Cookies from "universal-cookie";
import "./Establisments.css";

const cookies = new Cookies();

function Establisments() {
  useEffect(() => {
    if (!cookies.get("name")) {
      window.location.href = "/";
    }
  });

  return <div>Establisments</div>;
}

export default Establisments;
