import "../../../styles/navbar.css";
import NavbarLink from "./NavbarLink";

const SubmenuGovernment = [
   { baseUrl: "/government", politicianId: "Intendente" },
   { baseUrl: "/government", politicianId: "Secretario de Gobierno" },
   { baseUrl: "/government", politicianId: "Concejales" },
];

const Navbar = ({ isMobileWidth }) => {
   return (
      <nav className="flex-container navbar">
         <ul className="nav-links">
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
