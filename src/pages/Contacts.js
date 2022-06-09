import contacts from "../assets/json/contacts.json";
import ContactItem from "../components/ContactItem";
import "../styles/contactPhones.css";

const Contacts = () => {
  return (
    <section className="section-content" id="contacts">
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
