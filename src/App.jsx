import Navegacion from './components/Navegacion';
import ProductoCard from './components/ProductoCard';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
 
function Home() {
  return (
    <div className="container mt-5">
      <div className="p-5 mb-4 bg-light rounded-3 shadow-sm text-center">
        <h1 className="display-4 fw-bold text-primary">Sonido Vivo</h1>
        <p className="lead">Tienda de Instrumentos Musicales y Equipamiento de Audio</p>
        <Link to="/products" className="btn btn-primary btn-lg">Ver Catálogo</Link>
      </div>
    </div>
  );
}
 
function Products() {
  return (
    <div className="container mt-4">
      <h2>Catálogo de Productos</h2>
      <ProductoCard />
    </div>
  );
}
 
function App() {
  return (
    <BrowserRouter>
      <Navegacion />
 
      <main className="py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
 
export default App;