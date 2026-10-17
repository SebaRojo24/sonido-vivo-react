import { useState, useEffect } from 'react';
import { Container, Table, Button, Badge, Alert, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FormularioProducto from './FormularioProducto';
import { getProducts, addProduct, deleteProduct, resetProducts } from '../../services/storageService';

function AdminProductos() {
  const [productos, setProductos] = useState([]);
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    setProductos(getProducts());
  }, []);

  function guardar(nuevoProducto) {
    const listaActualizada = addProduct(nuevoProducto);
    setProductos(listaActualizada);
    setMensaje(`Producto guardado con éxito.`);
    setTimeout(() => setMensaje(''), 4000);
  }

  function eliminar(id) {
    const listaActualizada = deleteProduct(id);
    setProductos(listaActualizada);
    setMensaje('Producto eliminado del inventario.');
    setTimeout(() => setMensaje(''), 4000);
  }

  function restaurar() {
    const listaInicial = resetProducts();
    setProductos(listaInicial);
    setMensaje('Inventario restaurado a los datos iniciales.');
    setTimeout(() => setMensaje(''), 4000);
  }

  return (
    <Container className="py-4">
      {/* Encabezado */}
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <div>
          <h1 className="fw-bold mb-1">📦 Administración de Productos</h1>
          <p className="text-secondary mb-0">Gestión de inventario con persistencia en localStorage</p>
        </div>
        <div className="d-flex gap-2">
          <Button variant="outline-warning" size="sm" onClick={restaurar}>
            🔄 Restaurar Iniciales
          </Button>
          <Link to="/admin" className="btn btn-outline-secondary btn-sm">
            ⬅️ Volver al Dashboard
          </Link>
        </div>
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
                <th>#</th>
                <th>Nombre</th>
                <th>Categoría</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((p, index) => {
                const nombre = p.name || p.nombre;
                const categoria = p.category || p.categoria;
                const precio = p.price || p.precio || 0;
                const stock = p.stock ?? 0;

                return (
                  <tr key={p.id}>
                    <td>{index + 1}</td>
                    <td className="fw-medium">{nombre}</td>
                    <td><Badge bg="secondary">{categoria}</Badge></td>
                    <td>${precio.toLocaleString('es-CL')}</td>
                    <td>
                      {stock <= 2 ? (
                        <Badge bg="danger">Crítico: {stock}</Badge>
                      ) : (
                        <Badge bg="success">{stock}</Badge>
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
                );
              })}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default AdminProductos;