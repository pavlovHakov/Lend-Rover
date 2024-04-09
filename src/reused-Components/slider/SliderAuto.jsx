import React, { useRef } from "react";
import Slider from "react-slick";
import "./Slider.css";

import img_1 from "./../../img/slider-auto/img-1.png";
import img_2 from "./../../img/slider-auto/img-2.png";
import Cnp from "../cnp/Cnp";

function SliderAuto() {
  let sliderRef = useRef(null);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    swipeToSlide: true,
    adaptiveHeight: true,
    pauseOnHover: false,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
  };
  return (
    <div className="slider-container">
      <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
        <div>
          <img className="slider-img" src={img_1} alt="img" />

          <div className="slider-text-block">
            <p className="slider-text">embrace the impossible</p>
            <div className="slider-block-zero"></div>
          </div>
        </div>

        <div>
          <img className="slider-img" src={img_2} alt="img" />
          <div className="slider-text-block">
            <p className="slider-text">embrace the impossible</p>
            <Cnp text="FIND OUT MORE" />
          </div>
        </div>
      </Slider>
    </div>
  );
}
export default SliderAuto;
