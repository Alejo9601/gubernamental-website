import { useState } from "react";
import BurgerButton from "./BurgerButton";
import Navigation from "./Navigation";

const MobileMenu = () => {
  const [showNav, setShowNav] = useState(false);

  const useToggleMenu = () => {
    showNav ? setShowNav(false) : setShowNav(true);
  };

  return (
    <div className="flex-container" id="flex-mobile-menu">
      {/* <div className="toggle-menu" onClick={useToggleMenu}>
        <img alt="togle-menu" />
      </div> */}
      <BurgerButton></BurgerButton>
      {showNav ? (
        <div
          className="flex-container generic-container"
          onClick={useToggleMenu}
        >
          <Navigation isMobileWidth={true} />
        </div>
      ) : null}
    </div>
  );
};

export default MobileMenu;
