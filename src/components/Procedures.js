import ProcedureItem from "./ProcedureItem";
import "../styles/procedures.css";

const Procedures = () => {
  return (
    <section className="section-content">
      <div className="section-title" id="procedures">
        <h1>Procedures</h1>
      </div>
      <div className="grid-container" id="procedures-grid">
        <ProcedureItem
          title="Querys"
          description="Officia in officia pariatur in Lorem sint in consequat id minim. "
          image={require("../assets/icon/apoyo.png")}
        />
        <ProcedureItem
          title="Schedule a shift"
          description="Velit nisi incididunt magna sit in minim officia qui aliqua commodo excepteur quis."
          image={require("../assets/icon/disponibilidad.png")}
        />
        <ProcedureItem
          title="Taxes"
          description="Deserunt et labore ut amet minim sint cillum sint aliquip dolor amet veniam laboris. "
          image={require("../assets/icon/taxes.png")}
        />
      </div>
    </section>
  );
};

export default Procedures;
