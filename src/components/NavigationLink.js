import { useState } from "react";
import { Link } from "react-router-dom";
import Submenu from "./Submenu";
import { check_for_hover } from "../helpers/CheckForHover";

const NavigationLink = ({ isMobile, refTo, textValue, submenu }) => {
  const [display, setDisplay] = useState(false);

  return (
    <li
      className={isMobile ? "mobnav-item" : "desknav-item"}
      onMouseEnter={() => setDisplay(true)}
      // onMouseLeave={() => {
      //   setTimeout(() => {
      //     if (check_for_hover() === false) {
      //       setDisplay(false);
      //     }
      //   }, 100);
      // }}
    >
      <Link className="anchor" to={refTo}>
        {textValue}
      </Link>

      {submenu ? (
        <Submenu setDisplay={setDisplay} display={display}></Submenu>
      ) : null}
    </li>
  );
};

export default NavigationLink;
