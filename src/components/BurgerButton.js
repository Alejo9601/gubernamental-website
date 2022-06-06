import "../styles/burgerButton.css";

const BurgerButton = ({ toggleMenu }) => {
  return (
    <div onClick={toggleMenu} className="flex-container" id="burger-button">
      <span className="top-line"></span>
      <span className="middle-line"></span>
      <span className="bottom-line"></span>
    </div>
  );
};

export default BurgerButton;
