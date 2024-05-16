import React, { useRef } from "react";
import Slider from "react-slick";
import "./Slider.css";

import video from "./../../video/home-video.mp4";
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
    autoplaySpeed: 6960,
    swipeToSlide: true,
    adaptiveHeight: true,
    pauseOnHover: false,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
  };

  return (
    <div className="slider-container">
      <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
        <div className="video-wrapper">
          <div className="video-hidden">
            <video
              className="video-styles"
              src="https://jlr.scene7.com/is/content/jlr/L46025-5MYGL_303103139_DX_LOOP_TALENT_HDH264_6_16x9_carousel"
              autoPlay
              loop
              muted
            />
          </div>
          <div className="slider-text-block">
            <p className="slider-text">embrace the impossible</p>
            <Cnp text="FIND OUT MORE" />
          </div>
        </div>

        <div className="video-wrapper">
          <div className="video-hidden">
            <video className="video-styles" autoPlay loop muted>
              <source src={video} type="video/mp4" />
            </video>
          </div>
          <div className="slider-text-block">
            <p className="slider-text">PIONEERING INNOVATION</p>
            <Cnp text="FIND OUT MORE" />
          </div>
        </div>
      </Slider>
    </div>
  );
}
export default SliderAuto;
