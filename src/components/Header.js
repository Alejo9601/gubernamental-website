import "../styles/header.css";
import imgUrl from "../assets/json/imgUrls.json";
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
          <source srcSet={require(`../assets/icon/${imgUrl.logo}`)} />
          <img alt="Page Logo" />
          <p>
            Gubernamental <br />
            Institution
          </p>
        </picture>
        <div className="social-networks">
          <h3>Follow us on</h3>
          <img
            src={require(`../assets/icon/${imgUrl.facebook}`)}
            alt="facebook"
          />
          <img
            src={require(`../assets/icon/${imgUrl.twitter}`)}
            alt="Twitter"
          />
          <img
            src={require(`../assets/icon/${imgUrl.instagram}`)}
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
