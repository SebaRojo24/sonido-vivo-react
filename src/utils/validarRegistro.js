import { textoMinimo, textoMaximo, letras, letrasYNumeros } from "./validacionesTexto";
import { validacionFormatoRut, validacionRut } from "./validacionesRut";
import { arrobaEmail, dominioEmail } from "./validacionesEmail";

export function validarRegistro(datos, esAdmin = false) {

    const nuevosErrores = {}
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
    
    return nuevosErrores;
}

export default validarRegistro;