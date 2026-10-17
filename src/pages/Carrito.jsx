import { Link } from "react-router-dom";

function Carrito({ productosCarrito, onEliminar }) {
  // Si el carrito está vacío, muestra un mensaje controlado y un botón para volver
  if (productosCarrito.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <h2 className="mb-4 text-center text-dark fw-bold">Tu Carrito está vacío 🛒</h2>
        <p className="text-muted">Aún no has agregado ningún instrumento musical a tu selección.</p>
        <Link to="/productos" className="btn btn-primary mt-3">
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
          {/* Recorremos el arreglo de estado que viene desde App.jsx */}
          {productosCarrito.map((item) => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center py-3 flex-wrap">
              <div className="col-12 col-md-8">
                <h5 className="mb-1 fw-bold">{item.name}</h5>
                <span className="badge bg-secondary">{item.category}</span>
              </div>
              <div className="col-12 col-md-4 d-flex justify-content-between align-items-center mt-2 mt-md-0">
                <span className="fw-bold text-primary fs-5">
                  ${item.price.toLocaleString("es-CL")}
                </span>
                {/* Botón obligatorio para eliminar elementos respetando la Guía 10 */}
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
          <Link to="/productos" className="btn btn-outline-secondary mb-2 mb-md-0">
            ← Seguir Comprando
          </Link>
          <Link to="/checkout" className="btn btn-success px-4 fw-bold">
            Proceder al Pago
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Carrito;
