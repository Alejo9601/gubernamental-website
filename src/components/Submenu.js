import { Link } from "react-router-dom";

const Submenu = ({ submenuItems }) => {
  return (
    <ol className="submenu">
      {submenuItems.map((item, index) => {
        const textValue = item.politicianId
        return (
          <li key={item.politicianId.concat(index)}>
            <Link to={`${item.baseUrl}/${item.politicianId}`}>
              {textValue.charAt(0).toUpperCase() + textValue.slice(1)}
            </Link>
          </li>
        );
      })}
    </ol>
  );
};

export default Submenu;
