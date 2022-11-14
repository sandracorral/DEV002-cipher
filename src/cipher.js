
const cipher = {

  //para cifrar el texto//
  encode: (offset, string) => {

    //TypeError//
    if (!offset) {
      throw new TypeError("Define tu desplazamiento")
    }
    if (!string) {
      throw new TypeError("Escribe tu texto")
    }

    //Cifrar//
    if (!string)
      return "";
    //constante para utilizar solo letras mayúsculas//
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //fórmula para el cifrado//
    offset = (offset % 26 + 26) % 26;
    return string.replace(/[A-Z]/ig, c => letras[(letras.indexOf(c) + offset) % 26]);
  },

  //para descifrar el texto//
  decode: (offset, string) => {

    //TypeError//
    if (!offset) {
      throw new TypeError("Define tu desplazamiento")
    }
    if (!string) {
      throw new TypeError("Escribe tu texto")
    }

    //Descifrar//
    if (!string)
      return "";
    //constante para utilizar solo letras mayúsculas//
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //fórmula para descifrar el texto//
    offset = (offset % 26 - 26) % 26;
    return string.replace(/[A-Z]/ig, c => letras[(letras.indexOf(c) - offset) % 26]);
  }
};

export default cipher;