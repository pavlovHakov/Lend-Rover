import React, { useRef } from "react";
import Slider from "react-slick";
import "./Slider.css";
import "./SliderManual.css";

function SliderManual({ img1, img2, img3 }) {
  let sliderRef = useRef(null);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex", flexDirection: "column" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
  };
  return (
    <div className="slider-container">
      <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
        <div className="arrow-hover">
          <img className="slider-img" src={img1} alt="img" />
        </div>
        <div className="arrow-hover">
          <img className="slider-img" src={img2} alt="img" />
        </div>
        <div className="arrow-hover">
          <img className="slider-img" src={img3} alt="img" />
        </div>
      </Slider>
    </div>
  );
}
export default SliderManual;
