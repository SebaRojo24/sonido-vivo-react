export function guardarFormulario(registro, nuevo) {
  const registroExistente = localStorage.getItem(registro);
  
  const lista = registroExistente ? JSON.parse(registroExistente) : [];

  lista.push(nuevo);

  localStorage.setItem(
    registro, 
    JSON.stringify(lista));
}