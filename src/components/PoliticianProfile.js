import "../styles/politicianProfile.css";
import politician from "../assets/json/politicianProfile.json";

const PoliticianProfile = () => {
  return (
    <section className="section-content" id="politician-profile">
      <div className="grid-container" id="politician-grid">
        <picture className="flex-container politician-img">
          <source srcSet={require("../assets/img/yo.jpg")} />
          <img alt="politician" />
        </picture>
        <div className="flex-container" id="biography">
          <h2>{politician[0].charge}</h2>
          <h1>{politician[0].fullname}</h1>
          <p>{`Asumes in his charge on ${politician[0].dateOfAsumption}`}</p>
          <p>{politician[0].biography}</p>
        </div>
        <div className="flex-container" id="contact-info">
          <p>
            <span> Address: </span>
            <br></br>
            {politician[0].address}
          </p>
          <p>
            <span> Phone Number: </span>
            <br></br>
            {politician[0].phoneNumber}
          </p>
          <p>
            <span> E-Mail: </span>
            <br></br>
            {politician[0].email}
          </p>
          <p>
            <span> Zip-Code: </span>
            <br></br>
            {politician[0].zipCode}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PoliticianProfile;
