import imgUrl from "../assets/json/imgUrl.json";
import RefButtonCard from "./RefButtonCard";

const NewsCard = ({ newsTitle, description, id }) => {
  return (
    <div className="flex-container card" id={id}>
      <picture className="img-container" id="news-image">
        <source srcSet={require(`../assets/img/${imgUrl.cerroCruz}`)} />
        <img alt="Noticia" />
      </picture>
      <div className="flex-container" id="description">
        <h2 className="news-title">{newsTitle}</h2>
        <p className="news-description">{description}</p>
        <RefButtonCard reference={null} btnText="See more ..." />
      </div>
    </div>
  );
};

export default NewsCard;
