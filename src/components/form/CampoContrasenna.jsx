import { Form } from "react-bootstrap";

function CampoContrasenna({ datos, errores, onChange }) {
  return (
    <>
      <Form.Group className="mb-3" controlId="contrasenna">
        <Form.Label>Contraseña:</Form.Label>
        <Form.Control
          type="password"
          name="contrasenna"
          value={datos.contrasenna || ''}
          onChange={onChange}
          isInvalid={Boolean(errores.contrasenna)}
        />
        <Form.Control.Feedback type="invalid">
          {errores.contrasenna}
        </Form.Control.Feedback>
      </Form.Group>
    </>
  );
}

export default CampoContrasenna;