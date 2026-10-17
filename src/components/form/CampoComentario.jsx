import { Form } from "react-bootstrap";

function CampoComentario({ datos, errores, onChange }) {
  return (
    <>
      <Form.Group className="mb-3" controlId="comentario">
        <Form.Label>Comentario:</Form.Label>
        <Form.Control
          as="textarea"
          rows={10}
          type="text"
          name="comentario"
          value={datos.comentario || ''}
          onChange={onChange}
          isInvalid={Boolean(errores.comentario)}
        />
        <Form.Control.Feedback type="invalid">
          {errores.comentario}
        </Form.Control.Feedback>
      </Form.Group>
    </>
  );
}

export default CampoComentario;