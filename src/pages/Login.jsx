import { useState } from "react"; 
import { Button, Form } from "react-bootstrap";
import CampoContrasenna from "../components/form/CampoContrasenna";
import CampoEmail from "../components/form/CampoEmail";
import { textoMinimo, textoMaximo } from "../utils/validacionesTexto";
import { arrobaEmail, dominioEmail } from "../utils/validacionesEmail";
 
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
 
  //Email
  if (!textoMinimo(datos.email, 0)) nuevosErrores.email = "Email obligatorio"
  else if (!arrobaEmail(datos.email)) nuevosErrores.email = "El Email debe contener un @"
  else if (!dominioEmail(datos.email)) nuevosErrores.email = "El email debe ser @gmail.com, @duoc.cl o @profesor.duoc.cl"
  else if (!textoMaximo(datos.email, 100)) nuevosErrores.email = "El email no puede exceder 100 caracteres";
  //Contraseña
  if (!textoMinimo(datos.contrasenna, 0)) nuevosErrores.contrasenna = "Contraseña obligatoria" 
  else if (!textoMinimo(datos.contrasenna, 3) || !textoMaximo(datos.contrasenna, 10)) nuevosErrores.contrasenna = "La contraseña debe contener entre 4 y 10 caracteres"
 
    setErrores(nuevosErrores); 
    if (Object.keys(nuevosErrores).length > 0) return; 
 
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