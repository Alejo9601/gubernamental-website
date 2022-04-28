import { useState } from "react";
import { Link } from "react-router-dom";
import SubmenuGovernment from "./SubmenuGovernment";

const NavigationLink = ({ isMobile, refTo, textValue }) => {
  const [display, setDisplay] = useState(false);

  return (
    <li
      className={isMobile ? "mobnav-item" : "desknav-item"}
      onMouseEnter={() => setDisplay(true)}
      onMouseLeave={() => setDisplay(false)}
    >
      <Link className="anchor" to={refTo}>
        {textValue}
      </Link>
      <SubmenuGovernment display={display}></SubmenuGovernment>
    </li>
  );
};

export default NavigationLink;
