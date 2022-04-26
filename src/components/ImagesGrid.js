import "../styles/gallery.css";

const ImagesGrid = () => {
  const images = ["cerro.jpg", "el_chalten.jpg", "glaciares.jpg", "inicio.jpg"];
  return (
    <div className="grid-container">
      <picture className="img-container">
        <source srcSet={require(`../assets/img/${images[0]}`)} />
        <img alt="gallery" />
      </picture>
      <picture className="img-container">
        <source srcSet={require(`../assets/img/${images[1]}`)} />
        <img alt="gallery" />
      </picture>
      <picture className="img-container">
        <source srcSet={require(`../assets/img/${images[2]}`)} />
        <img alt="gallery" />
      </picture>
      <picture className="img-container">
        <source srcSet={require(`../assets/img/${images[3]}`)} />
        <img alt="gallery" />
      </picture>
      <picture className="img-container">
        <source srcSet={require(`../assets/img/${images[0]}`)} />
        <img alt="gallery" />
      </picture>
      <picture className="img-container">
        <source srcSet={require(`../assets/img/${images[1]}`)} />
        <img alt="gallery" />
      </picture>
      <picture className="img-container">
        <source srcSet={require(`../assets/img/${images[2]}`)} />
        <img alt="gallery" />
      </picture>
      <picture className="img-container">
        <source srcSet={require(`../assets/img/${images[3]}`)} />
        <img alt="gallery" />
      </picture>
      <picture className="img-container">
        <source srcSet={require(`../assets/img/${images[0]}`)} />
        <img alt="gallery" />
      </picture>
    </div>
  );
};

export default ImagesGrid;
