import { Form } from "react-bootstrap";

function CampoEmail({ datos, errores, onChange }) {
  return (
    <>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email:</Form.Label>
        <Form.Control
          type="text"
          name="email"
          value={datos.email || ''}
          onChange={onChange}
          isInvalid={Boolean(errores.email)}
        />
        <Form.Control.Feedback type="invalid">
          {errores.email}
        </Form.Control.Feedback>
      </Form.Group>
    </>
  );
}

export default CampoEmail;