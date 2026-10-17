import { initialProducts } from '../data/productosData';

const PRODUCTS_KEY = 'sonido_vivo_products';

// Obtener productos (si no existen en localStorage, guarda y retorna initialProducts)
export const getProducts = () => {
  const data = localStorage.getItem(PRODUCTS_KEY);
  if (!data) {
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(initialProducts));
    return initialProducts;
  }
  try {
    return JSON.parse(data);
  } catch (error) {
    console.error("Error al parsear localStorage:", error);
    return initialProducts;
  }
};

// Guardar lista completa
export const saveProducts = (products) => {
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
};

// Agregar un nuevo producto al inicio del arreglo
export const addProduct = (newProduct) => {
  const products = getProducts();
  const productWithId = {
    ...newProduct,
    id: Date.now().toString()
  };
  const updatedList = [productWithId, ...products];
  saveProducts(updatedList);
  return updatedList;
};

// Eliminar un producto por ID
export const deleteProduct = (id) => {
  const products = getProducts();
  const updatedList = products.filter((p) => String(p.id) !== String(id));
  saveProducts(updatedList);
  return updatedList;
};

// Restaurar inventario inicial
export const resetProducts = () => {
  saveProducts(initialProducts);
  return initialProducts;
};