import { useState } from "react"; 
import { Button, Form } from "react-bootstrap"; 
import { regionesYComunas } from "../data/regionesYComunas";
import { selectorRegionComuna } from "../utils/selectorRegionComuna";

const inicial = { nombre: "", apellido: "", region: "", comuna: ""};

function Registro({ onGuardar }) { 

   
  const {region, comuna, comunasDisponibles, cambiarRegion, cambiarComuna} = selectorRegionComuna();

  const [datos, setDatos] = useState(inicial); 
  const [errores, setErrores] = useState({}); 
 
  function cambiar(evento) { 
    const { name, value } = evento.target; 
    setDatos({ ...datos, [name]: value }); 
  } 
 
  function enviar(evento) { 
    evento.preventDefault(); 
    const nuevosErrores = {}; 
 
    if (!datos.nombre.trim()) nuevosErrores.nombre = "Nombre obligatorio"; 
    if (!datos.apellido.trim()) nuevosErrores.apellido = "Apellido obligatorio";
    if (!region) nuevosErrores.region = "Región obligatoria";
    if (!comuna) nuevosErrores.comuna = "Comuna obligatoria";
 
    setErrores(nuevosErrores); 
    if (Object.keys(nuevosErrores).length > 0) return; 
 
    onGuardar({ ...datos, region, comuna }); 
    setDatos(inicial); 
  } 
 
  return ( 
    
    <Form onSubmit={enviar} noValidate> 
      <Form.Group className="mb-3" controlId="nombre">

        <Form.Label>Nombre:</Form.Label> 
        <Form.Control name="nombre" value={datos.nombre} 
          onChange={cambiar} isInvalid={Boolean(errores.nombre)} /> 
        <Form.Control.Feedback type="invalid"> 
          {errores.nombre} 
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="apellido">
        <Form.Label>Apellido:</Form.Label> 
        <Form.Control name="apellido" value={datos.apellido} 
          onChange={cambiar} isInvalid={Boolean(errores.apellido)} /> 
        <Form.Control.Feedback type="invalid"> 
          {errores.apellido} 
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="region">
        <Form.Label>Región:</Form.Label>
        <Form.Select name="region" value={region} onChange={cambiarRegion} isInvalid={Boolean(errores.region)}>
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
        <Form.Select name="comuna" value={comuna} onChange={cambiarComuna} disabled={!region} isInvalid={Boolean(errores.comuna)}>
          <option value="">
            {region ? '-- Selecciona Comuna --' : '-- Primero elige región --'}
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


       
      <Button type="submit">Enviar Formulario</Button> 
    </Form> 
  ); 
} 

export default Registro;