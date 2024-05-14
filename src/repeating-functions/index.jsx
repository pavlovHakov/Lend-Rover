import Explore from "../pages/explore/Explore";
import Owners from "../pages/owners/Owners";
import Shop from "../pages/shop/Shop";
import Vehicles from "../pages/vehicles/Vehicles";

export const ChoicePage = (active, text, toggleActive) => {
  if (active === true && text === "vehicles" && toggleActive === true) {
    return <Vehicles />;
  }
  if (active === true && text === "shop" && toggleActive === true) {
    return <Shop />;
  }
  if (active === true && text === "owners" && toggleActive === true) {
    return <Owners />;
  }
  if (active === true && text === "explore" && toggleActive === true) {
    return <Explore />;
  }
  return false;
};

export const choiceImg = (item, img1, img2, img3, img4) => {
  if (item === 0) {
    return <img src={img1} alt="icon" />;
  }
  if (item === 1) {
    return <img src={img2} alt="icon" />;
  }
  if (item === 2) {
    return <img src={img3} alt="icon" />;
  }
  if (item === 3) {
    return <img src={img4} alt="icon" />;
  }
};
