import "../styles/header.css";
import logo from "../assets/icons/prov-santacruz.png";
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
      header.current.className = "flex-container header emphasized";
    } else {
      header.current.className = "flex-container header";
    }
  }, [isScrolled]);

  return (
    <header ref={header}>
      <picture className="logo">
        <source srcSet={logo} />
        <img id="logo" alt="logo" />
        <p>
          Municipalidad <br />
          28 de Noviembre
        </p>
      </picture>
      <div className="social-networks">
        <img src="" alt="facebook" />
        <img src="" alt="Twitter" />
        <img src="" alt="Instagram" />
      </div>
      <nav className="navbar">
        {isMobile ? <MobileMenu /> : <DesktopMenu />}
      </nav>
    </header>
  );
};

export default Header;
