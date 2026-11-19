import { Link, useNavigate } from "react-router-dom";
import { guardarCheckout } from "../utils/persistencia";

function Carrito({ productosCarrito, onEliminar }) {
  const navigate = useNavigate();

  const handleIrACheckout = () => {
    guardarCheckout(productosCarrito);
    navigate("/checkout");
  };

  if (productosCarrito.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <h2 className="mb-4 text-center text-dark fw-bold">Tu Carrito está vacío 🛒</h2>
        <p className="text-muted">Aún no has agregado ningún instrumento musical a tu selección.</p>
        <Link to="/" className="btn btn-primary mt-3">
          Ir al Catálogo de Productos
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center text-dark fw-bold">Carrito de Compras</h2>
      <div className="card shadow-sm p-4">
        <ul className="list-group list-group-flush mb-4">
          {productosCarrito.map((item) => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center py-3 flex-wrap">
              <div className="col-12 col-md-8">
                <h5 className="mb-1 fw-bold">{item.name}</h5>
                <span className="badge bg-secondary">{item.category}</span>
              </div>
              <div className="col-12 col-md-4 d-flex justify-content-between align-items-center mt-2 mt-md-0">
                <span className="fw-bold text-primary fs-5">
                  ${(item.price || 0).toLocaleString("es-CL")}
                </span>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onEliminar(item.id)}
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>

        <div className="d-flex justify-content-between align-items-center pt-3 border-top flex-wrap">
          <Link to="/" className="btn btn-outline-secondary mb-2 mb-md-0">
            ← Seguir Comprando
          </Link>
          <button
            type="button"
            onClick={handleIrACheckout}
            className="btn btn-success px-4 fw-bold"
          >
            Proceder al Pago
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carrito;