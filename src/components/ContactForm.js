import "../styles/contactForm.css";

const ConsultForm = () => {
  return (
    <form>
      <input
        className="personal-data"
        type="text"
        placeholder="Introduzca su nombre"
        name="name"
      />
      <input
        className="personal-data"
        type="text"
        placeholder="Introduzca su apellido"
        name="last-name"
      />
      <input
        className="personal-data"
        type="email"
        placeholder="Introduzca su correo electronico"
        name="email"
      />
      <textarea className="consult" rows="10" cols="20" wrap="soft">
        Redacte su mensaje...
      </textarea>
      <input className="send-data" type="submit" value="Enviar" />
    </form>
  );
};

export default ConsultForm;
