import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Submenu from "./Submenu";
import ScreenWidthContext from "../context/ScreenWidthContext";

const NavigationLink = ({ refTo, textValue, submenu }) => {
  const isMobileWidth = useContext(ScreenWidthContext);

  return (
    <li className={isMobileWidth ? "mobnav-item" : "desknav-item"}>
      <Link className="anchor" to={refTo}>
        {textValue}
      </Link>
      {submenu ? <Submenu /> : null}
    </li>
  );
};

export default NavigationLink;
