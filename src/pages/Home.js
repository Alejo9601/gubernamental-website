import "../styles/home.css";
import Carousel from "../components/Carousel";
import NewsSlider from "../components/NewsSlider";

const Home = () => {
  return (
    <>
      <section className="section-content" id="home">
        <Carousel />
      </section>
      <section className="section-content" id="latest-news">
        <NewsSlider />
      </section>
    </>
  );
};

export default Home;
