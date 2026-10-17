import { useState } from "react";
import ProductoCard from "../components/ProductoCard";
import  CarruselOfertas  from "../components/CarruselOfertas";

function Productos({ productos, onAgregar }) {
  // 1. Estado para recordar la categoría seleccionada (Inicia en "Todas")
  const [categoria, setCategoria] = useState("Todas");

  // 2. Filtrado dinámico usando la propiedad correcta "category"
  const visibles = categoria === "Todas"
    ? productos
    : productos.filter((producto) => producto.category === categoria);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center text-dark fw-bold">Nuestro Catálogo de Instrumentos 🎸</h2>

      <CarruselOfertas productos={productos} />

      {/* Menú desplegable interactivo */}
      <select
        className="form-select mb-4"
        value={categoria}
        onChange={(evento) => setCategoria(evento.target.value)}
      >
        <option>Guitarras Eléctricas</option>
        <option>Guitarras Acústicas</option>
        <option>Bajos Eléctricos</option>
        <option>Baterías</option>
        <option>Teclados y Pianos</option>
        <option>Amplificadores</option>
        <option>Micrófonos</option>
        <option>Pedales de Efectos</option>
        <option>Accesorios</option>
        <option>Estudio y Grabación</option>
      </select>

      {/* Grilla que ahora muestra únicamente los productos visibles filtrados */}
      <div className="row g-4">
        {visibles.map((producto) => (
          <div className="col-12 col-md-6 col-lg-4" key={producto.id}>
            <ProductoCard producto={producto} onAgregar={onAgregar} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productos;
