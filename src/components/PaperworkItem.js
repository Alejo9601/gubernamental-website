const PaperworkItem = ({ title, description }) => {
  return (
    <div className="paperwork-item flex-container">
      <picture className="paperwork-icon">
        <source />
        <img alt="paperwork" />
      </picture>
      <h2 className="paperwork-title">{title}</h2>
      <p className="peperwork-description">{description}</p>
    </div>
  );
};

export default PaperworkItem;
