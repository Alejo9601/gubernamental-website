import "../styles/header.css";
import logo from "../assets/icon/prov-santacruz.png";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import useScrollObserver from "../hooks/useScrollObserver";
import useMobileObserver from "../hooks/useMobileObserver";
import social from "../assets/json/data_social_networks.json";
import SocialNetworks from "./SocialNetworks";

const Header = () => {
  const isMobileWidth = useMobileObserver();
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
          <img alt="Page Logo" />
          <p>
            Gubernamental <br />
            Institution
          </p>
        </picture>
        <SocialNetworks></SocialNetworks>
      </div>
      <nav className="flex-container navbar">
        {isMobileWidth ? <MobileMenu /> : <DesktopMenu />}
      </nav>
    </header>
  );
};

export default Header;
