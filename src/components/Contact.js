import ContactForm from "./ContactForm";
import ContactMeans from "./ContactMeans";
import "../styles/contact.css";

const Contact = () => {
  return (
    <section className="section-content" id="contact">
      <ContactForm />
      <ContactMeans />
    </section>
  );
};

export default Contact;
