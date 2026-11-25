import { useState, useEffect } from "react";
import TarjetaProducto from "../components/TarjetaProducto";
import ProductoCard from "../components/ProductoCard";
import CarruselOfertas from "../components/CarruselOfertas";
import { listarProductos } from "../services/productoService";


function Productos({ onAgregar }) { 
  const [categoria, setCategoria] = useState("Todas");

  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function cargarDatos() {
      try {
        const datos = await listarProductos();
        setProductos(datos || []); 
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    }
    cargarDatos();
  }, []);  
  const visibles = categoria === "Todas"
    ? productos
    : productos.filter((producto) => producto.category === categoria);

  if (cargando) return <div className="text-center mt-5"><h4>Cargando catálogo...</h4></div>;
  if (error) return <div className="text-center mt-5 text-danger"><h4>Error: {error}</h4></div>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center text-dark fw-bold">Nuestro Catálogo de Instrumentos 🎸</h2>
      
      {/* Carrusel con los datos reales */}
      <CarruselOfertas productos={productos} />

      <select 
        className="form-select mb-4" 
        value={categoria} 
        onChange={(evento) => setCategoria(evento.target.value)} 
      > 
        <option value="Todas">Todas</option> 
        <option value="Guitarras Acústicas">Guitarras Acústicas</option>
        <option value="Guitarras Eléctricas">Guitarras Eléctricas</option>
        <option value="Bajos Eléctricos">Bajos Eléctricos</option>
        <option value="Baterías">Baterías</option>
        <option value="Teclados y Pianos">Teclados y Pianos</option>
        <option value="Amplificadores">Amplificadores</option>
        <option value="Micrófonos">Micrófonos</option>
        <option value="Pedales de Efectos">Pedales de Efectos</option>
        <option value="Accesorios">Accesorios</option>
        <option value="Estudio y Grabación">Estudio y Grabación</option>
      </select>

      <div className="row g-4">
        {visibles.map((producto) => (
          <div className="col-12 col-md-6 col-lg-4" key={producto.id}>
            <TarjetaProducto producto={producto} onAgregar={onAgregar} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productos;