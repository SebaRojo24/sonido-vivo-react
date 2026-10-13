import { useState, useEffect } from "react"; 
import { Routes, Route } from "react-router-dom";
import { initialProducts } from './data/productosData';
import Navegacion from "./components/Navegacion";
import Inicio from "./pages/Inicio";
import Productos from "./pages/Productos";
import Nosotros from "./pages/Nosotros";
import Blog from "./pages/Blog";
import DetalleBlog from "./pages/DetalleBlog";
import NoEncontrada from "./pages/NoEncontrada"; 
import PiePagina from "./components/PiePagina";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminProductos from "./pages/admin/AdminProductos";
import Registro from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  // 1. Inicialización inteligente: Recupera el carrito guardado en el navegador o inicia vacío
  const [carrito, setCarrito] = useState(() => {
    const guardados = localStorage.getItem("carrito_productos");
    return guardados ? JSON.parse(guardados) : [];
  });

  // 2. Efecto oficial para guardar automáticamente en localStorage al añadir productos
  useEffect(() => {
    localStorage.setItem(
      "carrito_productos",
      JSON.stringify(carrito)
    );
  }, [carrito]); // Dependencia exacta del estado del carrito

  // 3. Función para agregar productos respetando la inmutabilidad
  function agregarProducto(producto) {
    const yaExiste = carrito.some((item) => item.id === producto.id);
    if (yaExiste) return;

    setCarrito([...carrito, producto]);
  }

  return (
    <>
      <Navegacion />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route
          path="/productos"
          element={<Productos productos={initialProducts} onAgregar={agregarProducto} />}
        />
        <Route path="/nosotros" element={<Nosotros/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/signup" element={<Registro/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/blog/:id" element={<DetalleBlog/>} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/productos" element={<AdminProductos />} />
        <Route path="*" element={<NoEncontrada />} />
      </Routes>
      <PiePagina />
    </>
  );
}

export default App;
