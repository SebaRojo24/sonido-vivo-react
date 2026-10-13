import { Routes, Route } from "react-router-dom";
import { initialProducts } from './data/productosData'; // <-- Agregamos tus datos
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
  // Función temporal requerida por la Guía 10 para capturar el evento del click
  function agregarTemporal(producto) {
    console.log("Producto seleccionado en consola:", producto.name);
  }

  return (
    <>
      <Navegacion />
      <Routes>
        <Route path="/" element={<Inicio />} />
        {/* Modificamos esta ruta para pasarle los productos y la función */}
        <Route 
          path="/productos" 
          element={<Productos productos={initialProducts} onAgregar={agregarTemporal} />} 
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
