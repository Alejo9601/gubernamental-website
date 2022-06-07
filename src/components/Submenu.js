import { Link } from "react-router-dom";

const Submenu = ({ submenuItems }) => {
  return (
    <ol className="submenu">
      {submenuItems.map((item, index) => {
        return (
          <li key={item.politicianId.concat(index)}>
            <Link to={`${item.baseUrl}/${item.politicianId}`}>
              {item.politicianId}
            </Link>
          </li>
        );
      })}
    </ol>
  );
};

export default Submenu;
