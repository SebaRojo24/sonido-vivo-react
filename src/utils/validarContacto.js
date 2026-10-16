import { textoMinimo, textoMaximo, letras, letrasYSimbolos } from "./validacionesTexto";
import { arrobaEmail, dominioEmail } from "./validacionesEmail";

export function validarContacto(datos) {
    const nuevosErrores = {}

    //Nombre
    if (!textoMinimo(datos.nombre, 0)) nuevosErrores.nombre = "Nombre obligatorio"
    else if (!letras(datos.nombre)) nuevosErrores.nombre = "El nombre solo puede contener letras"
    else if (!textoMaximo(datos.nombre, 100)) nuevosErrores.nombre = "El nombre no puede exceder 100 caracteres";
    //Apellido
    if (!textoMinimo(datos.apellido, 0)) nuevosErrores.apellido = "Apellido obligatorio"
    else if (!letras(datos.apellido)) nuevosErrores.apellido = "El apellido solo puede contener letras"
    else if (!textoMaximo(datos.apellido, 100)) nuevosErrores.apellido = "El apellido no puede exceder 100 caracteres";
    //Email
    if (!textoMinimo(datos.email, 0)) nuevosErrores.email = "Email obligatorio"
    else if (!arrobaEmail(datos.email)) nuevosErrores.email = "El Email debe contener un @"
    else if (!dominioEmail(datos.email)) nuevosErrores.email = "El email debe ser @gmail.com, @duoc.cl o @profesor.duoc.cl"
    else if (!textoMaximo(datos.email, 100)) nuevosErrores.email = "El email no puede exceder 100 caracteres";
    //Comentario
    if (!textoMinimo(datos.comentario, 0)) nuevosErrores.comentario = "Mensaje obligatorio"
    else if (!letrasYSimbolos(datos.comentario)) nuevosErrores.comentario = "El mensaje contiene caracteres inválidos"
    else if (!textoMaximo(datos.comentario, 500)) nuevosErrores.comentario = "El mensaje no puede exceder 500 caracteres";

    return nuevosErrores;
}

export default validarContacto;