const RefButton = ({ reference, btnText }) => {
   return (
      <div className="flex-container ref-button">
         <a
            style={{ textDecoration: "none" }}
            href={reference}
            target="_blank"
            rel="noreferrer noopener"
         >
            {btnText}
         </a>
      </div>
   );
};

export default RefButton;
