import { useRef, useEffect } from "react";
import "../styles/newsSlider.css";
import NewsCard from "./NewsCard";
import TrimParagraph from "../helpers/TrimParagraph";
import RefButton from "./RefButton";

const news = [
  {
    newsTitle: "News Title 1",
    newsParagraph:
      "Excepteur incididunt ullamco laborum enim occaecat quis tempor laborum excepteur Lorem excepteur anim eiusmod irure. Ex et laborum mollit reprehenderit eiusmod culpa. Et in sit et dolore Lorem aliqua cupidatat anim minim esse fugiat elit aliqua magna. Consectetur incididunt reprehenderit nisi laboris aute sunt enim cillum exercitation elit. Est velit fugiat aute exercitation quis aliquip velit cupidatat ut do nostrud sit nostrud duis.",
  },
  {
    newsTitle: "News Title 2",
    newsParagraph:
      "Aliqua laborum ex voluptate in reprehenderit culpa nostrud duis. Ut mollit duis ex cillum aliqua aliqua ullamco excepteur minim Lorem. Non qui sint sint magna deserunt ullamco elit proident proident ea. Duis officia id minim do do consectetur.",
  },
  {
    newsTitle: "News Title 3",
    newsParagraph:
      "Id mollit aute irure ad aute pariatur proident enim nulla. Et enim velit pariatur ut nostrud exercitation sit dolore ullamco voluptate sunt. Consequat sint aute enim dolore. Pariatur in ut excepteur eiusmod amet amet nulla aliquip irure anim Lorem enim consectetur magna. Consequat labore eu velit laboris dolor. Labore amet et officia pariatur. Cillum elit amet veniam velit sint cillum culpa et sint ut minim cillum.",
  },
  {
    newsTitle: "News Title 4",
    newsParagraph:
      "Irure pariatur cupidatat ipsum officia occaecat laboris duis nisi. Qui non pariatur ipsum nulla laborum ipsum. Commodo aute commodo aliquip reprehenderit occaecat.",
  },
  {
    newsTitle: "News Title 5",
    newsParagraph:
      "Sunt aliqua ex cupidatat culpa mollit tempor do ad in cillum ea duis. Ipsum aliqua ea duis magna aute reprehenderit ipsum eiusmod amet exercitation minim esse dolor. Nisi dolore mollit anim tempor eiusmod pariatur sint in amet ea ex eu est.",
  },
  {
    newsTitle: "News Title 6",
    newsParagraph:
      "Voluptate magna ex incididunt fugiat esse nostrud id veniam anim ut in magna magna. Cillum velit dolore veniam enim. Et nulla id deserunt mollit occaecat velit voluptate amet voluptate. Velit irure ullamco sint excepteur. Consequat consectetur et dolore magna consectetur est quis anim cillum sunt.",
  },
];

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
            newstitle={news[0].newsTitle}
            description={TrimParagraph(news[0].newsParagraph, 130)}
          />
          <NewsCard
            newstitle={news[1].newsTitle}
            description={TrimParagraph(news[1].newsParagraph, 130)}
          />
          <NewsCard
            newstitle={news[2].newsTitle}
            description={TrimParagraph(news[2].newsParagraph, 130)}
          />
          <NewsCard
            newstitle={news[3].newsTitle}
            description={TrimParagraph(news[3].newsParagraph, 130)}
          />
          <NewsCard
            newstitle={news[4].newsTitle}
            description={TrimParagraph(news[4].newsParagraph, 130)}
          />
          <NewsCard
            id="last-card"
            newstitle={news[5].newsTitle}
            description={TrimParagraph(news[5].newsParagraph, 130)}
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
