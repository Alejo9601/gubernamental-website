import ContactForm from "./ContactForm";
import ContactMeans from "./ContactMeans";

const Contact = () => {
  return (
    <section className="section-content" id="contact">
      <div id="contact-title">
        <h3>Leave us your message</h3>
      </div>
      <ContactForm />
      <ContactMeans />
    </section>
  );
};

export default Contact;
