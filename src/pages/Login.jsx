import { useState } from "react"; 
import { Button, Form } from "react-bootstrap";
import CampoContrasenna from "../components/form/CampoContrasenna";
import CampoEmail from "../components/form/CampoEmail";
 
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
 
    //Completar lógica de validación de email y contraseña respecto de datos guardados en LocalStorage
    if (!datos.email.trim()) nuevosErrores.email = "Campo obligatorio"; 
    if (!datos.password.trim()) nuevosErrores.password = "Campo obligatorio";
 
    setErrores(nuevosErrores); 
    if (Object.keys(nuevosErrores).length > 0) return; 
 
    onGuardar({ ...datos}); 
    setDatos(inicial); 
  }  

  return ( 
    <div className="container mt-4">
      <h2>Iniciar Sesión</h2>
      <Form onSubmit={enviar} noValidate>
        <CampoEmail datos={datos} errores={errores} onChange={cambiar} />
        <CampoContrasenna datos={datos} errores={errores} onChange={cambiar} />

      <Button type="submit">Ingresar</Button> 
      </Form> 
    </div>
  ); 
} 

export default Login;