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
import { validarRegistro } from "../utils/validarRegistro";

const inicial = { 
  nombre: "", 
  apellido: "", 
  rut: "", 
  region: "", 
  comuna: "", 
  direccion: "", 
  email: "", 
  contrasenna: "",
  categoria: "Usuario" //Se inicializa con valor por defecto; Admin puede asignar otro en su formulario.
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

    //Validación
    const nuevosErrores = validarRegistro(datos, esAdmin);
    setErrores(nuevosErrores);
    if (Object.keys(nuevosErrores).length > 0) return; 

    /*
    Deprecado por charcha: Asignación de categoría por defecto para formulario que no es de administrador:
    const usuarioAGuardar = {
      ...datos,
      categoria: esAdmin ? datos.categoria : "Usuario"
    };
    */

    if (onGuardar) {
      onGuardar(usuarioAGuardar);
    } else {
      guardarFormulario("usuarios", usuarioAGuardar);
    }

    setDatos(inicial);
  }

  return (
    <div className="container mt-2">
      {!onGuardar && <h2 className="mb-4 text-center text-dark fw-bold">Registro de Usuario</h2>}
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