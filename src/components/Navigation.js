import NavigationLink from "./NavigationLink";

const Navegation = ({ isMobile }) => {
  const mobileClasses = {
    navLink: "mobnav-links",
  };

  const desktopClasses = {
    navLink: "desknav-links",
  };

  return (
    <>
      <ul className={isMobile ? mobileClasses.navLink : desktopClasses.navLink}>
        <NavigationLink isMobile={isMobile} refTo="section1" textValue="Home" />
        <NavigationLink
          isMobile={isMobile}
          refTo="section2"
          textValue="About"
        />
        <NavigationLink
          isMobile={isMobile}
          refTo="section3"
          textValue="Services"
        />
        <NavigationLink
          isMobile={isMobile}
          refTo="section4"
          textValue="Portfolio"
        />
        <NavigationLink
          isMobile={isMobile}
          refTo="section5"
          textValue="Contact"
        />
      </ul>
    </>
  );
};

export default Navegation;
