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
    <section className="section-content" id="home">
      <div className="flex-container home-description">
        <h1 className="title-home">Gubernamental Name</h1>
        <p className="home-paragraph">
          Ipsum et commodo non velit. Nostrud qui Lorem do voluptate fugiat in
          esse.Ut dolore aliquip labore tempor laborum. Duis aliqua velit ea
          ipsum est exercitation culpa cillum incididunt commodo dolor ea eu.
        </p>
      </div>
      <picture className="img-container" id="carousel">
        <img
          src={require(`../assets/img/${images[imgIndex]}`)}
          alt="carousel"
          className={imgLoaded ? "img-loaded" : "img-in-loading"}
          onLoad={() => {
            setImgLoaded(true);
          }}
        />
        <div className="dark-overlay"></div>
      </picture>
    </section>
  );
};

export default Carousel;
