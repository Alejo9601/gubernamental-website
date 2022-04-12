import ContactForm from "./ContactForm";
import ContactMeans from "./ContactMeans";

const Contact = () => {
  return (
    <>
      <div id="contact-title">
        <h3>Dejanos tu mensaje</h3>
      </div>
      <ContactForm />
      <ContactMeans />
    </>
  );
};

export default Contact;
