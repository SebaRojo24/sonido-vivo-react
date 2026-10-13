function ProductoCard({ producto, onAgregar }) {
  return (
    <article className="card h-100 shadow-sm">
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h2 className="h5 text-dark fw-bold">{producto.name}</h2>
          <span className="badge bg-secondary mb-2">{producto.category}</span>
          <p className="fw-bold text-primary h4">Precio: ${producto.price}</p>
          <p className="text-muted">Stock disponible: {producto.stock}</p>
          
          {/* Alerta responsiva si quedan pocas unidades */}
          {producto.stock > 0 && producto.stock <= 3 && (
            <p className="text-danger fw-bold m-0">¡Últimas unidades!</p>
          )}
        </div>

        <button
          className="btn btn-primary w-100 mt-3"
          onClick={() => onAgregar(producto)}
          disabled={producto.stock === 0}
        >
          {producto.stock === 0 ? "Agotado" : "Agregar al carrito"}
        </button>
      </div>
    </article>
  );
}

export default ProductoCard;
