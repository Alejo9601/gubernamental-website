import React from "react";
import Navigation from "./Navigation";
import SubmenuGovernment from "./SubmenuGovernment";

const DesktopMenu = () => {
  return (
    <>
      <Navigation isMobile={false} />
      <SubmenuGovernment display={false}></SubmenuGovernment>
    </>
  );
};

export default DesktopMenu;
