import ContactForm from "./ContactForm";
import "../../styles/contact.css";
import MapLocation from "../MapLocation";

const Contact = () => {
   return (
      <section className="section-content" id="contact">
         <div className="content-wrapper">
            <h2>Ponte en contacto con nosotros</h2>
            <div className="contact-map-wrapper">
               <ContactForm />
               <MapLocation />
            </div>
         </div>
      </section>
   );
};

export default Contact;
