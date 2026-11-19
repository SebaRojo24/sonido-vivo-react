import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  obtenerCheckout,
  registrarVenta,
  registrarCompraFrustrada,
} from "../utils/persistencia";

const estadoInicial = {
  nombreCompleto: "",
  correoElectronico: "",
  direccionDespacho: "",
  comuna: "",
};

function Checkout({ limpiarCarrito }) {
  const [datos, setDatos] = useState(estadoInicial);
  const [errores, setErrores] = useState({});
  const [procesando, setProcesando] = useState(false);
  const [segundos, setSegundos] = useState(5);
  const navigate = useNavigate();

  // Recupera el último carrito guardado usando obtenerRegistro
function construirRegistro(estadoOperacion) {
    const productos = obtenerCheckout();
    const total = productos.reduce((acc, item) => acc + (item.price || 0), 0);

    return {
      id: Date.now(),
      fecha: new Date().toLocaleString("es-CL"),
      estado: estadoOperacion,
      cliente: datos,
      productos,
      total,
    };
  }

  function concretarVenta() {
    const registroVenta = construirRegistro("completada");
    registrarVenta(registroVenta);
    limpiarCarrito(); // Limpia estado de App.jsx y carrito_checkout en un solo paso
    navigate("/pago-exitoso");
  }

  function frustrarCompra() {
    setProcesando(false);
    const registroFrustrado = construirRegistro("frustrada");
    registrarCompraFrustrada(registroFrustrado);
    navigate("/pago-error");
  }

  useEffect(() => {
    if (!procesando) return;

    if (segundos === 0) {
      concretarVenta();
      return;
    }

    const temporizador = setTimeout(() => {
      setSegundos((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(temporizador);
  }, [procesando, segundos]);

  function manejarCambio(evento) {
    const { name, value } = evento.target;
    setDatos({
      ...datos,
      [name]: value,
    });
  }

  function manejarEnvio(evento) {
    evento.preventDefault();
    const nuevosErrores = {};

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
    if (Object.keys(nuevosErrores).length > 0) return;

    setSegundos(5);
    setProcesando(true);
  }

  return (
    <div className="container mt-4" style={{ maxWidth: "600px" }}>
      <h2 className="mb-4 text-center text-dark fw-bold">Formulario de Despacho y Pago</h2>
      <div className="card shadow-sm p-4">
        {procesando ? (
          <div className="text-center py-4">
            <div className="spinner-border text-primary mb-3" role="status" />
            <h4 className="fw-bold">Procesando tu pago...</h4>
            <p className="text-muted">
              La transacción se confirmará automáticamente en{" "}
              <span className="fw-bold text-dark">{segundos}</span> segundos.
            </p>
            <button
              type="button"
              onClick={frustrarCompra}
              className="btn btn-outline-danger fw-bold mt-2 px-4"
            >
              Cancelar Compra
            </button>
          </div>
        ) : (
          <form onSubmit={manejarEnvio} noValidate>
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
        )}
      </div>
    </div>
  );
}

export default Checkout;