import "../styles/home.css";
import Carousel from "../components/Carousel";
import NewsSlider from "../components/NewsSlider";
import PaperworkGrid from "../components/PaperworkGrid";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <section className="section-content" id="home">
        <Carousel />
      </section>
      <NewsSlider />
      <section className="section-content">
        <div className="section-title" id="paperwork">
          <h1>Paperwork</h1>
        </div>
        <PaperworkGrid />
      </section>
      <section className="section-content" id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
