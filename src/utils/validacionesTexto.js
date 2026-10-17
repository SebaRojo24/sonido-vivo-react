export function texto(valor) {
   typeof valor === "string";
}

export function textoMinimo(texto, minimo) {

  return typeof texto === "string" && texto.trim().length > minimo;
}

export function textoMaximo(texto, maximo) {

  return typeof texto === "string" && texto.trim().length <= maximo;
}

export function letras(texto) {

    const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    return typeof texto === "string" && soloLetras.test(texto);
}

export function letrasYNumeros(texto) {

    const letrasYNumeros = /^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9\s\-]+$/;

    return typeof texto === "string" && letrasYNumeros.test(texto);
}

export function letrasYSimbolos(texto) {

    const letrasYSimbolos = /^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9\s.,:=¿\?\-]+$/;

    return typeof texto === "string" && letrasYSimbolos.test(texto);
}

export default { texto, textoMinimo, textoMaximo, letras, letrasYNumeros, letrasYSimbolos }