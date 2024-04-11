import { Routes, Route, Link } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Purchase from "../../pages/purchase/Purchase";
import Vehicles from "../../pages/vehicles/Vehicles";
import Owners from "../../pages/owners/Owners";
import Explore from "../../pages/explore/Explore";
import ErrorPages from "../../pages/errorPages/ErrorPages";

const RoutesWebsite = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />,
      <Route path="/purchase" element={<Purchase />} />,
      <Route path="/vehicles" element={<Vehicles />} />,
      <Route path="/owners" element={<Owners />} />,
      <Route path="/explore" element={<Explore />} />,
      <Route path="*" element={<ErrorPages />} />,
    </Routes>
  );
};

export default RoutesWebsite;
