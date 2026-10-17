import { Form } from "react-bootstrap"; 
import { regionesYComunas } from "../../data/regionesYComunas";
import { selectorRegionComuna } from "../../utils/selectorRegionComuna";

function CampoRegionYComuna({ datos, errores, onChange }) {

  const comunasDisponibles = selectorRegionComuna(datos.region, regionesYComunas);

  return (
    <>
      <Form.Group className="mb-3" controlId="region">
        <Form.Label>Región:</Form.Label>
        <Form.Select
          name="region"
          value={datos.region || ""}
          onChange={onChange}
          isInvalid={Boolean(errores.region)}
        >
          <option value="">-- Selecciona Región --</option>
          {regionesYComunas.map((item) => (
            <option key={item.region} value={item.region}>
              {item.region}
            </option>
          ))}
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {errores.region}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="comuna">
        <Form.Label>Comuna:</Form.Label>
        <Form.Select
          name="comuna"
          value={datos.comuna || ""}
          onChange={onChange}
          disabled={!datos.region}
          isInvalid={Boolean(errores.comuna)}
        >
          <option value="">
            {datos.region ? "-- Selecciona Comuna --" : "-- Primero elige región --"}
          </option>
          {comunasDisponibles.map((comuna) => (
            <option key={comuna} value={comuna}>
              {comuna}
            </option>
          ))}
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {errores.comuna}
        </Form.Control.Feedback>
      </Form.Group>
    </>
  );
}

export default CampoRegionYComuna;