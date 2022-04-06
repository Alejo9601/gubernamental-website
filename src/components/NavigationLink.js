import { Link } from "react-scroll";

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
        <Link
          to={refTo}
          smooth="true"
          style={{ cursor: "pointer" }}
          offset={-100}
        >
          {textValue}
        </Link>
      </li>
    </>
  );
};

export default NavigationLink;
