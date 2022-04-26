import { Link } from "react-router-dom";

const NavigationLink = ({ isMobile, refTo, textValue }) => {
  const mobileClasses = {
    navItem: "mobnav-item",
  };

  const desktopClasses = {
    navItem: "desknav-item",
  };

  return (
    <>
      <li className={isMobile ? mobileClasses.navItem : desktopClasses.navItem}>
        <Link to={refTo}>{textValue}</Link>
      </li>
    </>
  );
};

export default NavigationLink;
