import "./SliderManual.css";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

const AutoplayExample = ({ imgSlider }) => {
  const options = {
    type: "loop",
    gap: "1rem",
    autoplay: false,
    pauseOnHover: false,
    resetProgress: false,
    height: "auto",
  };

  return (
    <div className="wrapper">
      <Splide
        options={options}
        aria-labelledby="autoplay-example-heading"
        hasTrack={false}
      >
        <div style={{ position: "relative" }}>
          <SplideTrack>
            {imgSlider.map((slide) => (
              <SplideSlide key={slide.src}>
                <img src={slide.img} alt="img" />
              </SplideSlide>
            ))}
          </SplideTrack>
        </div>

        <div className="splide__progress">
          <div className="splide__progress__bar" />
        </div>
      </Splide>
    </div>
  );
};

export default AutoplayExample;
