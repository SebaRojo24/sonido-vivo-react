import { Link, useParams } from "react-router-dom";
import { initialProducts } from "../data/productosData";

function DetalleProducto() {
  // Captura el ID desde la URL (ej: /productos/1)
  const { id } = useParams();

  // Busca el instrumento en el arreglo oficial convirtiendo el ID a String o Número según corresponda
  const producto = initialProducts.find(
    (item) => item.id === String(id) || item.id === Number(id)
  );

  // Control explícito exigido por la pauta si el producto no existe (Evita pantallas en blanco)
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
          {/* Marcador de posición temporal mientras se resuelven las imágenes oficiales */}
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
          <h3 className="text-primary fw-bold mb-4">Precio: ${producto.price.toLocaleString("es-CL")}</h3>
          <Link to="/productos" className="btn btn-outline-primary">
            ← Volver al Catálogo
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetalleProducto;
