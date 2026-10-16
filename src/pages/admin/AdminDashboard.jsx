import { Container, Row, Col, Card, Button, Table, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AdminDashboard() {
  // Datos simulados para las métricas e historial reciente del panel
  const resumen = {
    comprasTotales: "1,234",
    productosStock: 400,
    usuariosRegistrados: 890,
  };

  const ultimasOrdenes = [
    { id: "ORD-20240701", cliente: "Carlos Pérez", fecha: "10/10/2026", total: 590000, estado: "Completado" },
    { id: "ORD-20240702", cliente: "María González", fecha: "11/10/2026", total: 320000, estado: "Pendiente" },
    { id: "ORD-20240703", cliente: "Juan Tapia", fecha: "11/10/2026", total: 850000, estado: "Completado" },
  ];

  return (
    <Container className="py-4">
      {/* Encabezado del Panel Admin */}
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <div>
          <h1 className="fw-bold mb-1">🛠️ Panel Administrador</h1>
          <p className="text-secondary mb-0">Resumen general de las actividades y métricas de Sonido Vivo</p>
        </div>
        <div className="d-flex gap-2">
          <Link to="/admin/productos" className="btn btn-primary">
            ➕ Gestionar Productos
          </Link>
          <Link to="/AdminUsuarios" className="btn btn-primary">
            Usuarios
          </Link>
          <Link to="/" className="btn btn-outline-secondary">
            🏪 Ir a la Tienda
          </Link>
        </div>
      </div>

      {/* Tarjetas de Métricas Principales (KPIs) */}
      <Row className="g-3 mb-4">
        <Col md={4}>
          <Card className="bg-primary text-white border-0 shadow-sm h-100">
            <Card.Body className="d-flex align-items-center justify-content-between p-4">
              <div>
                <h6 className="text-uppercase fw-semibold mb-1 opacity-75">Ventas / Compras</h6>
                <h2 className="display-6 fw-bold mb-0">{resumen.comprasTotales}</h2>
                <small>↑ 20% respecto al mes anterior</small>
              </div>
              <div className="fs-1">🛒</div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="bg-success text-white border-0 shadow-sm h-100">
            <Card.Body className="d-flex align-items-center justify-content-between p-4">
              <div>
                <h6 className="text-uppercase fw-semibold mb-1 opacity-75">Productos Activos</h6>
                <h2 className="display-6 fw-bold mb-0">{resumen.productosStock}</h2>
                <small>Inventario disponible en tienda</small>
              </div>
              <div className="fs-1">📦</div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="bg-warning text-dark border-0 shadow-sm h-100">
            <Card.Body className="d-flex align-items-center justify-content-between p-4">
              <div>
                <h6 className="text-uppercase fw-semibold mb-1 opacity-75">Usuarios Registrados</h6>
                <h2 className="display-6 fw-bold mb-0">{resumen.usuariosRegistrados}</h2>
                <small className="fw-medium">+120 clientes este mes</small>
              </div>
              <div className="fs-1">👥</div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Módulos de Acceso Rápido */}
      <h3 className="fw-bold mb-3">Módulos Administrativos</h3>
      <Row className="g-3 mb-5">
        <Col md={3} sm={6}>
          <Card className="h-100 text-center shadow-sm border-0">
            <Card.Body className="p-4 d-flex flex-column justify-content-between">
              <div>
                <div className="fs-1 mb-2">🎸</div>
                <Card.Title className="fw-bold">Productos</Card.Title>
                <Card.Text className="text-muted small">
                  Administrar inventario, agregar nuevos productos y controlar stock.
                </Card.Text>
              </div>
              <Link to="/admin/productos" className="btn btn-outline-primary btn-sm mt-3 w-100">
                Ver Productos
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} sm={6}>
          <Card className="h-100 text-center shadow-sm border-0">
            <Card.Body className="p-4 d-flex flex-column justify-content-between">
              <div>
                <div className="fs-1 mb-2">🧾</div>
                <Card.Title className="fw-bold">Órdenes y Boletas</Card.Title>
                <Card.Text className="text-muted small">
                  Gestión y seguimiento de las compras realizadas por clientes.
                </Card.Text>
              </div>
              <Button variant="outline-secondary" size="sm" className="mt-3 w-100" disabled>
                Próximamente
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} sm={6}>
          <Card className="h-100 text-center shadow-sm border-0">
            <Card.Body className="p-4 d-flex flex-column justify-content-between">
              <div>
                <div className="fs-1 mb-2">🏷️</div>
                <Card.Title className="fw-bold">Categorías</Card.Title>
                <Card.Text className="text-muted small">
                  Organizar los instrumentos por categorías (Guitarras, Bajos, Audio).
                </Card.Text>
              </div>
              <Button variant="outline-secondary" size="sm" className="mt-3 w-100" disabled>
                Próximamente
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} sm={6}>
          <Card className="h-100 text-center shadow-sm border-0">
            <Card.Body className="p-4 d-flex flex-column justify-content-between">
              <div>
                <div className="fs-1 mb-2">📈</div>
                <Card.Title className="fw-bold">Reportes</Card.Title>
                <Card.Text className="text-muted small">
                  Generación de informes generales de ingresos y ventas.
                </Card.Text>
              </div>
              <Button variant="outline-secondary" size="sm" className="mt-3 w-100" disabled>
                Próximamente
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Tabla de Actividad Reciente */}
      <Card className="shadow-sm border-0 mb-4">
        <Card.Header className="bg-white py-3">
          <h5 className="fw-bold mb-0">Últimas Órdenes Registradas</h5>
        </Card.Header>
        <Card.Body className="p-0">
          <Table responsive hover className="mb-0 align-middle">
            <thead className="table-light">
              <tr>
                <th>Código</th>
                <th>Cliente</th>
                <th>Fecha</th>
                <th>Total</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {ultimasOrdenes.map((orden) => (
                <tr key={orden.id}>
                  <td className="fw-bold">{orden.id}</td>
                  <td>{orden.cliente}</td>
                  <td>{orden.fecha}</td>
                  <td>${orden.total.toLocaleString("es-CL")}</td>
                  <td>
                    <Badge bg={orden.estado === "Completado" ? "success" : "warning"}>
                      {orden.estado}
                    </Badge>
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

export default AdminDashboard;