import "../styles/header.css";
import logo from "../assets/icons/prov-santacruz.png";
import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import twitter from "../assets/icons/twitter.png";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import useMobileObserver from "../hooks/useMobileObserver";
import useScrollObserver from "../hooks/useScrollObserver";
import { useEffect, useRef } from "react";

const Header = () => {
  const isMobile = useMobileObserver();
  const isScrolled = useScrollObserver();
  const header = useRef();

  useEffect(() => {
    if (isScrolled) {
      header.current.className = "header emphasized";
    } else {
      header.current.className = "header";
    }
  }, [isScrolled]);

  return (
    <header ref={header}>
      <div className="flex-container" id="logo-socialNetworks">
        <picture className="logo">
          <source srcSet={logo} />
          <img id="logo" alt="logo" />
          <p className="img-description" id="logo-description">
            Municipalidad <br />
            28 de Noviembre
          </p>
        </picture>
        <div className="social-networks">
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="Twitter" />
          <img src={instagram} alt="Instagram" />
        </div>
      </div>
      <nav className="flex-container navbar">
        {isMobile ? <MobileMenu /> : <DesktopMenu />}
      </nav>
    </header>
  );
};

export default Header;
