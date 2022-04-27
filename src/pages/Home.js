import "../styles/home.css";
import Carousel from "../components/Carousel";
import NewsSlider from "../components/NewsSlider";
import Procedures from "../components/Procedures";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Carousel />
      <NewsSlider />
      <Procedures />
      <Contact />
    </>
  );
};

export default Home;
