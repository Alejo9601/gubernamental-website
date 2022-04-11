import ContactForm from "./ContactForm";
import ContactMeans from "./ContactMeans";
import whatsapp from "../assets/icon/whatsapp.png";
import email from "../assets/icon/email.png";

const Contact = () => {
  return (
    <>
      <div id="contact-title">
        <h3>Dejanos tu mensaje</h3>
      </div>
      <ContactForm />
      <ContactMeans img1={whatsapp} img2={email} />
    </>
  );
};

export default Contact;
