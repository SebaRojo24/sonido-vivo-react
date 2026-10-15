export function validacionTextoMinimo(texto) {

  return typeof texto === "string" && texto.trim().length > 0;
}

export function validacionTextoMaximo(texto, maximo) {

  return typeof texto === "string" && texto.trim().length <= maximo;
}

export function validacionLetras(texto) {

    const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    return typeof texto === "string" && soloLetras.test(texto);
}

export function validacionLetrasYNumeros(texto) {

    const letrasYNumeros = /^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9\-]+$/;

    return typeof texto === "string" && letrasYNumeros.test(texto);
}

export function validacionLetrasYSimbolos(texto) {

    const letrasYSimbolos = /^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9\s.,:=¿\?\-]+$/;

    return typeof texto === "string" && letrasYSimbolos.test(texto);
}
