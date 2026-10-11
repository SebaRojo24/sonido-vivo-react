import { Card, Col } from 'react-bootstrap';

function TarjetaPilar({ imagen, titulo, descripcion }) {
  return (
    <Col xs={12} md={4}>
      <Card className="h-100 shadow-sm border-0">
        <Card.Img 
          variant="top" 
          src={imagen} 
          alt={titulo} 
          style={{ height: '200px', objectFit: 'cover' }} 
        />
        <Card.Body className="d-flex flex-column text-center">
          <Card.Title as="h3" className="h5 fw-bold mb-3">
            {titulo}
          </Card.Title>
          <Card.Text className="text-muted">
            {descripcion}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default TarjetaPilar;