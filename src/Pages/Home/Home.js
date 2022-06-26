import React from "react";
import Hero from "./Hero/Hero";
import Slider from "./Slider/Slider";
import bg1 from "../../assets/images/image5.jpg";
import img1 from "../../assets/images/bg-landing.jpg";
import img2 from "../../assets/images/image9.jpg";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Hero className="hero__section" imgSrc={bg1} />
      <div className="slider__section1">
        <Slider
          imageSrc={img1}
          tittle="Coworkings"
          subtittle="¡Coworkings a tu necesida y gusto!"
        />
      </div>
      <div className="slider__section2">
        <Slider
          imageSrc={img2}
          tittle="Cafes"
          subtittle="¡Cafes de tu agrado!"
          flipped={true}
        />
      </div>
    </div>
  );
}

export default Home;
