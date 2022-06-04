import React from "react";
import Hero from "./Hero/Hero";
import Slider from "./Slider/Slider";
import bg1 from "../../assets/images/bg-landing.jpg";
import img1 from "../../assets/images/image1.jpg";
import img2 from "../../assets/images/image2.jpg";

function Home() {
  return (
    <div className="home">
      <Hero imgSrc={bg1} />
      <Slider
        imageSrc={img1}
        tittle="Coworkings"
        subtittle="¡Coworkings a tu necesida y gusto!"
      />
      <Slider
        imageSrc={img2}
        tittle="Cafes"
        subtittle="¡Cafes de tu agrado!"
        flipped={true}
      />
    </div>
  );
}

export default Home;
