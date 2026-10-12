import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const inicial = {
  nombre: "",
  categoria: "",
  precio: "",
  stock: "",
  descripcion: "",
  imagen: ""
};

function FormularioProducto({ onGuardar }) {
  const [datos, setDatos] = useState(inicial);
  const [errores, setErrores] = useState({});

  // Manejador único para actualizar los inputs por el atributo name
  function cambiar(evento) {
    const { name, value } = evento.target;
    setDatos({ ...datos, [name]: value });
  }

  function enviar(evento) {
    evento.preventDefault();
    const nuevosErrores = {};

    // Validaciones
    if (!datos.nombre.trim()) nuevosErrores.nombre = "El nombre es obligatorio";
    if (!datos.categoria) nuevosErrores.categoria = "Selecciona una categoría";
    if (!datos.precio || Number(datos.precio) <= 0) nuevosErrores.precio = "El precio debe ser un número positivo";
    if (datos.stock === "" || Number(datos.stock) < 0) nuevosErrores.stock = "El stock no puede ser negativo";
    if (!datos.descripcion.trim()) nuevosErrores.descripcion = "La descripción es obligatoria";

    setErrores(nuevosErrores);

    // Si existen errores, se detiene la ejecución
    if (Object.keys(nuevosErrores).length > 0) return;

    // Enviar objeto validado con conversión a número
    onGuardar({
      ...datos,
      precio: Number(datos.precio),
      stock: Number(datos.stock),
      imagen: datos.imagen.trim() || '/img/productos/default.jpg'
    });

    // Reiniciar el formulario
    setDatos(inicial);
    setErrores({});
  }

  return (
    <Form onSubmit={enviar} noValidate className="card p-4 shadow-sm mb-4">
      <h4 className="mb-3">Nuevo Producto</h4>

      {/* Nombre */}
      <Form.Group className="mb-3" controlId="nombre">
        <Form.Label>Nombre del Producto</Form.Label>
        <Form.Control
          type="text"
          name="nombre"
          value={datos.nombre}
          onChange={cambiar}
          isInvalid={Boolean(errores.nombre)}
          placeholder="Ej: Guitarra Eléctrica Fender Stratocaster"
        />
        <Form.Control.Feedback type="invalid">
          {errores.nombre}
        </Form.Control.Feedback>
      </Form.Group>

      <div className="row">
        {/* Categoría */}
        <div className="col-md-6 mb-3">
          <Form.Group controlId="categoria">
            <Form.Label>Categoría</Form.Label>
            <Form.Select
              name="categoria"
              value={datos.categoria}
              onChange={cambiar}
              isInvalid={Boolean(errores.categoria)}
            >
              <option value="">-- Selecciona Categoría --</option>
              <option value="Guitarras">Guitarras</option>
              <option value="Bajos">Bajos</option>
              <option value="Baterías">Baterías</option>
              <option value="Teclados">Teclados</option>
              <option value="Audio">Audio y Amplificación</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errores.categoria}
            </Form.Control.Feedback>
          </Form.Group>
        </div>

        {/* Precio */}
        <div className="col-md-3 mb-3">
          <Form.Group controlId="precio">
            <Form.Label>Precio ($)</Form.Label>
            <Form.Control
              type="number"
              name="precio"
              value={datos.precio}
              onChange={cambiar}
              isInvalid={Boolean(errores.precio)}
              placeholder="Ej: 590000"
            />
            <Form.Control.Feedback type="invalid">
              {errores.precio}
            </Form.Control.Feedback>
          </Form.Group>
        </div>

        {/* Stock */}
        <div className="col-md-3 mb-3">
          <Form.Group controlId="stock">
            <Form.Label>Cupos / Stock</Form.Label>
            <Form.Control
              type="number"
              name="stock"
              value={datos.stock}
              onChange={cambiar}
              isInvalid={Boolean(errores.stock)}
              placeholder="Ej: 5"
            />
            <Form.Control.Feedback type="invalid">
              {errores.stock}
            </Form.Control.Feedback>
          </Form.Group>
        </div>
      </div>

      {/* Descripción */}
      <Form.Group className="mb-3" controlId="descripcion">
        <Form.Label>Descripción</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="descripcion"
          value={datos.descripcion}
          onChange={cambiar}
          isInvalid={Boolean(errores.descripcion)}
          placeholder="Descripción detallada del instrumento..."
        />
        <Form.Control.Feedback type="invalid">
          {errores.descripcion}
        </Form.Control.Feedback>
      </Form.Group>

      <Button type="submit" variant="primary">
        Guardar Producto
      </Button>
    </Form>
  );
}

export default FormularioProducto;