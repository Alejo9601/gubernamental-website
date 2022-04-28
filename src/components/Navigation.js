import { useEffect, useState } from "react";
import "../styles/navbar.css";
import NavigationLink from "./NavigationLink";
import SubmenuGovernment from "./SubmenuGovernment";

const Navegation = ({ isMobile }) => {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    console.log(display);
  }, [display]);

  return (
    <ul
      className={
        isMobile ? "navigation mobnav-links" : "navigation desknav-links"
      }
    >
      <NavigationLink
        display={setDisplay}
        isMobile={isMobile}
        refTo="/home"
        textValue="Home"
      />

      <NavigationLink
        display={setDisplay}
        isMobile={isMobile}
        refTo="/government"
        textValue="Government"
      />

      <NavigationLink
        display={setDisplay}
        isMobile={isMobile}
        refTo="/urbanization"
        textValue="Urbanization"
      />

      <NavigationLink
        display={setDisplay}
        isMobile={isMobile}
        refTo="/procedures"
        textValue="Procedures"
      />

      <NavigationLink
        display={setDisplay}
        isMobile={isMobile}
        refTo="/gallery"
        textValue="Gallery"
      />
      <SubmenuGovernment display={display}></SubmenuGovernment>
    </ul>
  );
};

export default Navegation;
