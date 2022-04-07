import "../styles/home.css";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <section className="section-content" id="home">
      <Carousel />
      <div className="container" id="latest-news"></div>
    </section>
  );
};

export default Home;
