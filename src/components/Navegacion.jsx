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
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/nosotros">Nosotros</NavLink>
            <NavLink className="nav-link" to="/blog">Blogs</NavLink>
            <NavLink className="nav-link" to="/contacto">Contacto</NavLink>
            <NavLink className="nav-link" to="/login">Iniciar sesión</NavLink>
            <NavLink className="nav-link" to="/registro">Registrarse</NavLink>
            <NavLink className="nav-link" to="/carrito">🛒 Carrito</NavLink>
            <Nav.Link as={NavLink} to="/admin" className="fw-bold text-primary">⚙️ Admin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegacion;