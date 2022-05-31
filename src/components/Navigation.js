import { useContext } from "react";
import ScreenWidthContext from "../context/ScreenWidthContext";
import "../styles/navbar.css";
import NavigationLink from "./NavigationLink";

const SubmenuGovernment = [
  { baseUrl: "/government", politicianId: "politician" },
  { baseUrl: "/government", politicianId: "politician" },
  { baseUrl: "/government", politicianId: "politician" },
  { baseUrl: "/government", politicianId: "politician" },
];

const Navegation = () => {
  const isMobileWidth = useContext(ScreenWidthContext);

  return (
    <ul
      className={
        isMobileWidth ? "navigation mobnav-links" : "navigation desknav-links"
      }
    >
      <NavigationLink refTo="/home" textValue="Home" />

      <NavigationLink submenu={SubmenuGovernment} textValue="Government" />

      <NavigationLink refTo="/urbanization" textValue="Urbanization" />

      <NavigationLink refTo="/procedures" textValue="Procedures" />

      <NavigationLink refTo="/gallery" textValue="Gallery" />
    </ul>
  );
};

export default Navegation;
