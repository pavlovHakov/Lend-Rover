import { RotatingLines } from "react-loader-spinner";

import AuthorizationModal from "../components/authorization-modal/AuthorizationModal";
import BuildsModal from "../components/builds-modal/BuildsModal";
import Footer from "../components/footer/Footer";
import Header from "./../components/header/Header";
import Home from "./../pages/Home/Home";
import Purchase from "./../pages/purchase/Purchase";
import Vehicles from "../pages/vehicles/Vehicles";
import Explore from "./../pages/explore/Explore";
import ErrorPages from "../pages/errorPages/ErrorPages";
import "./../styles/main.css";
import "./App.css";
import { useState } from "react";
// import { Routes, Route, Link } from "react-router-dom";
import Owners from "../pages/owners/Owners";
import { useEffect } from "react";
import RoutesWebsite from "../components/routes/RoutesWebsite";

const App = () => {
  const [isRetailers, setIsRetailers] = useState(true);
  const [isBuilds, setIsBuilds] = useState(true);
  const [elemVisible, setElemVisible] = useState(true);

  window.addEventListener("load", function () {
    setElemVisible(false);
  });

  // useEffect(() => {}, []);

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

      {/* Routing */}

      <RoutesWebsite />

      <Header
        toggleRetailers={() => toggleRetailers()}
        isRetailers={isRetailers}
        toggleBuilds={() => toggleBuilds()}
        isBuilds={isBuilds}
      />

      <AuthorizationModal
        toggleRetailers={() => toggleRetailers()}
        isRetailers={isRetailers}
      />

      <BuildsModal toggleBuilds={() => toggleBuilds()} isBuilds={isBuilds} />

      <Footer />
    </div>
  );
};

export default App;
