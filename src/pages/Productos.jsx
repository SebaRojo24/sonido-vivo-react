import ProductoCard from "../components/ProductoCard";

function Productos({ productos, onAgregar }) {
  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center fw-bold">Nuestro Catálogo de Instrumentos 🎸</h2>
      <div className="row g-4">        
        {productos.map((producto) => (
          <div className="col-12 col-md-6 col-lg-4" key={producto.id}>
            <ProductoCard producto={producto} onAgregar={onAgregar} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productos;
