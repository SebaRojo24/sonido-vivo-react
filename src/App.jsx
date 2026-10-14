import { useState, useEffect } from "react"; 
import { Routes, Route } from "react-router-dom";
import { initialProducts } from './data/productosData';
import Navegacion from "./components/Navegacion";
import Inicio from "./pages/Inicio";
import Productos from "./pages/Productos";
import DetalleProducto from "./pages/DetalleProducto";
import Carrito from "./pages/Carrito"; 
import Checkout from "./pages/Checkout";
import PagoExitoso from "./pages/PagoExitoso";
import PagoError from "./pages/PagoError";
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
  const [carrito, setCarrito] = useState(() => {
    const guardados = localStorage.getItem("carrito_productos");
    return guardados ? JSON.parse(guardados) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "carrito_productos",
      JSON.stringify(carrito)
    );
  }, [carrito]);

  function agregarProducto(producto) {
    const yaExiste = carrito.some((item) => item.id === producto.id);
    if (yaExiste) return;
    setCarrito([...carrito, producto]);
  }

  function eliminarProducto(id) {
    setCarrito(
      carrito.filter((item) => item.id !== id)
    );
  }

  // 2. Función oficial para limpiar el carrito al confirmar la compra (Guía 11)
  function limpiarCarrito() {
    setCarrito([]);
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
        <Route path="/productos/:id" element={<DetalleProducto />} />
        
        <Route 
          path="/carrito" 
          element={<Carrito productosCarrito={carrito} onEliminar={eliminarProducto} />} 
        />

        {/* 3. Conectamos la ruta de Checkout pasándole la función de limpieza */}
        <Route 
          path="/checkout" 
          element={<Checkout vaciarCarrito={limpiarCarrito} />} 
        />
        
        <Route path="/nosotros" element={<Nosotros/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/signup" element={<Registro/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/blog/:id" element={<DetalleBlog/>} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/productos" element={<AdminProductos />} />
        <Route path="*" element={<NoEncontrada />} />
        <Route path="/pago-exitoso" element={<PagoExitoso />} />
        <Route path="/pago-error" element={<PagoError />} />

      </Routes>
      <PiePagina />
    </>
  );
}

export default App;
