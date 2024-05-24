import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home/Home";
import ErrorPages from "../pages/errorPages/ErrorPages";

const RoutesWebsite = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />,
      <Route path="*" element={<ErrorPages />} />,
    </Routes>
  );
};

export default RoutesWebsite;
