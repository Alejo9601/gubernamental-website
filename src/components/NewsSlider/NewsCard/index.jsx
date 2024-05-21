import CardButton from "../CardButton";
import cerroCruz from "../../../assets/img/cerro.jpg";

const NewsCard = ({ newsTitle, description, id }) => {
   return (
      <div className="flex-container card" id={id}>
         <div className="img-container" id="news-image">
            <img src={cerroCruz} alt="Noticia" />
         </div>
         <div className="flex-container" id="description">
            <h2 className="news-title">{newsTitle}</h2>
            <p className="news-description">{description}</p>
            <CardButton reference={null} btnText="Ver mas" />
         </div>
      </div>
   );
};

export default NewsCard;
