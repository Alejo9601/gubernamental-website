import cerroCruz from "../assets/img/cerro.jpg";
import RefButton from "./RefButton";

const NewsCard = ({ newstitle, description, id }) => {
  return (
    <div className="flex-container card" id={id}>
      <picture className="img-container" id="news-image">
        <source srcSet={cerroCruz} />
        <img alt="Noticia" />
      </picture>
      <div className="flex-container" id="description">
        <h2 className="news-title">{newstitle}</h2>
        <p className="news-description">{description}</p>
        <RefButton reference={null} btnText="Ver mas ..." />
      </div>
    </div>
  );
};

export default NewsCard;