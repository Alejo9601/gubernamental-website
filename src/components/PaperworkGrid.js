import PaperworkItem from "./PaperworkItem";
import "../styles/paperworkGrid.css";

const PaperworkGrid = () => {
  return (
    <div className="grid-container" id="paperwork">
      <PaperworkItem
        title="Consultas"
        description="Descripcion del servicio que no vale un pco pero bueno para algo "
        image={require("../assets/icon/apoyo.png")}
      />
      <PaperworkItem
        title="Turnos"
        description="Descripcion del servicio que no vale un pco pero bueno para algo "
        image={require("../assets/icon/disponibilidad.png")}
      />
      <PaperworkItem
        title="Impuestos"
        description="Descripcion del servicio que no vale un pco pero bueno para algo "
        image={require("../assets/icon/taxes.png")}
      />
    </div>
  );
};

export default PaperworkGrid;
