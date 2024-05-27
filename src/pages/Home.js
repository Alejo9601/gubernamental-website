import ImagesCarousel from "../components/ImagesCarousel";
import NewsSlider from "../components/NewsSlider";
import ClientServices from "../components/ClientServices";
import Contact from "../components/Contact";
import "../../src/styles/home.css";

const Home = () => {
   return (
      <>
         <ImagesCarousel />
         <main className="main-wrapper">
            <NewsSlider />
            <ClientServices />
         </main>
         <Contact />
      </>
   );
};

export default Home;
