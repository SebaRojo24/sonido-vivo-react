import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Estado inicial limpio del formulario según la estructura de la guía
const estadoInicial = {
  nombreCompleto: "",
  correoElectronico: "",
  direccionDespacho: "",
  comuna: "",
};

function Checkout({ vaciarCarrito }) {
  const [datos, setDatos] = useState(estadoInicial);
  const [errores, setErrores] = useState({});
  const navigate = useNavigate(); // Hook oficial para redirigir de página

  // Manejador único onChange para actualizar el estado dinámicamente usando 'name'
  function manejarCambio(evento) {
    const { name, value } = evento.target;
    setDatos({
      ...datos,
      [name]: value,
    });
  }

  // Lógica oficial de validación al hacer submit
  function manejarEnvio(evento) {
    evento.preventDefault();
    const nuevosErrores = {};

    // Validaciones manuales basadas en la Guía 11
    if (!datos.nombreCompleto.trim()) {
      nuevosErrores.nombreCompleto = "El nombre completo es obligatorio";
    }
    if (!datos.correoElectronico.trim()) {
      nuevosErrores.correoElectronico = "El correo electrónico es obligatorio";
    } else if (!datos.correoElectronico.includes("@")) {
      nuevosErrores.correoElectronico = "El correo debe incluir un @ válido";
    }
    if (!datos.direccionDespacho.trim()) {
      nuevosErrores.direccionDespacho = "La dirección de despacho es obligatoria";
    }
    if (!datos.comuna.trim()) {
      nuevosErrores.comuna = "La comuna es obligatoria";
    }

    setErrores(nuevosErrores);

    // Si el objeto de errores tiene alguna propiedad, se detiene el flujo
    if (Object.keys(nuevosErrores).length > 0) return;

    // Simulación del negocio: Si todo está bien, vacía el carrito y redirige al éxito
    vaciarCarrito();
    navigate("/pago-exitoso");
  }

  return (
    <div className="container mt-4" style={{ maxWidth: "600px" }}>
      <h2 className="mb-4 text-center text-dark fw-bold">Formulario de Despacho y Pago</h2>
      <div className="card shadow-sm p-4">
        <form onSubmit={manejarEnvio} noValidate>
          
          {/* Campo: Nombre Completo */}
          <div className="mb-3">
            <label className="form-label fw-bold">Nombre Completo</label>
            <input
              type="text"
              name="nombreCompleto"
              className={`form-control ${errores.nombreCompleto ? "is-invalid" : ""}`}
              value={datos.nombreCompleto}
              onChange={manejarCambio}
            />
            {errores.nombreCompleto && (
              <div className="invalid-feedback">{errores.nombreCompleto}</div>
            )}
          </div>

          {/* Campo: Correo Electrónico */}
          <div className="mb-3">
            <label className="form-label fw-bold">Correo Electrónico</label>
            <input
              type="email"
              name="correoElectronico"
              className={`form-control ${errores.correoElectronico ? "is-invalid" : ""}`}
              value={datos.correoElectronico}
              onChange={manejarCambio}
            />
            {errores.correoElectronico && (
              <div className="invalid-feedback">{errores.correoElectronico}</div>
            )}
          </div>

          {/* Campo: Dirección de Despacho */}
          <div className="mb-3">
            <label className="form-label fw-bold">Dirección de Despacho</label>
            <input
              type="text"
              name="direccionDespacho"
              className={`form-control ${errores.direccionDespacho ? "is-invalid" : ""}`}
              value={datos.direccionDespacho}
              onChange={manejarCambio}
            />
            {errores.direccionDespacho && (
              <div className="invalid-feedback">{errores.direccionDespacho}</div>
            )}
          </div>

          {/* Campo: Comuna */}
          <div className="mb-4">
            <label className="form-label fw-bold">Comuna</label>
            <input
              type="text"
              name="comuna"
              className={`form-control ${errores.comuna ? "is-invalid" : ""}`}
              value={datos.comuna}
              onChange={manejarCambio}
            />
            {errores.comuna && (
              <div className="invalid-feedback">{errores.comuna}</div>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-100 fw-bold py-2">
            Confirmar y Simular Transacción
          </button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
