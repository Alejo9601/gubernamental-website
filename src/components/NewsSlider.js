import { useRef } from "react";
import "../styles/newsSlider.css";
import NewsCard from "./NewsCard";

const NewsSlider = () => {
  const cardsCarousel = useRef();

  const handleNext = () => {
    cardsCarousel.current.style.transform = "translate(500px)";
  };

  const handlePrev = () => {
    cardsCarousel.current.style.transform = "translate(-500px)";
  };

  return (
    <section className="section-content" id="latest-news">
      <div className="section-title" id="latest-news-title">
        <h1>Ultimas Novedades</h1>
      </div>
      <div className="prev-card" onClick={handlePrev}>
        {`<`}
      </div>
      <div className="flex-container" id="news-slider">
        <div ref={cardsCarousel} className="flex-container" id="cards-carousel">
          <NewsCard
            className="first-news"
            newstitle="Noticia 1"
            description="Cinco siglos más tarde Lorem Ipsum experimentó una oleada de popularidad con el lanzamiento de hojas de transferencia seca de Letraset."
          />
          <NewsCard
            newstitle="Noticia 2"
            description="Cinco siglos más tarde Lorem Ipsum experimentó una oleada de popularidad con el lanzamiento de hojas de transferencia seca de Letraset."
          />
          <NewsCard
            newstitle="Noticia 3"
            description="Cinco siglos más tarde Lorem Ipsum experimentó una oleada de popularidad con el lanzamiento de hojas de transferencia seca de Letraset."
          />
          <NewsCard
            newstitle="Noticia 4"
            description="Cinco siglos más tarde Lorem Ipsum experimentó una oleada de popularidad con el lanzamiento de hojas de transferencia seca de Letraset."
          />
          <NewsCard
            newstitle="Noticia 5"
            description="Cinco siglos más tarde Lorem Ipsum experimentó una oleada de popularidad con el lanzamiento de hojas de transferencia seca de Letraset."
          />
          <NewsCard
            className="last-news"
            newstitle="Noticia 6"
            description="Cinco siglos más tarde Lorem Ipsum experimentó una oleada de popularidad con el lanzamiento de hojas de transferencia seca de Letraset."
          />
        </div>
      </div>
      <div className="next-card" onClick={handleNext}>
        {`>`}
      </div>
    </section>
  );
};

export default NewsSlider;
