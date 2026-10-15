import { Form } from "react-bootstrap";

function CampoRut({ datos, errores, onChange }) {
  return (
    <>
      <Form.Group className="mb-3" controlId="rut">
        <Form.Label>Rut:</Form.Label>
        <Form.Control
          type="text"
          name="rut"
          value={datos.rut || ''}
          onChange={onChange}
          isInvalid={Boolean(errores.rut)}
        />
        <Form.Control.Feedback type="invalid">
          {errores.rut}
        </Form.Control.Feedback>
      </Form.Group>
    </>
  );
}

export default CampoRut;