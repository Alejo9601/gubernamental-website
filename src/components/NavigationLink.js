import { Link } from "react-router-dom";
import useMobileObserver from "../hooks/useMobileObserver";
import Submenu from "./Submenu";

const NavigationLink = ({ refTo = "", textValue, submenu = [] }) => {
  const isMobileWidth = useMobileObserver();

  return (
    <li className={isMobileWidth ? "mobnav-item" : "desknav-item"}>
      <Link
        className="anchor"
        to={refTo}
        style={submenu.length !== 0 ? { cursor: "default" } : {}}
      >
        {textValue}
      </Link>
      {submenu.length > 0 ? <Submenu submenuItems={submenu} /> : null}
    </li>
  );
};

export default NavigationLink;
