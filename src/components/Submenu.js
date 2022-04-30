import { Link } from "react-router-dom";

const SubmenuGovernment = ({ setDisplay, display }) => {
  return (
    <ol
      // onMouseLeave={() => setDisplay(false)}
      className={display ? "submenu active" : "submenu inactive"}
      id="submenu-checkhover"
      onClick={() => setDisplay(false)}
      onMouseLeave={() => setDisplay(false)}
    >
      <Link to="/government">Intendente</Link>
      <Link to="/government">Intendente</Link>
      <Link to="/government">Intendente</Link>
      <Link to="/government">Intendente</Link>
    </ol>
  );
};

export default SubmenuGovernment;
