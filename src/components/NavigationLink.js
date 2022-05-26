import { useContext } from "react";
import { Link } from "react-router-dom";
import ScreenWidthContext from "../context/ScreenWidthContext";
import SubmenuGovernment from "./SubmenuGovernment";

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
      {submenu.length > 0 ? <SubmenuGovernment submenuItems={submenu} /> : null}
    </li>
  );
};

export default NavigationLink;
