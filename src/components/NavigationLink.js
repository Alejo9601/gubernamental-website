import { Link } from "react-router-dom";

const NavigationLink = ({ setDisplay, isMobile, refTo, textValue }) => {
  return (
    <li
      className={isMobile ? "mobnav-item" : "desknav-item"}
      onMouseEnter={() => setDisplay(true)}
      onMouseLeave={() => setDisplay(false)}
    >
      <Link className="anchor" to={refTo}>
        {textValue}
      </Link>
    </li>
  );
};

export default NavigationLink;
