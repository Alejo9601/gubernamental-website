import "../styles/home.css";
import Carousel from "../components/Carousel";
import NewsSlider from "../components/NewsSlider";
import PaperworkGrid from "../components/PaperworkGrid";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Carousel />
      <NewsSlider />
      <PaperworkGrid />
      <Contact />
    </>
  );
};

export default Home;
