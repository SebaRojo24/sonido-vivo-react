import { useState } from "react"; 
import { Button, Form } from "react-bootstrap"; 
import CampoNombreYApellido from "../components/form/CampoNombreYApellido";
import CampoRegionYComuna from "../components/form/CampoRegionYComuna";
import CampoRut from "../components/form/CampoRut";
import CampoDireccion from "../components/form/CampoDireccion";
import CampoContrasenna from "../components/form/CampoContrasenna";
import CampoEmail from "../components/form/CampoEmail";
import guardarFormulario from "../utils/persistencia.js";

const inicial = { nombre: "", 
                  apellido: "", 
                  rut: "", 
                  region: "", 
                  comuna: "", 
                  direccion: "", 
                  email: "", 
                  contrasenna: "" 
};

function Registro() { 

  const [datos, setDatos] = useState(inicial); 
  const [errores, setErrores] = useState({}); 
 
  function cambiar(evento) { 
    const { name, value } = evento.target; 
    setDatos({ ...datos, [name]: value }); 
  } 
 
  function enviar(evento) { 
    evento.preventDefault(); 
    const nuevosErrores = {}; 
 
    //Insertar TODAS las validaciones desde funciones
    if (!datos.nombre.trim()) nuevosErrores.nombre = "Nombre obligatorio"; 
    if (!datos.apellido.trim()) nuevosErrores.apellido = "Apellido obligatorio";
 
    setErrores(nuevosErrores); 
    if (Object.keys(nuevosErrores).length > 0) return; 

    //Guardado de datos usando función de persistencia en LS:
    guardarFormulario("usuarios", datos);

    setDatos(inicial); 
  } 
 
 return (
    <div className="container mt-4">
      <h2>Registro de Usuario</h2>
      <Form onSubmit={enviar} noValidate>
        <CampoNombreYApellido datos={datos} errores={errores} onChange={cambiar} />
        <CampoRut datos={datos} errores={errores} onChange={cambiar} />
        <CampoRegionYComuna datos={datos} errores={errores} onChange={cambiar} />
        <CampoDireccion datos={datos} errores={errores} onChange={cambiar} />
        <CampoEmail datos={datos} errores={errores} onChange={cambiar} />
        <CampoContrasenna datos={datos} errores={errores} onChange={cambiar} />

        <Button type="submit">Enviar Formulario</Button>

    </Form>
    </div> 
  ); 
} 

export default Registro;