import { Link } from "react-router-dom";
import Submenu from "../../Submenu";

const NavbarLink = ({ referenceTo = "", textValue, submenu = [] }) => {
  return (
    <li className="nav-item-link">
      <Link
        className="anchor"
        to={referenceTo}
        style={submenu.length !== 0 ? { cursor: "default" } : {}}
      >
        {textValue}
      </Link>
        {submenu.length > 0 ? <Submenu submenuItems={submenu} /> : null}
    </li>
  );
};

export default NavbarLink;
