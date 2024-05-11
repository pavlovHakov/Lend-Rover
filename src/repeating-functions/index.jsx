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
