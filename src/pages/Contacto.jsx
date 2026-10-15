import { useState } from "react"; 
import { Button, Form } from "react-bootstrap"; 
import CampoNombreYApellido from "../components/form/CampoNombreYApellido";
import CampoEmail from "../components/form/CampoEmail";
import CampoComentario from "../components/form/CampoComentario";
import guardarFormulario from "../utils/persistencia.js";

const inicial = { nombre: "", 
                  apellido: "",  
                  email: "", 
                  comentario: "" 
};

function Contacto() { 

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
    guardarFormulario("contacto", datos);

    setDatos(inicial); 
  } 
 
 return (
    <div className="container mt-4">
      <h2>Formulario de Contacto</h2>
      <Form onSubmit={enviar} noValidate>
        <CampoNombreYApellido datos={datos} errores={errores} onChange={cambiar} />
        <CampoEmail datos={datos} errores={errores} onChange={cambiar} />
        <CampoComentario datos={datos} errores={errores} onChange={cambiar} />

        <Button type="submit">Enviar Formulario</Button> 

    </Form>
    </div> 
  ); 
} 

export default Contacto;