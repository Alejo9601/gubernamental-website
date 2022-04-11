import { useEffect, useRef, useState } from "react";
import "../styles/homeCarousel.css";

const Carousel = () => {
  const images = ["inicio.jpg", "el_chalten.jpg", "glaciares.jpg"];
  const [imgIndex, setImgIndex] = useState(0);
  let imgIndexRef = useRef(0);
  const [imgLoaded, setImgLoaded] = useState(false);

  const nextImage = () => {
    setImgLoaded(false);
    setTimeout(() => {
      if (imgIndexRef.current < images.length - 1) {
        imgIndexRef.current = imgIndexRef.current + 1;
        setImgIndex((state) => state + 1);
      } else {
        imgIndexRef.current = 0;
        setImgIndex((state) => state - (images.length - 1));
      }
    }, 800);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 8000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="img-container" id="carousel">
      <img
        src={require(`../assets/img/${images[imgIndex]}`)}
        alt="carousel"
        className={imgLoaded ? "img-loaded" : "img-in-loading"}
        onLoad={() => {
          setImgLoaded(true);
        }}
      />
      <div className="dark-overlay"></div>
    </div>
  );
};

export default Carousel;
