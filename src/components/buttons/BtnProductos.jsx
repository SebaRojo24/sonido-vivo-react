import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function BtnProductos({ className = "mb-2 mb-md-0", variant = "outline-secondary", children = "Volver a Productos" }) {
  return (
    <Button as={Link} to="/" 
      variant={variant} 
      className={className}>
      {children}
    </Button>
  );
}

export default BtnProductos;