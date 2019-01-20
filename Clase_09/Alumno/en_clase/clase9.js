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

/* var boton = document.getElementById("boton");

var box = document.getElementById("caja");


console.log(box.indexOf("box"));

boton.onclick = function() {

    box.classList.toggle("otro"); */


// var esnegro = box.indexOf("otro") !== -1;

// console.log(box.indexOf("otro"));

/* if (esnegro) {
    box.classList.add("otro");
    box.classList.remove("box");
} else {
    box.classList.add("box");
    box.classList.remove("otro");
} 

}*/



//
// ────────────────────────────────────────────────────────────────── I ──────────
//   :::::: V A L I D A R   E M A I L : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────
//

var campo_email = $("#correo");

console.log(campo_email.val());


function validar(event) {
    elemento = $(event.target);
    console.log(elemento.val());

    if (!elemento.val()) {
        console.log("campo vacio");
    } else if (elemento.val().indexOf('@') === -1) {
        console.log("no es correo valido");
        elemento.removeClass('is-valid');
        elemento.addClass('is-invalid');
    } else if (elemento.val().indexOf('.') === -1) {
        console.log("no es correo valido");
        elemento.removeClass('is-valid');
        elemento.addClass('is-invalid');
    } else {
        $("body").html(elemento.val());
        console.log("correo valido");
        elemento.addClass('is-valid');
    }

}





campo_email.blur(validar);