
const cipher = {
  encode: (offset, string) {
    if (!string)
      return "";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    offset = (offset % 26 + 26) % 26;
    return string.replace(/[A-Z]/ig, c => letras[(letras.indexOf(c) + offset) % 26]);
  },

  decode: (offset, string) {
    if (!string)
      return "";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    offset = (offset % 26 - 26) % 26;
    return string.replace(/[A-Z]/ig, c => letras[(letras.indexOf(c) - offset) % 26]);
  }
};

export default cipher;



/* Funciones cifrado*/
/*
 function cifrar(texto, desplazamiento) {
  if (!texto)
      return "";
  const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  desplazamiento = (desplazamiento % 26 + 26) % 26;
  return texto.replace(/[A-Z]/ig, c => letras[(letras.indexOf(c) + desplazamiento) % 26]);
}

Funciones descifrado

function descifrar(texto, desplazamiento) {
  if (!texto)
      return "";
  const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  desplazamiento = (desplazamiento % 26 - 26) % 26;
  return texto.replace(/[A-Z]/ig, c => letras[(letras.indexOf(c) - desplazamiento) % 26]);
}
*/