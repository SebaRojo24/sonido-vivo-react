import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { initialProducts } from "../data/productosData";
import { formatearPrecio } from "../utils/precio";
import BtnProductos from "../components/buttons/BtnProductos";
import BtnAgregarAlCarrito from "../components/buttons/BtnAgregarAlCarrito";

function DetalleProducto({onAgregar}) {
  const { id } = useParams();

  const producto = initialProducts.find(
    (item) => item.id === String(id) || item.id === Number(id)
  );

  if (!producto) {
    return (
      <div className="container mt-5 text-center">
        <p className="alert alert-danger">El instrumento solicitado no existe.</p>
        <Link to="/" className="btn btn-secondary">Volver al Catálogo</Link>
      </div>
    );
  }
  
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <img 
            src={producto.image} 
            alt={producto.name} 
            className="img-fluid rounded shadow-sm w-100"
            style={{ maxHeight: "450px", objectFit: "cover" }}
          />
        </div>
        <div className="col-12 col-md-6">
          <span className="badge bg-secondary mb-2">{producto.category}</span>
          <h1 className="fw-bold text-dark">{producto.name}</h1>
          <p className="text-muted fs-5">{producto.description}</p>
          <h3 className="text-primary fw-bold mb-4">Precio: {formatearPrecio(producto.price)}</h3>
          <BtnAgregarAlCarrito producto={producto} onAgregar={onAgregar}/>
          <BtnProductos className="w-100"/>

        </div>
      </div>
    </div>
  );
}

export default DetalleProducto;
