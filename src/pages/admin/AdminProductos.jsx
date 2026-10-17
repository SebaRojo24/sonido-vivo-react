import { useState } from 'react';
import { Container, Table, Button, Badge, Alert, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FormularioProducto from "./FormularioProducto";

// Importación con el nombre exacto exportado en productosData.js
import { initialProducts } from '../../data/productosData';

// Importación de las utilidades de persistencia.js
import { guardarFormulario } from '../../utils/persistencia';

function AdminProductos() {
  // Inicializamos el estado con la colección original (initialProducts)
  const [productos, setProductos] = useState(initialProducts || []);
  const [mensaje, setMensaje] = useState('');

  function guardar(nuevoProducto) {
    const productoConId = {
      id: `PROD-${Date.now()}`,
      ...nuevoProducto
    };

    // 1. Guarda en localStorage utilizando tu función reutilizable de persistencia.js
    guardarFormulario('productos', productoConId);

    // 2. Actualiza el estado visual inmediatamente en la tabla
    setProductos([...productos, productoConId]);

    setMensaje(`Producto "${nuevoProducto.name}" guardado con éxito.`);
    setTimeout(() => setMensaje(''), 4000);
  }

  function eliminar(id) {
    const listaActualizada = productos.filter((p) => p.id !== id);
    setProductos(listaActualizada);

    // Sincroniza la lista filtrada en localStorage
    localStorage.setItem('productos', JSON.stringify(listaActualizada));

    setMensaje('Producto eliminado del inventario.');
    setTimeout(() => setMensaje(''), 4000);
  }

  return (
    <Container className="py-4">
      {/* Encabezado */}
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <div>
          <h1 className="mb-1 text-dark fw-bold">📦 Administración de Productos</h1>
          <p className="text-secondary mb-0">Gestión de inventario y alta de nuevos productos</p>
        </div>
        <Link to="/admin" className="btn btn-outline-secondary">
          ⬅️ Volver al Dashboard
        </Link>
      </div>

      {mensaje && <Alert variant="success">{mensaje}</Alert>}

      {/* Formulario Controlado */}
      <FormularioProducto onGuardar={guardar} />

      {/* Tabla de Productos */}
      <Card className="shadow-sm border-0 mt-4">
        <Card.Header className="bg-white py-3">
          <h5 className="fw-bold mb-0">Inventario Actual ({productos.length})</h5>
        </Card.Header>
        <Card.Body className="p-0">
          <Table responsive hover className="mb-0 align-middle">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Categoría</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Oferta</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((p) => (
                <tr key={p.id}>
                  <td className="fw-bold text-muted">{p.id}</td>
                  <td>
                    <img
                      src={p.image || '/img/productos/default.jpg'}
                      alt={p.name}
                      style={{ width: '45px', height: '45px', objectFit: 'cover', borderRadius: '6px' }}
                    />
                  </td>
                  <td className="fw-medium">{p.name}</td>
                  <td><Badge bg="secondary">{p.category}</Badge></td>
                  <td>${p.price?.toLocaleString('es-CL')}</td>
                  <td>
                    {p.stock <= 2 ? (
                      <Badge bg="danger">Crítico: {p.stock}</Badge>
                    ) : (
                      <Badge bg="success">{p.stock}</Badge>
                    )}
                  </td>
                  <td>
                    {p.isOffer ? (
                      <Badge bg="warning" text="dark">Oferta</Badge>
                    ) : (
                      <span className="text-muted small">Normal</span>
                    )}
                  </td>
                  <td>
                    <Button 
                      variant="outline-danger" 
                      size="sm" 
                      onClick={() => eliminar(p.id)}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default AdminProductos;