import { useRef, useEffect } from "react";
import "../styles/newsSlider.css";
import NewsCard from "./NewsCard";
import TrimParagraph from "../helpers/TrimParagraph";
import RefButton from "./RefButton";
import newsCard from "../assets/json/newsCard.json";

const NewsSlider = () => {
  const slider = useRef();
  const currPosition = useRef();

  useEffect(() => {
    currPosition.current = 0;
  }, []);

  const slideNext = (step) => {
    slider.current.style.transform = `translate(${
      currPosition.current - step
    }px)`;
    currPosition.current = currPosition.current - step;
  };

  const slidePrev = (step) => {
    slider.current.style.transform = `translate(${
      currPosition.current + step
    }px)`;
    currPosition.current = currPosition.current + step;
  };

  const handleSlide = (next) => {
    const cards = 6;
    const cardWidth = 340;
    const cardsDisplayed = window.innerWidth > 1280 ? 3 : 2;
    const sliderStep = cardWidth * cardsDisplayed; //step of 1020 or 680

    const sliderLimit = next ? -sliderStep * (cards / cardsDisplayed - 1) : 0;

    if (currPosition.current !== sliderLimit) {
      next ? slideNext(sliderStep) : slidePrev(sliderStep);
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
      <div className="next-card" onClick={() => handleSlide(true)}>
        {`>`}
      </div>
      <RefButton reference={""} btnText="View all news"></RefButton>
    </section>
  );
};

export default NewsSlider;
