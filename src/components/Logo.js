import logo from "../assets/icon/prov-santacruz.png";

const Logo = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <picture
      onClick={handleClick}
      className="logo"
      style={{ cursor: "pointer" }}
    >
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
