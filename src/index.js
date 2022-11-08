import cipher from './cipher.js';

console.log(cipher);
console.log("hola mundo");
//window.addEventListener("load", inicio, true);
const CajaTexto = document.getElementById("CajaDeTexto");

//function inicio() {

    /*Para hacer todo el texto en mayúsculas*/
    CajaTexto.addEventListener("keyup", function () {
        CajaTexto.value = CajaTexto.value.toUpperCase();
    });
    
    /*Cifrar*/
    document.getElementById("cifrar").addEventListener("click", function () {
        let texto = document.getElementById("CajaDeTexto").value;
        let desplazamiento = document.getElementById("desplazamiento").value;
        document.getElementById("MensajeCifrado").value = cipher.encode(desplazamiento, texto);
    }, true);

    /*Descifrar*/
    document.getElementById("descifrar").addEventListener("click", function () {
        let texto = document.getElementById("CajaDeTexto").value;
        let desplazamiento = document.getElementById("desplazamiento").value;
        document.getElementById("MensajeCifrado").value = cipher.decode(desplazamiento, texto);
    }, true);
//}


    /*Funciones cifrado*/
/*
    function cifrar(texto, desplazamiento) {
        if (!texto)
            return "";
        const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        desplazamiento = (desplazamiento % 26 + 26) % 26;
        return texto.replace(/[A-Z]/ig, c => letras[(letras.indexOf(c) + desplazamiento) % 26]);
    }

    function descifrar(texto, desplazamiento) {
        if (!texto)
            return "";
        const theAlfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        desplazamiento = (desplazamiento % 26 - 26) % 26;
        return texto.replace(/[A-Z]/ig, c => theAlfa[(theAlfa.indexOf(c) - desplazamiento) % 26]);
    } */
