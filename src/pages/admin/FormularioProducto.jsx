import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const inicial = {
  name: "",
  category: "",
  price: "",
  stock: "",
  description: "",
  image: "",
  isOffer: false
};

function FormularioProducto({ onGuardar }) {
  const [datos, setDatos] = useState(inicial);
  const [errores, setErrores] = useState({});

  function cambiar(evento) {
    const { name, value, type, checked } = evento.target;
    setDatos({
      ...datos,
      [name]: type === 'checkbox' ? checked : value
    });
  }

  function enviar(evento) {
    evento.preventDefault();
    const nuevosErrores = {};

    // Validaciones básicas
    if (!datos.name.trim()) nuevosErrores.name = "El nombre es obligatorio";
    if (!datos.category) nuevosErrores.category = "Selecciona una categoría";
    if (!datos.price || Number(datos.price) <= 0) nuevosErrores.price = "El precio debe ser un número positivo";
    if (datos.stock === "" || Number(datos.stock) < 0) nuevosErrores.stock = "El stock no puede ser negativo";
    if (!datos.description.trim()) nuevosErrores.description = "La descripción es obligatoria";

    setErrores(nuevosErrores);

    if (Object.keys(nuevosErrores).length > 0) return;

    onGuardar({
      ...datos,
      price: Number(datos.price),
      stock: Number(datos.stock),
      image: datos.image.trim() || '/img/productos/default.jpg'
    });

    setDatos(inicial);
    setErrores({});
  }

  return (
    <Form onSubmit={enviar} noValidate className="card p-4 shadow-sm mb-4">
      <h4 className="mb-4 text-center text-dark fw-bold">Nuevo Producto</h4>

      {/* Name */}
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Nombre del Producto</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={datos.name}
          onChange={cambiar}
          isInvalid={Boolean(errores.name)}
          placeholder="Ej: Guitarra Acústica Folk Yamaha F310"
        />
        <Form.Control.Feedback type="invalid">
          {errores.name}
        </Form.Control.Feedback>
      </Form.Group>

      <div className="row">
        {/* Category */}
        <div className="col-md-6 mb-3">
          <Form.Group controlId="category">
            <Form.Label>Categoría</Form.Label>
            <Form.Select
              name="category"
              value={datos.category}
              onChange={cambiar}
              isInvalid={Boolean(errores.category)}
            >
              <option value="">-- Selecciona Categoría --</option>
              <option value="Guitarras Acústicas">Guitarras Acústicas</option>
              <option value="Guitarras Eléctricas">Guitarras Eléctricas</option>
              <option value="Bajos">Bajos</option>
              <option value="Baterías">Baterías</option>
              <option value="Teclados">Teclados</option>
              <option value="Audio">Audio y Amplificación</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errores.category}
            </Form.Control.Feedback>
          </Form.Group>
        </div>

        {/* Price */}
        <div className="col-md-3 mb-3">
          <Form.Group controlId="price">
            <Form.Label>Precio ($)</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={datos.price}
              onChange={cambiar}
              isInvalid={Boolean(errores.price)}
              placeholder="Ej: 129990"
            />
            <Form.Control.Feedback type="invalid">
              {errores.price}
            </Form.Control.Feedback>
          </Form.Group>
        </div>

        {/* Stock */}
        <div className="col-md-3 mb-3">
          <Form.Group controlId="stock">
            <Form.Label>Stock</Form.Label>
            <Form.Control
              type="number"
              name="stock"
              value={datos.stock}
              onChange={cambiar}
              isInvalid={Boolean(errores.stock)}
              placeholder="Ej: 8"
            />
            <Form.Control.Feedback type="invalid">
              {errores.stock}
            </Form.Control.Feedback>
          </Form.Group>
        </div>
      </div>

      <div className="row">
        {/* Image */}
        <div className="col-md-8 mb-3">
          <Form.Group controlId="image">
            <Form.Label>URL / Ruta de Imagen</Form.Label>
            <Form.Control
              type="text"
              name="image"
              value={datos.image}
              onChange={cambiar}
              placeholder="Ej: /img/productos/yamaha-f310.jpg"
            />
          </Form.Group>
        </div>

        {/* IsOffer */}
        <div className="col-md-4 mb-3 d-flex align-items-end pb-2">
          <Form.Check
            type="switch"
            id="isOffer"
            name="isOffer"
            label="¿Producto en Oferta?"
            checked={datos.isOffer}
            onChange={cambiar}
          />
        </div>
      </div>

      {/* Description */}
      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Descripción</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="description"
          value={datos.description}
          onChange={cambiar}
          isInvalid={Boolean(errores.description)}
          placeholder="Ej: Tapa de abeto, aros y fondo de meranti. Ideal para iniciantes."
        />
        <Form.Control.Feedback type="invalid">
          {errores.description}
        </Form.Control.Feedback>
      </Form.Group>

      <Button type="submit" variant="primary" className="w-100 fw-bold">
        Guardar Producto
      </Button>
    </Form>
  );
}

export default FormularioProducto;