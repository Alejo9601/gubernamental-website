import logo from "../assets/icon/prov-santacruz.png";

const Logo = () => {
  return (
    <picture className="logo">
      <source srcSet={logo} />
      <img alt="Page Logo" />
      <p>
        Gubernamental <br />
        Institution
      </p>
    </picture>
  );
};

export default Logo;
