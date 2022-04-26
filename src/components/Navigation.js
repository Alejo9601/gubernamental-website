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
        <NavigationLink isMobile={isMobile} refTo="/home" textValue="Home" />
        <NavigationLink
          isMobile={isMobile}
          refTo="/government"
          textValue="Government"
        />
        <NavigationLink
          isMobile={isMobile}
          refTo="/urbanization"
          textValue="Urbanization"
        />
        <NavigationLink
          isMobile={isMobile}
          refTo="/paperwork"
          textValue="Paperwork"
        />
        <NavigationLink
          isMobile={isMobile}
          refTo="/gallery"
          textValue="Gallery"
        />
        {/* <NavigationLink isMobile={isMobile} refTo="/" textValue="Gallery" />
        <NavigationLink
          isMobile={isMobile}
          refTo="section5"
          textValue="Contact"
        /> */}
      </ul>
    </>
  );
};

export default Navegation;
