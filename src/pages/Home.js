import ImagesCarousel from "../components/ImagesCarousel";
import NewsSlider from "../components/NewsSlider";
import ClientServices from "../components/ClientServices";
import Contact from "../components/Contact";
import "../../src/styles/home.css";
import TourismPromotion from "../components/TourismPromotion";
import HomeContentWrapper from "../components/HomeContentWrapper";

const Home = () => {
   return (
      <>
         <ImagesCarousel />
         <HomeContentWrapper>
            <NewsSlider />
         </HomeContentWrapper>
         <TourismPromotion />
         <HomeContentWrapper className="width-90-wrapper">
            <ClientServices />
         </HomeContentWrapper>
         <Contact />
      </>
   );
};

export default Home;
