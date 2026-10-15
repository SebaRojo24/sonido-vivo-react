// src/utils/persistencia.js
export function guardarCarritoLocalStorage(datos) {
  localStorage.setItem(
    "carrito_productos",
    JSON.stringify(datos)
  );
}
