// src/utils/persistencia.js


export function guardarCarritoLocalStorage(datos) {
  localStorage.setItem(
    "carrito_productos",
    JSON.stringify(datos)
  );
}

export function guardarFormulario(registro, nuevo) {
  const registroExistente = localStorage.getItem(registro);
  
  const lista = registroExistente ? JSON.parse(registroExistente) : [];
  
  lista.push(nuevo);

  localStorage.setItem(
    registro,
    JSON.stringify(lista)
  );
}

export function obtenerRegistro(clave) {
  const datos = localStorage.getItem(clave);
  return datos ? JSON.parse(datos) : [];
}

// --- Capa de servicio para Checkout y Órdenes (Futura API REST) ---
const CLAVE_CHECKOUT = "carrito_checkout";

export function guardarCheckout(productos) {
  // En el futuro: await fetch('/api/checkout', { method: 'POST', body: ... })
  localStorage.setItem(CLAVE_CHECKOUT, JSON.stringify(productos));
}

export function obtenerCheckout() {
  // En el futuro: await fetch('/api/checkout')
  return obtenerRegistro(CLAVE_CHECKOUT);
}

export function limpiarCheckout() {
  // En el futuro: await fetch('/api/checkout', { method: 'DELETE' })
  localStorage.removeItem(CLAVE_CHECKOUT);
}

export function registrarVenta(datosVenta) {
  // En el futuro: await fetch('/api/ventas', { method: 'POST', body: ... })
  guardarFormulario("ventas", datosVenta);
}

export function registrarCompraFrustrada(datosCancelacion) {
  // En el futuro: await fetch('/api/compras-frustradas', { method: 'POST', body: ... })
  guardarFormulario("compras_frustradas", datosCancelacion);
}