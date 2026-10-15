import { Link } from "react-router-dom";
import { formatearPrecio } from "../utils/precio";

function ProductoCard({ producto, onAgregar }) {
  return (
    <article className="card h-100 shadow-sm overflow-hidden">

      <img 
        src={producto.image} 
        alt={producto.name} 
        className="card-img-top"
        style={{ height: "220px", objectFit: "cover" }}
      />
      
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h2 className="h5 text-dark fw-bold">{producto.name}</h2>
          <span className="badge bg-secondary mb-2">{producto.category}</span>
          <p className="fw-bold text-primary h4">Precio: {formatearPrecio(producto.price)}</p>
          <p className="text-muted">Stock disponible: {producto.stock}</p>
          

          {producto.stock > 0 && producto.stock <= 3 && (
            <p className="text-danger fw-bold m-0">¡Últimas unidades!</p>
          )}
        </div>

        <div className="mt-3">
          <Link to={`/productos/${producto.id}`} className="btn btn-outline-secondary w-100 mb-2">
            Ver Detalle
          </Link>

          <button
            className="btn btn-primary w-100"
            onClick={() => onAgregar(producto)}
            disabled={producto.stock === 0}
          >
            {producto.stock === 0 ? "Agotado" : "Agregar al carrito"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductoCard;
