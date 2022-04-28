import { Link } from "react-router-dom";

const SubmenuGovernment = ({ display }) => {
  return (
    <ol className={display ? "submenu active" : "submenu inactive"}>
      <Link to="/government">Intendente</Link>
      <Link to="/government">Intendente</Link>
      <Link to="/government">Intendente</Link>
      <Link to="/government">Intendente</Link>
    </ol>
  );
};

export default SubmenuGovernment;
