const API_URL = `${import.meta.env.VITE_API_URL}/productos`;

function mapearProducto(item) {
  return {
    id: item.idProducto,
    name: item.nombre,
    price: item.precio,
    image: item.imagenUrl,
    category: item.categoria ? item.categoria.nombre : "Sin categoría",
    description: item.descripcion || "" 
  };
}

async function procesarRespuesta(response) {
  if (!response.ok) {
    throw new Error(`La API respondió ${response.status}`);
  }
  if (response.status === 204) return null;
  
  const data = await response.json();
  return Array.isArray(data) ? data.map(mapearProducto) : mapearProducto(data);
}

export async function listarProductos() {
  const response = await fetch(API_URL);
  return procesarRespuesta(response);
}