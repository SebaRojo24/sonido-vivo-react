 function validacionEmail(valor) { 
    
    limpiarError(email, "error-email"); 
    if (valor === "") { 
    mostrarError(email, "error-email", "El e-mail es obligatorio."); 
    return false; 
    } 
    if (!valor.includes("@")) { 
    mostrarError(email, "error-email", "El e-mail debe contener @."); 
    return false; 
    } 
    const dominioPermitido = 
    valor.endsWith("@duoc.cl") || 
    valor.endsWith("@profesor.duoc.cl") ||
    valor.endsWith("@gmail.com"); 
    if (!dominioPermitido) { 
    mostrarError(email, "error-email", "Utiliza un dominio válido: @duoc.cl, @profesor.duoc.cl o @gmail.com"); 
    return false; 
    }
    return true; 
    }