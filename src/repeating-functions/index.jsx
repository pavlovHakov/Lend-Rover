import Explore from "../pages/explore/Explore";
import Owners from "../pages/owners/Owners";
import Purchase from "../pages/purchase/Purchase";
import Vehicles from "../pages/vehicles/Vehicles";

export const ChoicePage = (active, text, toggleActive) => {
  if (active === true && text === "vehicles" && toggleActive === true) {
    return <Vehicles />;
  }
  if (active === true && text === "purchase" && toggleActive === true) {
    return <Purchase />;
  }
  if (active === true && text === "owners" && toggleActive === true) {
    return <Owners />;
  }
  if (active === true && text === "explore" && toggleActive === true) {
    return <Explore />;
  }
  return false;
};

