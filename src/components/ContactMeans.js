import whatsapp from "../assets/icon/whatsapp.png";
import email from "../assets/icon/email.png";

const ContactMeans = () => {
  return (
    <div className="grid-container" id="contact-grid">
      <h3>OR CONTACT US THROUGH THESE MEANS</h3>
      <picture className="img-container" id="whatsapp">
        <source srcSet={whatsapp} />
        <img alt="whatsapp" />
        <p>(+54) 2902 - 484801</p>
      </picture>
      <picture className="img-container" id="email">
        <source srcSet={email} />
        <img alt="email" />
        <p>
          municipalidad28nov <br></br>@gmail.com
        </p>
      </picture>
    </div>
  );
};

export default ContactMeans;
