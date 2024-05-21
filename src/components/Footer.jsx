import React from "react";
import CreatorsLogo from "../components/SVGIcons/CreatorsLogo"
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="flex-container footer">
      <p className="footer-copyright">
        This site was created and designed by
      </p>
      <div className="creators-logo">
        <CreatorsLogo></CreatorsLogo>
      </div>
    </footer>
  );
};

export default Footer;
