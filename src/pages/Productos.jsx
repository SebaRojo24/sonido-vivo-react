import { useState } from "react";
import ProductoCard from "../components/ProductoCard";

function Productos({ productos, onAgregar }) {
  // 1. Estado para recordar la categoría seleccionada (Inicia en "Todas")
  const [categoria, setCategoria] = useState("Todas");

  // 2. Filtrado dinámico usando la propiedad correcta "category"
  const visibles = categoria === "Todas"
    ? productos
    : productos.filter((producto) => producto.category === categoria);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center fw-bold">Nuestro Catálogo de Instrumentos 🎸</h2>

      {/* Menú desplegable interactivo */}
      <select
        className="form-select mb-4"
        value={categoria}
        onChange={(evento) => setCategoria(evento.target.value)}
      >
        <option>Todas</option>
        <option>Guitarras</option>
        <option>Bajos</option>
        <option>Percusión</option>
        <option>Teclados</option>
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
