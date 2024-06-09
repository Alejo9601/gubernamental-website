import { useRef, useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import TrimParagraph from "../../helpers/TrimParagraph";
import Button from "../Button";
import newsCard from "../../assets/json/newsCard.json";
import RightArrow from "../SVGIcons/RightArrow";
import LeftArrow from "../SVGIcons/LeftArrow";
import "../../styles/newsSlider.css";

const NewsSlider = () => {
   const [slides, setSlides] = useState(0);
   const [cardSize, setCardSize] = useState(340);
   const slider = useRef();

   useEffect(() => {
      slider.current.style.transform = `translateX(${-slides * cardSize}px)`;
   }, [slides, cardSize]);

   const slideNext = () => {
      if (slides < 3) setSlides((prevSlides) => prevSlides + 1);
   };

   const slidePrev = () => {
      if (slides > 0) setSlides((prevSlides) => prevSlides - 1);
   };

   return (
      <section className="section-content" id="latest-news">
         <div className="section-title" id="latest-news-title">
            <h1>Ultimas Noticias</h1>
         </div>
         <div className="prev-card" onClick={() => slidePrev()}>
            <LeftArrow />
         </div>
         <div className="flex-container" id="news-slider">
            <div ref={slider} className="flex-container" id="cards-carousel">
               {newsCard.map((news) => {
                  return (
                     <NewsCard
                        newsTitle={news.newsTitle}
                        description={TrimParagraph(news.newsParagraph, 130)}
                     />
                  );
               })}
            </div>
         </div>
         <div className="next-card" onClick={() => slideNext()}>
            <RightArrow />
         </div>
         <Button reference={""} btnText="Ver todas"></Button>
      </section>
   );
};

export default NewsSlider;
