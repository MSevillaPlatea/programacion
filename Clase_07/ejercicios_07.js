//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: V A R I A B L E S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//



var lista = ['CARLOS', 'GERONIMO', 'NICOLAS', 'LUCAS'];



var nombre_lista = "lista de alumnos";

//
// ──────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: F U N C I O N   D E   C A R G A : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────
//




var enviar = function(key, array) {

    if (typeof key === "string" && Array.isArray(array)) {
        localStorage.setItem(key, JSON.stringify(array));
        console.log("datos cargados y convertidos con exito " + "los datos de " + key + " son:");
        console.log(JSON.stringify(array));
    } else {
        console.log("datos invalidos");
    }
}


//
// ────────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: F U N C I O N   D E   D E S C A R G A : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────────
//



var recibir = function(key) {

    if (typeof key === "string" && Array.isArray(JSON.parse(localStorage.getItem(nombre_lista)))) {

        console.log("datos extraidos y convertidos con exito " + "los datos de " + key + " son:");

        console.log(JSON.parse(localStorage.getItem(nombre_lista)));
    } else {
        var lista_vacia = [];
        console.log("extraccion fallida, revisar datos");
        return lista_vacia;
    }



}


//
// ────────────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: F U N C I O N   E L I M I N A R   I T E M : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────────────
//

var eliminar = function(nombre_borrar) {
    var lista_extraida = JSON.parse(localStorage.getItem(nombre_lista));

    for (var i = 0; i < lista_extraida.length; i++) {

        if (lista_extraida[i] === nombre_borrar) {
            lista_extraida.splice(i, 1);
            console.log(lista_extraida);
            break;
        } else {
            console.log("no se encontro item");
        }

    }
}

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: E J E C U C I O N : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//


enviar(nombre_lista, lista);

recibir(nombre_lista);

eliminar("CARLOS");