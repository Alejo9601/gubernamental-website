import "../styles/gallery.css";

const ImagesGrid = () => {
  const images = [
    "cerro.jpg",
    "el_chalten.jpg",
    "glaciares.jpg",
    "cerro.jpg",
    "el_chalten.jpg",
    "glaciares.jpg",
    "cerro.jpg",
    "el_chalten.jpg",
    "glaciares.jpg",
  ];
  return (
    <div className="grid-container" id="gallery">
      {images.map((image) => {
        return (
          <picture className="img-container gallery">
            <source srcSet={require(`../assets/img/${image}`)} />
            <img alt="gallery" />
          </picture>
        );
      })}
    </div>
  );
};

export default ImagesGrid;
