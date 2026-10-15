import { Link, useParams } from "react-router-dom";
import { initialProducts } from "../data/productosData";
import { formatearPrecio } from "../utils/precio"; // <-- Importación oficial de la utilidad

function DetalleProducto() {
  const { id } = useParams();

  const producto = initialProducts.find(
    (item) => item.id === String(id) || item.id === Number(id)
  );

  if (!producto) {
    return (
      <div className="container mt-5 text-center">
        <p className="alert alert-danger">El instrumento solicitado no existe.</p>
        <Link to="/productos" className="btn btn-secondary">Volver al Catálogo</Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-6">
          <img 
            src={`https://placeholder.com{encodeURIComponent(producto.name)}`} 
            alt={producto.name} 
            className="img-fluid rounded shadow-sm"
          />
        </div>
        <div className="col-12 col-md-6">
          <span className="badge bg-secondary mb-2">{producto.category}</span>
          <h1 className="fw-bold text-dark">{producto.name}</h1>
          <p className="text-muted fs-5">{producto.description}</p>
          {/* Reemplazamos el toLocaleString manual por la función centralizada de la pauta */}
          <h3 className="text-primary fw-bold mb-4">Precio: {formatearPrecio(producto.price)}</h3>
          <Link to="/productos" className="btn btn-outline-primary">
            ← Volver al Catálogo
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetalleProducto;
