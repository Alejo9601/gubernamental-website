const ContactItem = ({ contactName, phoneNumber }) => {
  return (
    <div className="container" id="contact-item">
      <h3 className="contact-name">{contactName}</h3>
      <div className="contact-phone-number">
        <span>{phoneNumber}</span>
      </div>
    </div>
  );
};

export default ContactItem;
