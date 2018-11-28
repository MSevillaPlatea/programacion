//
// ────────────────────────────────────────────────────────────────── I ──────────
//   :::::: G E N E R O   Y   E D A D : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────
//




/* var genero = prompt("genero");

var edad = prompt("edad");


if (genero === "varon" && edad < 18) {
    prompt("Sr, usted no puede pasar por ser menor de edad");
} else if (genero === "varon" && edad > 18) {
    prompt("Sr, usted puede pasar");
} else if (genero === "mujer" && edad < 18) {
    prompt("Sra, usted no puede pasar por ser menor de edad");
} else if (genero === "mujer" && edad > 18) {
    prompt("Sra, usted puede pasar");
} */


//
// ──────────────────────────────────────────────────────────────────── I ──────────
//   :::::: S E N O R A   O   S E N O R : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────
//



/* var nombre = prompt("el nombre");
var genero = prompt("el genero");

if (genero === "male") {
    alert("hola Sr " + nombre);
} else if (genero === "female") {
    alert("hola Sra " + nombre);
} else {
    alert("hola X");
}
 */


//
// ──────────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: C A L C U L O   D E  PERIMETRO DE  T R I A N G U L O : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────────────
//


/* var num1 = prompt("lado uno");

if (parseInt(num1)) {
    var num2 = prompt("lado dos");
    if (parseInt(num2)) {
        var num3 = prompt("valor tres");
        if (parseInt(num3)) {
            var resultado = parseInt(num1) + parseInt(num2) + parseInt(num3);
            alert("LA SUMA DE SUS LADOS ES " + resultado);
        } else {
            alert("NO UN NUMERO");
        }
    } else {
        alert("NO UN NUMERO");
    }
} else {
    alert("NO UN NUMERO");
} */


//
// ──────────────────────────────────────────────────── I ──────────
//   :::::: S W I T C H : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────
//

/* var nombre = prompt("nombre");
var genero = prompt("genero");


switch (genero) {
    case "male":
        alert("Hola Sr " + nombre);
        break;
    case "female":
        alert("Hola Sra " + nombre);
    default:
        alert("no ingreso datos validos");
        break;
}
 */

/* var dia = prompt("que dia?").toLowerCase();

switch (dia) {
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
        alert("semana :(");
        break;
    case "sabado":
    case "domingo":
        alert("finde!!!");
        break;
    default:
        alert("CUALQUIERA!!");
        break;
} */


//
// ────────────────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: C O N D I C I O N A L   C O N   N U M E R O S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────────────────
//

var nombre = prompt("nombre");
var numero = prompt("numero");

var num_mod = parseInt(numero);

if (num_mod > 20) {
    alert("Buen dia");
} else if (num_mod < 20 && num_mod > 5 || num_mod === 20 || num_mod === 5) {
    alert("que tengas pesimo dia! :P " + nombre);
} else if (num_mod < 5) {
    alert("volve mañana " + nombre);
} else {
    alert("que???! " + nombre);
}