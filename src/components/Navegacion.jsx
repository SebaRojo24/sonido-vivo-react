import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

function Navegacion() {
  return (
    <Navbar expand="md" bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand as={Link} to="/">🎸 Sonido Vivo</Navbar.Brand>
        <Navbar.Toggle aria-controls="menu-principal" />
        <Navbar.Collapse id="menu-principal">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/productos">Productos</Nav.Link>
            <Nav.Link as={NavLink} to="/nosotros">Nosotros</Nav.Link>
            <Nav.Link as={NavLink} to="/blog">Blogs</Nav.Link>
            <Nav.Link as={NavLink} to="/contacto">Contacto</Nav.Link>
            <Nav.Link as={NavLink} to="/login">Iniciar sesión</Nav.Link>
            <Nav.Link as={NavLink} to="/carrito">🛒 Carrito</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegacion;