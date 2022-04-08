import "../styles/header.css";
import logo from "../assets/icon/prov-santacruz.png";
import facebook from "../assets/icon/facebook.png";
import instagram from "../assets/icon/instagram.png";
import twitter from "../assets/icon/twitter.png";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import useMobileObserver from "../hooks/useMobileObserver";
import useScrollObserver from "../hooks/useScrollObserver";

const Header = () => {
  const isMobile = useMobileObserver();
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
