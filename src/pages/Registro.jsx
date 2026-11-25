import { useState } from "react"; 
import { useNavigate } from "react-router-dom";
import { Button, Form, Alert } from "react-bootstrap"; 
import CampoNombreYApellido from "../components/form/CampoNombreYApellido";
import CampoRegionYComuna from "../components/form/CampoRegionYComuna";
import CampoRut from "../components/form/CampoRut";
import CampoDireccion from "../components/form/CampoDireccion";
import CampoContrasenna from "../components/form/CampoContrasenna";
import CampoEmail from "../components/form/CampoEmail";
import CampoCategoria from "../components/form/CampoCategoria";
import { validarRegistro } from "../utils/validarRegistro";

// Importamos el servicio del backend en lugar de guardar en localStorage
import { registerUser } from "../services/authService";

const inicial = { 
  nombre: "", 
  apellido: "", 
  rut: "", 
  region: "", 
  comuna: "", 
  direccion: "", 
  email: "", 
  contrasenna: "",
  categoria: "Usuario" // Se inicializa con valor por defecto; Admin puede asignar otro.
};

function Registro({ onGuardar, onCancelar, esAdmin = false }) { 
  const [datos, setDatos] = useState(inicial); 
  const [errores, setErrores] = useState({}); 
  const [errorGlobal, setErrorGlobal] = useState(null);
  
  const navigate = useNavigate();

  function cambiar(evento) { 
    const { name, value } = evento.target; 
    setDatos(prev => ({ ...prev, [name]: value })); 
    setErrorGlobal(null);
  } 

  async function enviar(evento) { 
    evento.preventDefault(); 

    // Validación
    const nuevosErrores = validarRegistro(datos, esAdmin);
    setErrores(nuevosErrores);
    if (Object.keys(nuevosErrores).length > 0) return; 

    //  Preparamos los datos (adaptamos contrasenna a password para el backend)
    const usuarioAGuardar = {
      ...datos,
      password: datos.contrasenna
    };
    delete usuarioAGuardar.contrasenna; // Limpiamos el campo viejo

    //  Flujo para el panel de Administrador
    if (onGuardar) {
      onGuardar(usuarioAGuardar);
      setDatos(inicial);
      return;
    }

    // Flujo para registro normal de un cliente
    try {
      await registerUser(usuarioAGuardar);
      
      setDatos(inicial);
      alert("Registro exitoso. Ahora puedes iniciar sesión.");
      navigate("/login"); 

    } catch (error) {
      setErrorGlobal("Error al registrar: El correo o RUT ya podrían estar en uso.");
    }
  }

  return (
    // Agregamos un maxWidth para que en la vista normal no ocupe toda la pantalla
    <div className="container mt-2 mb-5" style={{ maxWidth: esAdmin ? "100%" : "600px" }}>
      {!onGuardar && <h2 className="mb-4 text-center text-dark fw-bold">Registro de Usuario</h2>}
      
      {errorGlobal && <Alert variant="danger">{errorGlobal}</Alert>}

      <Form onSubmit={enviar} noValidate>
        <CampoNombreYApellido datos={datos} errores={errores} onChange={cambiar} />
        <CampoRut datos={datos} errores={errores} onChange={cambiar} />
        <CampoRegionYComuna datos={datos} errores={errores} onChange={cambiar} />
        <CampoDireccion datos={datos} errores={errores} onChange={cambiar} />
        <CampoEmail datos={datos} errores={errores} onChange={cambiar} />
        <CampoContrasenna datos={datos} errores={errores} onChange={cambiar} />
        {esAdmin && (
          <CampoCategoria datos={datos} errores={errores} onChange={cambiar} />
        )}

        <div className="d-flex justify-content-end gap-2 mt-4">
          {onCancelar && (
            <Button variant="secondary" type="button" onClick={onCancelar}>
              Cancelar
            </Button>
          )}

          <Button variant="primary" type="submit">
            Registrar
          </Button>
        </div>
      </Form>
    </div> 
  ); 
} 

export default Registro;