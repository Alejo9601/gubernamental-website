import ImagesCarousel from "../components/ImagesCarousel";
import NewsSlider from "../components/NewsSlider";
import ClientServices from "../components/ClientServices";
import Contact from "../components/Contact";
import "../../src/styles/home.css";
import TourismPromotion from "../components/TourismPromotion";

const Home = () => {
   return (
      <>
         <ImagesCarousel />
         <main className="main-wrapper">
            <NewsSlider />
            <TourismPromotion />
            <ClientServices />
         </main>
         <Contact />
      </>
   );
};

export default Home;
