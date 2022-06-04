import React from "react";
import "./Hero.css";

export const Hero = ({ imgSrc }) => {
  return (
    <div className="hero">
      <img src={imgSrc} alt="coworking" className="hero__image" />
      <h1 className="hero__tittle">¡ Tu Coworking Favorito !</h1>
    </div>
  );
};

export default Hero;
