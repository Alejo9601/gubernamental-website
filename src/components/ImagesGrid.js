import "../styles/gallery.css";
import GalleryImage from "./GalleryImage";

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
    <div className="grid-container">
      {images.map((image, index) => {
        return (
          <GalleryImage key={index} image={image}/>
        );
      })}
    </div>
  );
};

export default ImagesGrid;
