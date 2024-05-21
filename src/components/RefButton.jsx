const RefButton = ({ reference, btnText }) => {
  return (
    <div className="flex-container ref-button">
      <div id="background-color-container">
        <a
          style={{ textDecoration: "none" }}
          href={reference}
          target="_blank"
          rel="noreferrer noopener"
        >
          {btnText}
        </a>
      </div>
    </div>
  );
};

export default RefButton;
