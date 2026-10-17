import { useState } from 'react';
import { Container, Table, Button, Badge, Alert, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FormularioProducto from './FormularioProducto';

function AdminProductos() {
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Guitarra Eléctrica Fender Stratocaster', categoria: 'Guitarras', precio: 590000, stock: 5 },
    { id: 2, nombre: 'Bajo Eléctrico Ibanez SR300', categoria: 'Bajos', precio: 320000, stock: 2 },
    { id: 3, nombre: 'Batería Acústica Pearl Roadshow', categoria: 'Baterías', precio: 850000, stock: 1 }
  ]);

  const [mensaje, setMensaje] = useState('');

  function guardar(nuevoProducto) {
    const productoConId = {
      ...nuevoProducto,
      id: Date.now()
    };

    setProductos([...productos, productoConId]);
    setMensaje(`Producto "${nuevoProducto.nombre}" guardado con éxito.`);
    setTimeout(() => setMensaje(''), 4000);
  }

  function eliminar(id) {
    setProductos(productos.filter((p) => p.id !== id));
    setMensaje('Producto eliminado del inventario.');
    setTimeout(() => setMensaje(''), 4000);
  }

  return (
    <Container className="py-4">
      {/* Encabezado */}
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <div>
          <h1 className="mb-4 text-center text-dark fw-bold">📦 Administración de Productos</h1>
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
                <th>#</th>
                <th>Nombre</th>
                <th>Categoría</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((p, index) => (
                <tr key={p.id}>
                  <td>{index + 1}</td>
                  <td className="fw-medium">{p.nombre}</td>
                  <td><Badge bg="secondary">{p.categoria}</Badge></td>
                  <td>${p.precio.toLocaleString('es-CL')}</td>
                  <td>
                    {p.stock <= 2 ? (
                      <Badge bg="danger">Crítico: {p.stock}</Badge>
                    ) : (
                      <Badge bg="success">{p.stock}</Badge>
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