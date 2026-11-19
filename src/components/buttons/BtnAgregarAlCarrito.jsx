import { Button } from "react-bootstrap";

function BtnAgregarAlCarrito({producto, onAgregar, className = "mb-2 mb-md-0 w-100", children = "Agregar al carrito"}) {
  const sinStock = !producto || producto.stock <= 0;
    return (
      <Button
        variant={sinStock ? "secondary" : "primary"}
        className={className}
        onClick={() => onAgregar(producto)}
        disabled={sinStock}
      >
        {sinStock ? "Producto agotado" : children}
      </Button>
    );
  }

export default BtnAgregarAlCarrito;