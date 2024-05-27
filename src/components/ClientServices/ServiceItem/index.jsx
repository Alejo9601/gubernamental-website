const ServiceItem = ({ title, description, image }) => {
   return (
      <div className="flex-container procedure-item">
         <picture className="procedure-icon">
            <source srcSet={image} />
            <img alt="procedure" />
         </picture>
         <div className="description-container">
            <h3 className="procedure-title">{title}</h3>
            <p className="procedure-description">{description}</p>
         </div>
      </div>
   );
};

export default ServiceItem;
