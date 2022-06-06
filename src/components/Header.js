import "../styles/header.css";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import useScrollObserver from "../hooks/useScrollObserver";
import useMobileObserver from "../hooks/useMobileObserver";
import SocialNetworks from "./SocialNetworks";
import Logo from "./Logo";

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
        <Logo />
        <SocialNetworks />
      </div>
      <nav className="flex-container navbar">
        {isMobileWidth ? <MobileMenu /> : <DesktopMenu />}
      </nav>
    </header>
  );
};

export default Header;
