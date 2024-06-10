
import AuthorizationModal from "../components/authorization-modal/AuthorizationModal";
import BuildsModal from "../components/builds-modal/BuildsModal";
import Footer from "../components/footer/Footer";
import Header from "./../components/header/Header";
import "./../styles/main.css";
import "./App.css";
import { useState } from "react";
import RoutesWebsite from "./../routes/RoutesWebsite";

const App = () => {
  const [isRetailers, setIsRetailers] = useState(true);
  const [isBuilds, setIsBuilds] = useState(true);

  const toggleRetailers = () => {
    setIsRetailers((isRetailers) => !isRetailers);
  };

  const toggleBuilds = () => {
    setIsBuilds((isBuilds) => !isBuilds);
  };

  return (
    <div className="wrapper-app">
      {/* Spinner */}

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

      {/* Routing */}
      <RoutesWebsite />

      <Footer />
    </div>
  );
};

export default App;
