import "../styles/navbar.css";
import NavigationLink from "./NavigationLink";

const Navegation = ({ isMobile }) => {
  return (
    <ul className={isMobile ? "mobnav-links" : "desknav-links"}>
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
        refTo="/procedures"
        textValue="Procedures"
      />

      <NavigationLink
        isMobile={isMobile}
        refTo="/gallery"
        textValue="Gallery"
      />
    </ul>
  );
};

export default Navegation;
