const NewsCard = ({ newstitle, description }) => {
  return (
    <div className="flex-container" id="card-container">
      <picture className="img-container" id="news-image">
        <source srcSet="" />
        <img alt="Noticia" />
      </picture>
      <div className="flex-container" id="description-container">
        <h2 className="news-title">{newstitle}</h2>
        <p className="news-description">{description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
