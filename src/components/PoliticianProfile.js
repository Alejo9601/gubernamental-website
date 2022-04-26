import "../styles/politicianProfile.css";

const PoliticianProfile = () => {
  return (
    <section className="section-content" id="politician-profile">
      <div className="grid-container" id="politician-grid">
        <picture className="flex-container politician-img">
          <source srcSet={require("../assets/img/man.png")} />
          <img alt="politician" />
        </picture>
        <div className="container" id="biography">
          <h1>Fullname of the politician</h1>
          <p>
            Laborum anim cupidatat amet tempor incididunt aute cillum. Minim
            officia cillum eiusmod id dolore id excepteur aute cillum aute
            tempor magna. Sint nostrud elit ex id quis commodo aliquip aute id
            consequat minim culpa sunt. Consequat eu id pariatur reprehenderit
            laboris veniam aliqua amet.
          </p>
        </div>
        <div className="container" id="contact-info">
          <h1>Fullname of the politician</h1>
          <p>
            Laborum anim cupidatat amet tempor incididunt aute cillum. Minim
            officia cillum eiusmod id dolore id excepteur aute cillum aute
            tempor magna. Sint nostrud elit ex id quis commodo aliquip aute id
            consequat minim culpa sunt. Consequat eu id pariatur reprehenderit
            laboris veniam aliqua amet.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PoliticianProfile;
