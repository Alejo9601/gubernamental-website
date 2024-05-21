import "../styles/header.css";
import useScrollObserver from "../hooks/useScrollObserver";
import SocialNetworks from "./SocialNetworks";
import Escudo28Nov from "../assets/icon/escudo28denoviembre.png"
import Navbar from "./Navbar";

const Header = () => {
  const isScrolled = useScrollObserver();

  return (
    <header className={isScrolled ? "header emphasized" : "header"}>
      <div className="flex-container" id="logo-socialNetworks">
        <div className="logo">
          <img src={Escudo28Nov} alt="Page Logo" />
          <h2>MUNICIPALIDAD 28 DE NOVIEMBRE</h2>
        </div>
        <Navbar></Navbar>
        <SocialNetworks></SocialNetworks>
      </div>

    </header>
  );
};

export default Header;
