const RefButton = ({ className, reference, btnText }) => {
  return (
    <div className="flex-container ref-button">
      <div className="btn-symbol" id="see-more">
        <p className=""> {">"} </p>
      </div>
      <a
        style={{ textDecoration: "none" }}
        href={reference}
        className={className}
        target="_blank"
        rel="noreferrer noopener"
      >
        {btnText}
      </a>
    </div>
  );
};

export default RefButton;
