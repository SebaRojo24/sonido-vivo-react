import { useState, useContext } from "react"; 
import { useNavigate } from "react-router-dom";
import { Button, Form, Alert } from "react-bootstrap";
import CampoContrasenna from "../components/form/CampoContrasenna";
import CampoEmail from "../components/form/CampoEmail";
import { validarLogin } from "../utils/validarLogin";

// Importamos el contexto y el servicio
import { AuthContext } from "../context/AuthContext";
import { loginUser } from "../services/authService";

const inicial = { email: "", contrasenna: "" }; 

function Login() { 
  const [datos, setDatos] = useState(inicial); 
  const [errores, setErrores] = useState({}); 
  const [errorGlobal, setErrorGlobal] = useState(null); // Para errores del backend
  
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // Extraemos la función login del contexto

  function cambiar(evento) { 
    const { name, value } = evento.target; 
    setDatos({ ...datos, [name]: value }); 
    setErrorGlobal(null); // Limpiamos el error global si el usuario vuelve a escribir
  } 

  async function enviar(evento) { 
    evento.preventDefault();

    // 1. Validación del frontend
    const nuevosErrores = validarLogin(datos); 
    setErrores(nuevosErrores); 
    if (Object.keys(nuevosErrores).length > 0) return; 

    // 2. Conexión con el Backend
    try {
      // Llamamos al servicio (adaptamos 'contrasenna' a 'password' si el backend está en inglés)
      const data = await loginUser({ 
        email: datos.email, 
        password: datos.contrasenna 
      });

      // 3. Guardamos sesión en el Contexto
      login(data.usuario, data.token);

      // 4. Limpiamos el formulario y redirigimos
      setDatos(inicial); 
      navigate("/"); // Llevamos al usuario al Home
      
    } catch (error) {
      // Si el backend rechaza el login, mostramos este error
      setErrorGlobal("Correo o contraseña incorrectos. Intenta nuevamente.");
    }
  }  

  return ( 
    <div className="container mt-4 mb-5" style={{ maxWidth: "500px" }}>
      <h2 className="mb-4 text-center text-dark fw-bold">Iniciar Sesión</h2>
      
      {/* Alerta para mostrar errores del backend */}
      {errorGlobal && <Alert variant="danger">{errorGlobal}</Alert>}

      <Form onSubmit={enviar} noValidate>
        <CampoEmail datos={datos} errores={errores} onChange={cambiar} />
        <CampoContrasenna datos={datos} errores={errores} onChange={cambiar} />

        <Button type="submit" className="w-100 mt-3" variant="primary">
          Ingresar
        </Button> 
      </Form> 
    </div>
  ); 
} 

export default Login;