const PaperworkItem = ({ title, description, image}) => {
  return (
    <div className="paperwork-item flex-container">
      <picture className="paperwork-icon">
        <source srcSet={image}/>
        <img alt="paperwork" />
      </picture>
      <div className="description-container"> 
        <h2 className="paperwork-title">{title}</h2>
        <p className="paperwork-description">{description}</p>
      </div>
    </div>
  );
};

export default PaperworkItem;