import { useEffect, useRef, useState } from "react";
import "../styles/carousel.css";

const Carousel = () => {
  const images = ["4.jpg", "el_chalten.jpg", "glaciares.jpg"];
  const [imgIndex, setImgIndex] = useState(0);
  let imgIndexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (imgIndexRef.current < images.length - 1) {
        imgIndexRef.current = imgIndexRef.current + 1;
        setImgIndex((state) => state + 1);
      } else {
        imgIndexRef.current = 0;
        setImgIndex((state) => state - (images.length - 1));
      }
    }, 6000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="section-content" id="home">
      <picture className="img-container" id="carousel">
        <source srcSet={require(`../assets/img/${images[imgIndex]}`)} />
        <img alt="carousel" />
        <div className="dark-overlay"></div>
      </picture>
    </section>
  );
};

export default Carousel;
