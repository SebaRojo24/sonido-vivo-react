import { useState } from "react"; 
import { Button, Form } from "react-bootstrap"; 
import CampoNombreYApellido from "../components/form/CampoNombreYApellido";
import CampoRegionYComuna from "../components/form/CampoRegionYComuna";
import CampoRut from "../components/form/CampoRut";
import CampoDireccion from "../components/form/CampoDireccion";
import CampoContrasenna from "../components/form/CampoContrasenna";
import CampoEmail from "../components/form/CampoEmail";
import CampoCategoria from "../components/form/CampoCategoria";
import { guardarFormulario } from "../utils/persistencia";
import { textoMinimo, textoMaximo, letras, letrasYNumeros } from "../utils/validacionesTexto";
import { validacionFormatoRut, validacionRut } from "../utils/validacionesRut";
import { arrobaEmail, dominioEmail } from "../utils/validacionesEmail";

const inicial = { 
  nombre: "", 
  apellido: "", 
  rut: "", 
  region: "", 
  comuna: "", 
  direccion: "", 
  email: "", 
  contrasenna: "",
  categoria: ""
};

function Registro({ onGuardar, onCancelar, esAdmin = false }) { 
  const [datos, setDatos] = useState(inicial); 
  const [errores, setErrores] = useState({}); 

  function cambiar(evento) { 
    const { name, value } = evento.target; 
    setDatos(prev => ({ ...prev, [name]: value })); 
  } 

  function enviar(evento) { 
    evento.preventDefault(); 
    const nuevosErrores = {};

    //VALIDACIONES
    //Nombre
    if (!textoMinimo(datos.nombre, 0)) nuevosErrores.nombre = "Nombre obligatorio";
    else if (!letras(datos.nombre)) nuevosErrores.nombre = "El nombre solo puede contener letras";
    else if (!textoMaximo(datos.nombre, 100)) nuevosErrores.nombre = "El nombre no puede exceder 100 caracteres";
    //Apellido
    if (!textoMinimo(datos.apellido, 0)) nuevosErrores.apellido = "Apellido obligatorio";
    else if (!letras(datos.apellido)) nuevosErrores.apellido = "El apellido solo puede contener letras";
    else if (!textoMaximo(datos.apellido, 100)) nuevosErrores.apellido = "El apellido no puede exceder 100 caracteres";
    //Rut
    if (!textoMinimo(datos.rut, 0)) nuevosErrores.rut = "Rut obligatorio";
    else if (!textoMinimo(datos.rut, 7) || !textoMaximo(datos.rut, 9)) nuevosErrores.rut = "El rut debe contener entre 7 y 9 caracteres";
    else if (!validacionFormatoRut(datos.rut)) nuevosErrores.rut = "Ingrese RUT sin puntos ni guión";
    else if (!validacionRut(datos.rut)) nuevosErrores.rut = "Rut inválido";
    //Región y Comuna
    if (!textoMinimo(datos.region, 0)) nuevosErrores.region = "Región obligatoria";
    if (!textoMinimo(datos.comuna, 0)) nuevosErrores.comuna = "Comuna obligatoria";
    //Email
    if (!textoMinimo(datos.email, 0)) nuevosErrores.email = "Email obligatorio";
    else if (!arrobaEmail(datos.email)) nuevosErrores.email = "El email debe contener un @";
    else if (!dominioEmail(datos.email)) nuevosErrores.email = "El email debe ser @gmail.com, @duoc.cl o @profesor.duoc.cl";
    else if (!textoMaximo(datos.email, 100)) nuevosErrores.email = "El email no puede exceder 100 caracteres";
    //Dirección
    if (!textoMinimo(datos.direccion, 0)) nuevosErrores.direccion = "Dirección obligatoria";
    else if (!letrasYNumeros(datos.direccion)) nuevosErrores.direccion = "La dirección solo puede contener letras y números";
    else if (!textoMaximo(datos.direccion, 300)) nuevosErrores.direccion = "La dirección no puede exceder 300 caracteres";
    //Contraseña
    if (!textoMinimo(datos.contrasenna, 0)) nuevosErrores.contrasenna = "Contraseña obligatoria";
    else if (!textoMinimo(datos.contrasenna, 3) || !textoMaximo(datos.contrasenna, 10)) nuevosErrores.contrasenna = "La contraseña debe contener entre 4 y 10 caracteres";

    //Categoría
    if (esAdmin && !textoMinimo(datos.categoria, 0)) nuevosErrores.categoria = "Debe seleccionar una categoría";
    
    setErrores(nuevosErrores); 
    if (Object.keys(nuevosErrores).length > 0) return; 

    // Asignación de "usuario" por defecto para formulario que no es de administrador.
    const usuarioAGuardar = {
      ...datos,
      categoria: esAdmin ? datos.categoria : "Usuario"
    };

    if (onGuardar) {
      onGuardar(usuarioAGuardar);
    } else {
      guardarFormulario("usuarios", usuarioAGuardar);
    }

    setDatos(inicial);
  }

  return (
    <div className="container mt-2">
      {!onGuardar && <h2>Registro de Usuario</h2>}
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