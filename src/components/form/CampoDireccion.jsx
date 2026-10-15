import { Form } from "react-bootstrap";

function CampoDireccion({ datos, errores, onChange }) {
  return (
    <>
      <Form.Group className="mb-3" controlId="direccion">
        <Form.Label>Dirección:</Form.Label>
        <Form.Control
          type="text"
          name="direccion"
          value={datos.direccion || ''}
          onChange={onChange}
          isInvalid={Boolean(errores.direccion)}
        />
        <Form.Control.Feedback type="invalid">
          {errores.direccion}
        </Form.Control.Feedback>
      </Form.Group>
    </>
  );
}

export default CampoDireccion;