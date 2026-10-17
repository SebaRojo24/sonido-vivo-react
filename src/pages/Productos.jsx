import { useState, useEffect } from "react";
import ProductoCard from "../components/ProductoCard";
import { getProducts } from "../services/storageService";

function Productos({ productos: productosProp, onAgregar }) {
  // 1. Estado para almacenar la lista de productos
  const [listaProductos, setListaProductos] = useState(productosProp || []);

  // 2. Estado para recordar la categoría seleccionada (Inicia en "Todas")
  const [categoria, setCategoria] = useState("Todas");

  // Cargar productos desde localStorage al montar el componente si no se pasaron por props
  useEffect(() => {
    if (!productosProp || productosProp.length === 0) {
      setListaProductos(getProducts());
    } else {
      setListaProductos(productosProp);
    }
  }, [productosProp]);

  // 3. Filtrado dinámico (soporta tanto 'categoria' como 'category')
  const visibles = categoria === "Todas"
    ? listaProductos
    : listaProductos.filter(
        (producto) => producto.categoria === categoria || producto.category === categoria
      );

  return (
    <div className="container mt-4 py-2">
      <h2 className="mb-4 text-center fw-bold">Nuestro Catálogo de Instrumentos 🎸</h2>

      {/* Menú desplegable interactivo para filtrar por categoría */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-6 col-lg-4">
          <label htmlFor="filtro-categoria" className="form-label fw-semibold text-secondary">
            Filtrar por Categoría:
          </label>
          <select
            id="filtro-categoria"
            className="form-select shadow-sm"
            value={categoria}
            onChange={(evento) => setCategoria(evento.target.value)}
          >
            <option value="Todas">Todas las categorías</option>
            <option value="Guitarras">Guitarras</option>
            <option value="Bajos">Bajos</option>
            <option value="Baterías">Baterías</option>
            <option value="Percusión">Percusión</option>
            <option value="Teclados">Teclados</option>
            <option value="Audio">Audio y Amplificación</option>
          </select>
        </div>
      </div>

      {/* Grilla que muestra únicamente los productos visibles filtrados */}
      {visibles.length === 0 ? (
        <div className="text-center py-5">
          <p className="lead text-muted">No hay productos disponibles en esta categoría.</p>
        </div>
      ) : (
        <div className="row g-4">
          {visibles.map((producto) => (
            <div className="col-12 col-md-6 col-lg-4" key={producto.id}>
              <ProductoCard producto={producto} onAgregar={onAgregar} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Productos;