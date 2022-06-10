const GalleryImage = ({image}) => {
    return (
        <picture className="img-container gallery">
            <source srcSet={require(`../assets/img/${image}`)} />
            <img alt="gallery" />
        </picture>
    )
}

export default GalleryImage