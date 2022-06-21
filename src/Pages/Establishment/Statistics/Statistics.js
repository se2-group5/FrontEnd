import React from "react";
import { useParams } from "react-router-dom";

function Statistics() {
  const { name } = useParams();
  return <div>Statistics of {name}</div>;
}

export default Statistics;
