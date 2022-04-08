import "../styles/newsSlider.css";
import NewsCard from "./NewsCard";

const NewsSlider = () => {
  return (
    <div className="flex-container" id="news-slider">
      <NewsCard
        newstitle="Noticia 1"
        description="Cinco siglos más tarde Lorem Ipsum experimentó una oleada de popularidad con el lanzamiento de hojas de transferencia seca de Letraset."
      />
      <NewsCard
        newstitle="Noticia 1"
        description="Cinco siglos más tarde Lorem Ipsum experimentó una oleada de popularidad con el lanzamiento de hojas de transferencia seca de Letraset."
      />
      <NewsCard
        newstitle="Noticia 1"
        description="Cinco siglos más tarde Lorem Ipsum experimentó una oleada de popularidad con el lanzamiento de hojas de transferencia seca de Letraset."
      />
    </div>
  );
};

export default NewsSlider;
