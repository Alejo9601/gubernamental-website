import PaperworkItem from "./PaperworkItem";
import "../styles/paperworkGrid.css";

const PaperworkGrid = () => {
  return (
    <div className="grid-container" id="paperwork">
      <PaperworkItem
        title="Tramite 1"
        description="Descripcion del servicio que no vale un pco pero bueno para algo "
      />
      <PaperworkItem
        title="Tramite 1"
        description="Descripcion del servicio que no vale un pco pero bueno para algo "
      />
      <PaperworkItem
        title="Tramite 1"
        description="Descripcion del servicio que no vale un pco pero bueno para algo "
      />
    </div>
  );
};

export default PaperworkGrid;
