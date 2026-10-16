export function arrobaEmail(valor) { 
     
   return valor.includes("@"); 
} 

export function dominioEmail(valor) {
   const dominioPermitido = 
   valor.endsWith("@duoc.cl") || 
   valor.endsWith("@profesor.duoc.cl") ||
   valor.endsWith("@gmail.com"); 
   return dominioPermitido; 
}

export default { arrobaEmail, dominioEmail };