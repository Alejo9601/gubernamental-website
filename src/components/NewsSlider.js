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
          <NewsCard
            id="first-card"
            newsTitle={newsCard[0].newsTitle}
            description={TrimParagraph(newsCard[0].newsParagraph, 130)}
          />
          <NewsCard
            newsTitle={newsCard[1].newsTitle}
            description={TrimParagraph(newsCard[1].newsParagraph, 130)}
          />
          <NewsCard
            newsTitle={newsCard[2].newsTitle}
            description={TrimParagraph(newsCard[2].newsParagraph, 130)}
          />
          <NewsCard
            newsTitle={newsCard[3].newsTitle}
            description={TrimParagraph(newsCard[3].newsParagraph, 130)}
          />
          <NewsCard
            newsTitle={newsCard[4].newsTitle}
            description={TrimParagraph(newsCard[4].newsParagraph, 130)}
          />
          <NewsCard
            id="last-card"
            newsTitle={newsCard[5].newsTitle}
            description={TrimParagraph(newsCard[5].newsParagraph, 130)}
          />
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
