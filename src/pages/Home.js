import "../styles/home.css";
import Carousel from "../components/Carousel";
import NewsSlider from "../components/NewsSlider";

const Home = () => {
  return (
    <>
      <section className="section-content" id="home">
        <Carousel />
      </section>
      <section className="section-content flex-container" id="latest-news">
        <div className="section-title" id="latest-news-title">
          <h1>Ultimas Novedades</h1>
        </div>
        <NewsSlider />
      </section>
      <section className="section-content flex-container">
        <div className="section-title" id="paperwork">
          <h1>Tramites</h1>
        </div>
      </section>
    </>
  );
};

export default Home;
