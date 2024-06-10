import { useState } from "react";
import "../../../styles/navbar.css";
import NavbarLink from "../NavbarLink";
import BurgerButtonSVG from "../../SVGIcons/BurgerButtonSVG";

const SubmenuGovernment = [
   { baseUrl: "/government", politicianId: "Intendente" },
   { baseUrl: "/government", politicianId: "Secretario de Gobierno" },
   { baseUrl: "/government", politicianId: "Concejales" },
];

const Navbar = ({ isMobileWidth }) => {
   const [showNav, setShowNav] = useState(false);

   function handleBurgerButton() {
      setShowNav((prev) => !prev);
   }

   return (
      <nav className="flex-container navbar">
         <button className="burger-button" onClick={handleBurgerButton}>
            <BurgerButtonSVG></BurgerButtonSVG>
         </button>
         <ul className={`nav-links ${showNav ? "hidden" : ""}`}>
            <NavbarLink referenceTo="/home" textValue="Inicio" />

            <NavbarLink submenu={SubmenuGovernment} textValue="Gobierno" />

            <NavbarLink referenceTo="/urbanization" textValue="Noticias" />

            <NavbarLink referenceTo="/procedures" textValue="Servicios" />

            <NavbarLink referenceTo="/gallery" textValue="Galeria" />
         </ul>
      </nav>
   );
};

export default Navbar;
