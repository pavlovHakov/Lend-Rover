import { RotatingLines } from "react-loader-spinner";

import AuthorizationModal from "../components/authorization-modal/AuthorizationModal";
import BuildsModal from "../components/builds-modal/BuildsModal";
import Footer from "../components/footer/Footer";
import Header from "./../components/header/Header";
import "./../styles/main.css";
import "./App.css";
import { useState } from "react";
import RoutesWebsite from "../components/routes/RoutesWebsite";

const App = () => {
  const [isRetailers, setIsRetailers] = useState(true);
  const [isBuilds, setIsBuilds] = useState(true);
  const [elemVisible, setElemVisible] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);

  window.addEventListener("load", function () {
    setElemVisible(false);
  });

  const toggleRetailers = () => {
    setIsRetailers((isRetailers) => !isRetailers);
  };

  const toggleBuilds = () => {
    setIsBuilds((isBuilds) => !isBuilds);
  };

  return (
    <div className="wrapper-app">
      {/* Spinner */}

      <div className={elemVisible ? "wrapperSpinner" : "hideSpinner"}>
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="grey"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
        />
      </div>

      <Header
        toggleRetailers={() => toggleRetailers()}
        isRetailers={isRetailers}
        toggleBuilds={() => toggleBuilds()}
        isBuilds={isBuilds}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />

      <AuthorizationModal
        toggleRetailers={() => toggleRetailers()}
        isRetailers={isRetailers}
      />

      <BuildsModal toggleBuilds={() => toggleBuilds()} isBuilds={isBuilds} />

      {/* Routing */}
      <RoutesWebsite />

      <Footer />
    </div>
  );
};

export default App;
