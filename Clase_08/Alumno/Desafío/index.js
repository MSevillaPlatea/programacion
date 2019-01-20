//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: V A R I A B L E S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

var alumno = {
    firstName: 'Juan',
    lastName: 'Peréz',
    dni: 22999333,
    email: 'juan@gmail.com'
}




//
// ────────────────────────────────────────────────────── I ──────────
//   :::::: F U N C I O N : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────
//


function crear(alumno) {
    //var nodo = $('body').html("<ul></ul>");

    $("body").html("<div><ul><li><h1>" +
        "Nombre: " +
        alumno.firstName + "</h1>" + "<h3>" +
        "Apellido: " + alumno.lastName + "</h3>" + "<h3>" +
        "DNI: " + alumno.dni + "</h3>" + "<h3>" +
        "E-mail: " + alumno.email + "</h3>" + "</li></ul></div>");



}

crear(alumno);