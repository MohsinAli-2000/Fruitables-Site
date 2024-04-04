// import React from "react";
import Slider from "react-slick";
import VegetableCard from "./VegetableCard";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  return (
    <div className="mx-16 text-center">
      <Slider {...settings}>
        <div>
          <VegetableCard />
        </div>
        <div>
          <VegetableCard imageSrc="/potato.jpg" title="Potato" />
        </div>
        <div>
          <VegetableCard imageSrc="/tomato.jpg" title="Tomato" />
        </div>
        <div>
          <VegetableCard imageSrc="/potato.jpg" title="Potato" />
        </div>
        <div>
          <VegetableCard imageSrc="/bell papper.jpg" title="Bell Pepper" />
        </div>
        <div>
          <VegetableCard imageSrc="/tomato.jpg" title="Tomato" />
        </div>
      </Slider>
    </div>
  );
}
