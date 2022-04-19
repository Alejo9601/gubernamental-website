import { useRef } from "react";
import "../styles/newsSlider.css";
import NewsCard from "./NewsCard";

const NewsSlider = () => {
  const cardsCarousel = useRef();

  const handleNext = () => {
    // console.log("next");
    // console.log(cardsCarousel.current);
    cardsCarousel.current.style.transform = "translate(300px)";
  };

  const handlePrev = () => {
    // console.log("prev");
    // console.log(cardsCarousel.current);
    cardsCarousel.current.style.transform = "translate(-300px)";
  };

  return (
    <div className="flex-container" id="news-slider">
      <div className="prev-card" onClick={handlePrev}>
        {`<`}
      </div>
      <div ref={cardsCarousel} className="flex-container" id="cards-carousel">
        <NewsCard
          className="first-news"
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
        <NewsCard
          newstitle="Noticia 1"
          description="Cinco siglos más tarde Lorem Ipsum experimentó una oleada de popularidad con el lanzamiento de hojas de transferencia seca de Letraset."
        />
        <NewsCard
          newstitle="Noticia 1"
          description="Cinco siglos más tarde Lorem Ipsum experimentó una oleada de popularidad con el lanzamiento de hojas de transferencia seca de Letraset."
        />
        <NewsCard
          className="last-news"
          newstitle="Noticia 1"
          description="Cinco siglos más tarde Lorem Ipsum experimentó una oleada de popularidad con el lanzamiento de hojas de transferencia seca de Letraset."
        />
      </div>
      <div className="next-card" onClick={handleNext}>
        {`>`}
      </div>
    </div>
  );
};

export default NewsSlider;
