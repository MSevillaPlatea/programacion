var i = 1;
var ressultado;
do {
    var operacion = prompt("que desea hacer: suma, resta, division o multiplicacion");
    i++
} while (operacion !== "suma" && operacion !== "resta" && operacion !== "division" && operacion !== "multiplicacion")
console.log(operacion);

do {
    var num_uno = prompt("ingresar el primer numero");
} while (parseInt(num_uno) % 1 !== 0);

console.log(num_uno);

do {
    var num_dos = prompt("ingresar el segundo numero");
} while (parseInt(num_dos) % 1 !== 0);

console.log(num_dos);


switch (operacion) {
    case "suma":
        ressultado = parseInt(num_uno) + parseInt(num_dos);
        break;
    case "resta":
        ressultado = parseInt(num_uno) - parseInt(num_dos);
        break;
    case "division":
        ressultado = parseInt(num_uno) / parseInt(num_dos);
        break;
    case "multiplicacion":
        ressultado = parseInt(num_uno) * parseInt(num_dos);
        break;
    default:
        break;
}

alert(ressultado);