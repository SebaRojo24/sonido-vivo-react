import React from "react";

const CarruselOfertas = ({ productos }) => {
  // Filtrar solo los productos en oferta
  const ofertas = productos.filter((producto) => producto.isOffer);

  if (!ofertas.length) return null;

  return (
    <div
      id="carouselOfertas"
      className="carousel slide container my-3 p-0"
      data-bs-ride="carousel"
      style={{ maxWidth: "1200px", height: "300px" }}
    >
      <h3 className="fw-bold text-center text-danger mb-3">
        ¡Ofertas Exclusivas!
      </h3>
      <div className="carousel-inner h-100 bg-dark text-white rounded">
        {ofertas.map((prod, index) => (
          <div
            key={prod.id}
            className={`carousel-item h-100 ${index === 0 ? "active" : ""}`}
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${prod.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
          >
            <div className="d-flex flex-column justify-content-center align-items-center h-100 p-4 text-center">
              <h3 className="h4 mb-2">{prod.name}</h3>
              <p className="small text-secondary mb-3">{prod.description}</p>
              <span className="fs-3 fw-bold text-warning">
                ${prod.price.toLocaleString('es-CL')}
              </span>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselOfertas"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselOfertas"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default CarruselOfertas;