import { Link } from "react-router-dom";

const NavigationLink = ({ isMobile, refTo, textValue }) => {
  return (
    <li className={isMobile ? "mobnav-item" : "desknav-item"}>
      <Link className="anchor" to={refTo}>
        {textValue}
      </Link>
    </li>
  );
};

export default NavigationLink;
