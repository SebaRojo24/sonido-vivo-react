import React from 'react';
import { Form } from 'react-bootstrap';

function CampoCategoria({ datos, errores, onChange }) {
  return (
    <Form.Group className="mb-3" controlId="categoria">
      <Form.Label>Categoría:</Form.Label>
      <Form.Select
        name="categoria"
        value={datos.categoria || ''}
        onChange={onChange}
        isInvalid={Boolean(errores.categoria)}
      >
        <option value="">-- Seleccione una categoría --</option>
        <option value="Administrador">Administrador</option>
        <option value="Vendedor">Vendedor</option>
        <option value="Usuario">Usuario</option>
      </Form.Select>
      <Form.Control.Feedback type="invalid">
        {errores.categoria}
      </Form.Control.Feedback>
    </Form.Group>
  );
}

export default CampoCategoria;