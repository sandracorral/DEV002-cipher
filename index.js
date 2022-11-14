import cipher from './cipher.js';

console.log(cipher);
console.log("hola mundo");
window.addEventListener("load", inicio, true);
const CajaTexto = document.getElementById("CajaDeTexto");

function inicio() {

    /*Para hacer todo el texto en mayúsculas*/

    //keyup es para que cuando se deje de presionar cada tecla, la letra se convierta en mayúscula//
    CajaTexto.addEventListener("keyup", function () {
        CajaTexto.value = CajaTexto.value.toUpperCase();
    });
    
    /*Cifrar*/
    document.getElementById("Cifrar").addEventListener("click", function () {
        //para llamar a la caja de texto//
        let texto = document.getElementById("CajaDeTexto").value;
        //para que funcione el desplazamiento del cifrado//
        let desplazamiento = document.getElementById("desplazamiento").value;
        document.getElementById("MensajeCifrado").value = cipher.encode(desplazamiento, texto);
    }, true);

    /*Descifrar*/
    document.getElementById("Descifrar").addEventListener("click", function () {
        //para llamar a la caja de texto//
        let texto = document.getElementById("CajaDeTexto").value;
        //para que funcione el desplazamiento del cifrado//
        let desplazamiento = document.getElementById("desplazamiento").value;
        document.getElementById("MensajeCifrado").value = cipher.decode(desplazamiento, texto);
    }, true);
}