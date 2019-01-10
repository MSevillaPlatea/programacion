//
// ────────────────────────────────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: C R E A R   E L E M E N T O   Y   A N A D I R L O   A   D O M : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────────────────────────────────
//





/* var nombres = ["Ariela", "Javier", "Mauricio", "Ana"];

var body = document.getElementsByTagName("body")[0];

var principal = document.createElement("div");

body.appendChild(principal);

for (var i = 0; i < nombres.length; i++) {
    var personas = document.createElement("p");
    personas.innerHTML = nombres[i];
    principal.appendChild(personas);
    console.log(personas);
} */


//
// ────────────────────────────────────────────────────────────── I ──────────
//   :::::: P O R   F U N C I O N : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────
//
var nombres = ["Ariela", "Javier", "Mauricio", "Ana"];

var body = document.getElementsByTagName("body")[0];

var principal = document.createElement("div");

body.appendChild(principal);


var crear = function(nombre, classname, num, idprefix) {
    var nuevo = document.createElement(classname);
    nuevo.innerHTML = nombre;
    nuevo.id = idprefix + num;
    nuevo.classname = classname;
    principal.appendChild(nuevo);
    return nuevo;
}

for (var i = 0; i < nombres.length; i++) {
    var nuevo_elemento = crear(nombres[i], "p", i, "nuestros_nombres_");
    principal.appendChild(nuevo_elemento);
}




/* crear("mauricio", "div"); */



//
// ──────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: R E M O V E R   E L E M E N T O : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────
//


var remover = function(iden) {
    var iden = iden;
    var rem_hijo = function(iden) {
        var hijo = document.getElementById(iden);
        hijo.parentNode.removeChild(hijo);

        return hijo;

    }

    var elemento = document.getElementById("nuestros_nombres_" + iden);
    elemento.remove();

    return elemento;
}

var eliminar = new remover(iden);

eliminar.rem_hijo(1);

//remover.rem_hijo(1);

//remover(1);