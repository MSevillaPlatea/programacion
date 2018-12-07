//
// ──────────────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: D E S A F I O   V E R S I O N   S I M P L E : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────────────────
//

/* var nombre = "pedro";

var lista = ["juan", "manuel", "melisa", "josefina", "pedro", "ignacio"];


var comprobador = function(quien, array) {

    var posicion;

    for (var i = 0; i < array.length; i++) {

        if (quien === array[i]) {
            posicion = i;
            break;
        }
    }
    return posicion;
}

console.log(comprobador(nombre, lista)); */


//
// ──────────────────────────────────────────────────────────────── I ──────────
//   :::::: D E S A F I O   F U L L : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────
//


//
// ──────────────────── PREGUNTA NOMBRE Y APELLIDO ─────
//
var nombre = prompt("buscar el Nombre: ");

var apellido = prompt("buscar el Apellido: ")

var studentsList = [{
            firstName: 'Juan',
            lastName: 'Pérez',
            dni: 45678987
        },
        {
            firstName: 'Ana',
            lastName: 'Fernandez',
            dni: 45678989
        },
        {
            firstName: 'Pedro',
            lastName: 'Mármol',
            dni: 45678956
        },
        {
            firstName: 'Pablo',
            lastName: 'Picapiedras',
            dni: 45678983
        }
    ]
    //
    // ────────────────── COMIENZA FUNCION ─────
    //
var comprobador = function(first, last, objeto) {
    //
    // ────────────────────────── COMPRUEBA SI EL ALUMNO SE ENCUENTRA EN LA LISTA ─────
    //        
    var lugar;
    var alumno;
    for (var i = 0; i < objeto.length; i++) {

        if (first.toLowerCase() === objeto[i].firstName.toLowerCase()) {
            lugar = i;
            break;
        } else if (last.toLowerCase() === objeto[i].lastName.toLowerCase()) {
            lugar = i;
            break;
        } else {
            lugar = -1;
        }
    }
    //
    // ───────────── SI EL ALUMNO NO SE ENCUENTRA DEVUELVE NO ENCONTRADO ─────
    //

    if (lugar === -1) {
        alumno = "Alumno no encontrado";
    } else {
        alumno = "Primer nombre: " +
            objeto[lugar].firstName + "\nApellido: " +
            objeto[lugar].lastName + "\nDNI: " +
            objeto[lugar].dni + "\nPosicion: " +
            lugar;
    }
    return alumno;
}
var resultado = comprobador(nombre, apellido, studentsList);
console.log(resultado);
//
// ─────────────────────── AVISA RESULTADO ─────
//  
alert(resultado);