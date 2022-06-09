import contacts from "../assets/json/contacts.json";
import ContactItem from "../components/ContactItem";
import "../styles/contactPhones.css";

const Contacts = () => {
  return (
    <section className="section-content" id="contacts">
      <div className="flex-container" id="title-description">
        <h1>Useful contacts</h1>
        <p className="description">
          Adresses, phones e-mails of all municipal dependencies
        </p>
        <span className="office-hours">
          You can call or write from 08 am to 14 pm
        </span>
      </div>
      <div className="grid-container" id="contacts-grid">
        {contacts.map((contact) => {
          return (
            <ContactItem
              contactName={contact.name}
              phoneNumber={contact.phone}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Contacts;
