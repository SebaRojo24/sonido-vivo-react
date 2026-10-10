import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
 
function Navegacion() {
  return (
    <Navbar expand="md" bg="dark" data-bs-theme="dark">
      <Container>
        <Link to="/" className="navbar-brand">Sonido Vivo</Link>
        <Navbar.Toggle aria-controls="menu-principal" />
        <Navbar.Collapse id="menu-principal">
          <nav className="ms-auto d-flex gap-3">
            <Link to="/" className="nav-link">Inicio</Link>
            <Link to="/products" className="nav-link">Productos</Link>
          </nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
 
export default Navegacion;