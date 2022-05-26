import { useContext } from "react";
import { Link } from "react-router-dom";
import ScreenWidthContext from "../context/ScreenWidthContext";
import Submenu from "./Submenu";

const NavigationLink = ({ refTo = "", textValue, submenu = [] }) => {
  const isMobileWidth = useContext(ScreenWidthContext);

  return (
    <li className={isMobileWidth ? "mobnav-item" : "desknav-item"}>
      <Link
        className="anchor"
        to={refTo}
        style={submenu ? { cursor: "default" } : {}}
      >
        {textValue}
      </Link>
      {submenu.length > 0 ? <Submenu submenuItems={submenu} /> : null}
    </li>
  );
};

export default NavigationLink;
