import "../styles/newsSlider.css";
import NewsCard from "./NewsCard";

const NewsSlider = () => {
  return (
    <div className="flex-container" id="news-slider">
      <NewsCard
        newsTitle="Noticia 1"
        description="Esta es una nueva noticia de prueba"
      />
      <NewsCard
        newsTitle="Noticia 1"
        description="Esta es una nueva noticia de prueba"
      />
      <NewsCard
        newsTitle="Noticia 1"
        description="Esta es una nueva noticia de prueba"
      />
    </div>
  );
};

export default NewsSlider;
