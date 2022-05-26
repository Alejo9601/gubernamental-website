import { Link } from "react-router-dom";

const SubmenuGovernment = ({ submenuItems }) => {
  return (
    <ol className="submenu">
      {submenuItems.map((item) => {
        return (
          <li>
            <Link to={`${item.baseUrl}/${item.politicianId}`}>
              {item.politicianId}
            </Link>
          </li>
        );
      })}
    </ol>
  );
};

export default SubmenuGovernment;
