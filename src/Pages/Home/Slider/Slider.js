import React from "react";
import "./Slider.css";

function Slider({ imageSrc, tittle, subtittle, flipped }) {
  const renderContent = () => {
    if (!flipped) {
      return (
        <>
          <img src={imageSrc} alt="coworking" className="slider__image" />
          <div className="slider__content">
            <h1 className="slider__tittle">{tittle}</h1>
            <p className="slider__subtittle">{subtittle}</p>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="slider__content">
            <h1 className="slider__tittle">{tittle}</h1>
            <p className="slider__subtittle">{subtittle}</p>
          </div>
          <img src={imageSrc} alt="coworking" className="slider__image" />
        </>
      );
    }
  };

  return <div className="slider">{renderContent()}</div>;
}

export default Slider;
