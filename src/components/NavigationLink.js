import { Link } from "react-router-dom";
import SubmenuGovernment from "./SubmenuGovernment";
import { useRef } from "react";

const NavigationLink = ({ isMobile, refTo, textValue }) => {
  const display = useRef(false);

  return (
    <li className={isMobile ? "mobnav-item" : "desknav-item"}>
      <Link className="anchor" to={refTo}>
        {textValue}
      </Link>
    </li>
  );
};

export default NavigationLink;
