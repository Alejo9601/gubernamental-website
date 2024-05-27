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
            placeholder="Introduce your full name ..."
            name="name"
         />
         <input
            className="personal-data"
            type="text"
            placeholder="What is the subject?"
            name="last-name"
         />
         <input
            className="personal-data"
            type="email"
            placeholder="Introduce your e-mail ..."
            name="email"
         />
         <textarea
            className="query"
            rows="10"
            cols="20"
            wrap="soft"
            value="Write your message ..."
         />
         <FormSubmitButton textValue="Enviar" />
      </form>
   );
};

export default ConsultForm;
