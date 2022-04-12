import whatsapp from "../assets/icon/whatsapp.png";
import email from "../assets/icon/email.png";

const ContactMeans = ({ img1, img2 }) => {
  return (
    <div className="flex-container" id="contact-means">
      <h3>O Contactanos directamente a estos medios</h3>
      <picture className="img-container" id="whatsapp">
        <source srcSet={whatsapp} />
        <img alt="whatsapp" />
      </picture>
      <picture className="img-container" id="email">
        <source srcSet={email} />
        <img alt="email" />
      </picture>
    </div>
  );
};

export default ContactMeans;
