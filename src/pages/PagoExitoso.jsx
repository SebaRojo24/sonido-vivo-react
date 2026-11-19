import BtnProductos from "../components/buttons/BtnProductos";

function PagoExitoso() {
  return (
    <div className="container mt-5 text-center" style={{ maxWidth: "500px" }}>
      <div className="card shadow-sm p-5 border-0 bg-light">
        <div className="mb-4">
          <span className="fs-1">✅</span>
        </div>
        <h2 className="fw-bold text-success mb-3">¡Pago Confirmado!</h2>
        <p className="text-muted mb-4">
          Tu transacción ha sido procesada con éxito. Hemos enviado el comprobante y los detalles del despacho a tu correo electrónico.
        </p>
        <BtnProductos className="w-100"/>
      </div>
    </div>
  );
}

export default PagoExitoso;
