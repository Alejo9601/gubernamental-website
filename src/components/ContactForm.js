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
      <textarea
        className="query"
        rows="10"
        cols="20"
        wrap="soft"
        value="Redacte su mensaje ..."
      />
      <input className="send-data" type="submit" defaultValue="Enviar" />
    </form>
  );
};

export default ConsultForm;
