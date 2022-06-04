import "../styles/burgerButton.css";

const BurgerButton = () => {
  return (
    <div className="flex-container" id="burger-button">
      <span className="top-line"></span>
      <span className="middle-line"></span>
      <span className="bottom-line"></span>
    </div>
  );
};

export default BurgerButton;
