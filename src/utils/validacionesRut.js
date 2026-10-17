export function validacionFormatoRut(valor) {

    const formatoRut = /^[0-9]{7,8}[0-9Kk]$/; 
    
    const rut = valor.trim();

    return formatoRut.test(rut); 
} 


export function validacionRut(rut) {

    const cuerpo = rut.slice(0, -1); 
    const digitoIngresado = rut.slice(-1).toUpperCase(); 
    let suma = 0; 
    let multiplicador = 2; 
    
    for (let posicion = cuerpo.length - 1; posicion >= 0; posicion--) { 
        suma = suma + Number(cuerpo[posicion]) * multiplicador; 
        multiplicador = multiplicador === 7 ? 2 : multiplicador + 1; 
    } 
    
    const resto = 11 - (suma % 11); 
    let digitoCalculado = String(resto); 
    
    if (resto === 11) digitoCalculado = "0"; 
    if (resto === 10) digitoCalculado = "K"; 
    
    return digitoIngresado === digitoCalculado;; 
  }

  export default { validacionFormatoRut, validacionRut
  };