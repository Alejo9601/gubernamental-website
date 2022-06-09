import logo from "../assets/icon/prov-santacruz.png";

const Logo = () => {
  return (
    <picture className="logo">
      <source srcSet={logo} />
      <img alt="Page Logo" />
      <span>
        Gubernamental <br />
        Institution
      </span>
    </picture>
  );
};

export default Logo;
