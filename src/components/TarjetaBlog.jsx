import { Card, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TarjetaBlog({ blog }) {
  return (
    <Card className="mb-4 shadow-sm border-0">
      <Row className="g-0 align-items-center">
        <Col md={8} className="order-2 order-md-1">
          <Card.Body className="p-4">
            <Card.Title as="h2" className="h4 fw-bold mb-3">
              {blog.titulo}
            </Card.Title>
            <Card.Text className="text-secondary mb-4">
              {blog.resumen}
            </Card.Text>
            <Button 
              as={Link} 
              to={`/blog/${blog.id}`} 
              variant="dark" 
              className="fw-bold"
            >
              VER CASO
            </Button>
          </Card.Body>
        </Col>
        <Col md={4} className="order-1 order-md-2">
          <Card.Img 
            src={blog.imagen} 
            alt={blog.titulo} 
            style={{ height: '220px', objectFit: 'cover' }} 
            className="rounded-end"
          />
        </Col>
      </Row>
    </Card>
  );
}

export default TarjetaBlog;