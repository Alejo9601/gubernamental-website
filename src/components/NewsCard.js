import cerroCruz from "../assets/img/cerro.jpg";

const NewsCard = ({ newstitle, description }) => {
  return (
    <div className="flex-container" id="card">
      <picture className="img-container" id="news-image">
        <source srcSet={cerroCruz} />
        <img alt="Noticia" />
      </picture>
      <div className="flex-container" id="description">
        <h2 className="news-title">{newstitle}</h2>
        <p className="news-description">{description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
