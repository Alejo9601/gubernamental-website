import { useRef, useEffect } from "react";
import "../styles/newsSlider.css";
import NewsCard from "./NewsCard";
import TrimParagraph from "../helpers/TrimParagraph";
import RefButton from "./RefButton";
import newsCard from "../assets/json/newsCard.json";
import useSliderHandler from "../hooks/useSliderHandler";

const NewsSlider = () => {
  const slider = useRef();
  const sliderWrapper = useRef();
  const CARD_WIDTH = 340;
  const { slide, count } = useSliderHandler(
    sliderWrapper,
    slider,
    CARD_WIDTH
  );

  const handleSlide = (next) => {
    if(!next) {
      slide(false) 
      return
    }
    if (count < newsCard.length) {
      slide(true);
    }
  };

  return (
    <section className="section-content" id="latest-news">
      <div className="section-title" id="latest-news-title">
        <h1>Latest News</h1>
      </div>
      <div className="prev-card" onClick={() => handleSlide(false)}>
        {`<`}
      </div>
      <div ref={sliderWrapper} className="flex-container" id="news-slider">
        <div ref={slider} className="flex-container" id="cards-carousel">
          {newsCard.map((news, index) => {
            return (
              <NewsCard
                key={news.newsTitle.concat(index)}
                newsTitle={news.newsTitle}
                description={TrimParagraph(news.newsParagraph, 130)}
              />
            );
          })}
        </div>
      </div>
      <div className="next-card" onClick={() => handleSlide(true)}>
        {`>`}
      </div>
      <RefButton reference={""} btnText="View all news"></RefButton>
    </section>
  );
};

export default NewsSlider;
