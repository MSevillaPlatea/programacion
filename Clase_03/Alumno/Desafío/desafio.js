var i = 1;
var resultado;
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
console.log(parseInt(num_dos) % 1);

switch (operacion) {
    case "suma":
        resultado = parseInt(num_uno) + parseInt(num_dos);
        break;
    case "resta":
        resultado = parseInt(num_uno) - parseInt(num_dos);
        break;
    case "division":
        resultado = parseInt(num_uno) / parseInt(num_dos);
        break;
    case "multiplicacion":
        resultado = parseInt(num_uno) * parseInt(num_dos);
        break;
    default:
        break;
}

alert("El resultado es " + resultado);