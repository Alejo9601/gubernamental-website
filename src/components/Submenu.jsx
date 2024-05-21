import { Link } from "react-router-dom";

const Submenu = ({ submenuItems }) => {
  return (
    <ul className="submenu">
      {submenuItems.map((item) => {
        return (
          <li>
            <Link to={`${item.baseUrl}/${item.politicianId}`}>
              {item.politicianId}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Submenu;
