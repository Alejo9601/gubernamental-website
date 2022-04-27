import "../styles/header.css";
import iconUrl from "../assets/json/iconUrl.json";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import useScrollObserver from "../hooks/useScrollObserver";
import { useContext } from "react";
import MobileContext from "../context/MobileContext";

const Header = () => {
  const isMobile = useContext(MobileContext);
  const isScrolled = useScrollObserver();

  return (
    <header className={isScrolled ? "header emphasized" : "header"}>
      <div
        className={`flex-container ${
          isScrolled ? "displayed" : "non-displayed"
        }`}
        id="logo-socialNetworks"
      >
        <picture className="logo">
          <source srcSet={require(`../assets/icon/${iconUrl.logo}`)} />
          <img alt="Page Logo" />
          <p>
            Gubernamental <br />
            Institution
          </p>
        </picture>
        <div className="social-networks">
          <h3>Follow us on</h3>
          <img
            src={require(`../assets/icon/${iconUrl.facebook}`)}
            alt="facebook"
          />
          <img
            src={require(`../assets/icon/${iconUrl.twitter}`)}
            alt="Twitter"
          />
          <img
            src={require(`../assets/icon/${iconUrl.instagram}`)}
            alt="Instagram"
          />
        </div>
      </div>
      <nav className="flex-container navbar">
        {isMobile ? <MobileMenu /> : <DesktopMenu />}
      </nav>
    </header>
  );
};

export default Header;
