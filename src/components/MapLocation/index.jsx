export default function MapLocation() {
   return (
      <div className="map-container">
         <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.4401078603014!2d-72.21387312331605!3d-51.57849683815221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbdb01c6ce02f5c9b%3A0xc495d77f1cd5e066!2sMunicipalidad%2028%20de%20Noviembre!5e0!3m2!1ses!2sar!4v1716920129075!5m2!1ses!2sar"
            style={{ border: 0 }}
            allowfullscreen={false}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
         ></iframe>
         <span>Localidad de 28 de Noviembre</span>
         <span>Tte del castillo 458</span>
      </div>
   );
}
