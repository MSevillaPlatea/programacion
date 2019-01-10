//
// ──────────────────────────────────────────────────── I ──────────
//   :::::: O N C L I C : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────
//


/* 
var boton = document.getElementById("boton");


boton.onclick = function() {
    console.log("hola mundo");
}
 */

//
// ────────────────────────────────────────────────────────────────── I ──────────
//   :::::: C A M B I A R   C O L O R : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────
//



/* var boton = document.getElementById("boton");

var box = document.getElementById("caja");


boton.onclick = function() {

    box.classList.add("box_otro");
    box.classList.remove("box");


} */

//
// ──────────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: C A M B I A R   C O L O R   T O G G L E : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────────────
//

var boton = document.getElementById("boton");

var box = document.getElementById("caja");


//console.log(box.indexOf("box"));

boton.onclick = function() {

    box.classList.toggle("otro");


    // var esnegro = box.indexOf("otro") !== -1;

    // console.log(box.indexOf("otro"));

    /* if (esnegro) {
        box.classList.add("otro");
        box.classList.remove("box");
    } else {
        box.classList.add("box");
        box.classList.remove("otro");
    } */

}



//
// ────────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: V A L I D A R   C A M P O   V A C I O : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────────
//

var campo = document.getElementById("campo");



campo.onblur = function() {




}