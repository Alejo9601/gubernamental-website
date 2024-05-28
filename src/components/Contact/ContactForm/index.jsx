import FormSubmitButton from "../../FormSubmitButton";

const ConsultForm = () => {
   const handleSubmit = (e) => {
      e.preventDefault();
   };

   return (
      <form onSubmit={handleSubmit}>
         <input
            className="personal-data"
            type="text"
            placeholder="Introduce tu nombre completo"
            name="name"
         />
         <input
            className="personal-data"
            type="text"
            placeholder="Asunto del mensaje"
            name="last-name"
         />
         <input
            className="personal-data"
            type="email"
            placeholder="Introduce tu correo electronico"
            name="email"
         />
         <textarea
            className="query"
            rows="10"
            cols="20"
            wrap="soft"
            placeholder="Escribe el mensaje"
         />
         <FormSubmitButton textValue="Enviar" />
      </form>
   );
};

export default ConsultForm;
