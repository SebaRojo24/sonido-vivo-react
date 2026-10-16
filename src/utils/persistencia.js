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

export function obtenerFormulario(clave) {
  const datos = localStorage.getItem(clave);
  return datos ? JSON.parse(datos) : [];
}
