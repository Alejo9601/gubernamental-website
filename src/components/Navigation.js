import { useContext } from "react";
import ScreenWidthContext from "../context/ScreenWidthContext";
import "../styles/navbar.css";
import NavigationLink from "./NavigationLink";

const Navegation = () => {
  const isMobileWidth = useContext(ScreenWidthContext);

  return (
    <ul
      className={
        isMobileWidth ? "navigation mobnav-links" : "navigation desknav-links"
      }
    >
      <NavigationLink refTo="/home" textValue="Home" />

      <NavigationLink
        submenu={true}
        refTo="/government"
        textValue="Government"
      />

      <NavigationLink
        submenu={true}
        refTo="/urbanization"
        textValue="Urbanization"
      />

      <NavigationLink refTo="/procedures" textValue="Procedures" />

      <NavigationLink refTo="/gallery" textValue="Gallery" />
    </ul>
  );
};

export default Navegation;
