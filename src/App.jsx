import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navegacion from './components/Navegacion'; // O Navbar.jsx
import Nosotros from './pages/Nosotros';
import Blog from './pages/Blog';
import detalleblog from './pages/detalleBlog'; // Página de detalle del blog

function App() {
  return (
    <BrowserRouter>
      <Navegacion />
      <main id="contenido-principal">
        <Routes>
          <Route path="/nosotros" element={<Nosotros/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/blog/:id" element={<detalleblog/>} /> {/* Ruta para detalle del blog */}
          {/* Agrega aquí más rutas según sea necesario */}
          {/* Otras rutas de la tienda */}
        </Routes>
      </main>

      <PiePagina />
    </BrowserRouter>
  );
}

export default App;
