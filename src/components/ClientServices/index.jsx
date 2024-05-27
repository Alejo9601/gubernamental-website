import ServiceItem from "./ServiceItem";
import assistance from "../../assets/icon/apoyo.png";
import clock from "../../assets/icon/disponibilidad.png";
import tax from "../../assets/icon/taxes.png";
import "../../styles/procedures.css";

const ClientServices = () => {
   return (
      <section className="section-content" id="procedures">
         <div className="section-title">
            <h1>Procedures</h1>
         </div>
         <div className="grid-container" id="procedures-grid">
            <ServiceItem
               title="Querys"
               description="Officia in officia pariatur in Lorem sint in consequat id minim. "
               image={assistance}
            />
            <ServiceItem
               title="Schedule a shift"
               description="Velit nisi incididunt magna sit in minim officia qui aliqua commodo excepteur quis."
               image={clock}
            />
            <ServiceItem
               title="Taxes"
               description="Deserunt et labore ut amet minim sint cillum sint aliquip dolor amet veniam laboris. "
               image={tax}
            />
         </div>
      </section>
   );
};

export default ClientServices;
