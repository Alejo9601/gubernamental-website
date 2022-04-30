import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Submenu from "./Submenu";
import ScreenWidthContext from "../context/ScreenWidthContext";

const NavigationLink = ({ refTo, textValue, submenu }) => {
  const [displaySubmenu, setDisplaySubmenu] = useState(false);
  const isMobileWidth = useContext(ScreenWidthContext);

  return (
    <li
      className={isMobileWidth ? "mobnav-item" : "desknav-item"}
      onMouseEnter={() => setDisplaySubmenu(true)}
    >
      <Link className="anchor" to={refTo}>
        {textValue}
      </Link>

      {submenu ? (
        <Submenu
          setDisplay={setDisplaySubmenu}
          display={displaySubmenu}
        ></Submenu>
      ) : null}
    </li>
  );
};

export default NavigationLink;
