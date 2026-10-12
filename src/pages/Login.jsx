import { useState } from "react"; 
import { Button, Form } from "react-bootstrap"; 
 
const inicial = { email: "", password: "" }; 
 
function Login() { 
  const [datos, setDatos] = useState(inicial); 
  const [errores, setErrores] = useState({}); 
 
  function cambiar(evento) { 
    const { name, value } = evento.target; 
    setDatos({ ...datos, [name]: value }); 
  } 
 
  function enviar(evento) { 
    evento.preventDefault(); 
    const nuevosErrores = {}; 
 
    if (!datos.email.trim()) nuevosErrores.email = "Campo obligatorio"; 
    if (!datos.password.trim()) nuevosErrores.password = "Campo obligatorio";
 
    setErrores(nuevosErrores); 
    if (Object.keys(nuevosErrores).length > 0) return; 
 
    onGuardar({ ...datos}); 
    setDatos(inicial); 
  }  

  return ( 
    
    <Form onSubmit={enviar} noValidate> 
      <Form.Group className="mb-3" controlId="nombre"> 
        <Form.Label>E-mail:</Form.Label> 
        <Form.Control name="email" value={datos.email} 
          onChange={cambiar} isInvalid={Boolean(errores.email)} /> 
        <Form.Control.Feedback type="invalid"> 
          {errores.email} 
        </Form.Control.Feedback>
        <Form.Label>Password:</Form.Label> 
        <Form.Control name="password" value={datos.password} 
          onChange={cambiar} isInvalid={Boolean(errores.password)} /> 
        <Form.Control.Feedback type="invalid"> 
          {errores.password} 
        </Form.Control.Feedback>  
      </Form.Group> 
      <Button type="submit">Ingresar</Button> 
    </Form> 
  ); 
} 

export default Login;