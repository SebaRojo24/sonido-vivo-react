import { Link } from "react-router-dom";

function PagoError() {
  return (
    <div className="container mt-5 text-center" style={{ maxWidth: "500px" }}>
      <div className="card shadow-sm p-5 border-0 bg-light">
        <div className="mb-4">
          <span className="fs-1">❌</span>
        </div>
        <h2 className="fw-bold text-danger mb-3">Transacción Rechazada</h2>
        <p className="text-muted mb-4">
          No pudimos procesar tu pago. Por favor, verifica los fondos de tu tarjeta, los datos de facturación o intenta con otro medio de pago.
        </p>
        <div className="d-flex gap-2">
          <Link to="/checkout" className="btn btn-outline-danger w-100 fw-bold">
            Reintentar Pago
          </Link>
          <Link to="/productos" className="btn btn-secondary w-100">
            Ver Catálogo
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PagoError;
