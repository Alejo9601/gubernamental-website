import More from "../../SVGIcons/More";

const CardButton = ({ reference, btnText }) => {
   return (
      <div className="flex-container ref-button-card">
         <a href={reference} target="_blank" rel="noreferrer noopener">
            <p>{btnText}</p>
            <More />
         </a>
      </div>
   );
};

export default CardButton;
