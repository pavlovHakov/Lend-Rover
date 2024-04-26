import Explore from "../pages/explore/Explore";
import Owners from "../pages/owners/Owners";
import Purchase from "../pages/purchase/Purchase";
import Vehicles from "../pages/vehicles/Vehicles";

export const ChoicePage = (active, text, toggleActive, qwe) => {
  if (active === true && text === "vehicles" && toggleActive === true) {
    return <Vehicles />;
  } else if (active === true && text === "vehicles" && toggleActive === false) {
    return false;
  }
  if (active === true && text === "purchase") {
    return <Purchase />;
  } else if (active === true && text === "vehicles" && toggleActive === false) {
    return <div></div>;
  }
  if (active === true && text === "owners") {
    return <Owners />;
  } else if (active === true && text === "vehicles" && toggleActive === false) {
    return <div></div>;
  }
  if (active === true && text === "explore") {
    return <Explore />;
  } else if (active === true && text === "vehicles" && toggleActive === false) {
    return <div></div>;
  }
};
