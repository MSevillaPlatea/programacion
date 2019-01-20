//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: V A R I A B L E S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//



var texto
var palabra

//
// ────────────────────────────────────────────────────── I ──────────
//   :::::: F U N C I O N : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────
//



function comparar(texto, palabra) {

    if (typeof texto === "string" && typeof palabra === "string") {
        if (texto.indexOf(palabra) !== -1) {
            return true;
        } else {
            return false
        }

    } else {
        return false
    }

}


console.log(comparar("hola mundo", "hola"));

console.log(comparar($("#parrafo").text(), "Lorem"));

//console.log($("#parrafo").text());

//console.log(document.getElementById("parrafo").innerText);