/** declaro la variable del do y la del resultado*/

var i = 1;
var resultado;
/** pido la operacion, solo las habilitadas, sino no deja continuar */
do {
    var operacion = prompt("que desea hacer: suma, resta, division o multiplicacion");
    i++
} while (operacion !== "suma" && operacion !== "resta" && operacion !== "division" && operacion !== "multiplicacion")
console.log(operacion);

/**pide los numeros y verifica que son numeros, sino no sigue */
do {
    var num_uno = prompt("ingresar el primer numero");
} while (parseInt(num_uno) % 1 !== 0);

console.log(num_uno);

do {
    var num_dos = prompt("ingresar el segundo numero");
} while (parseInt(num_dos) % 1 !== 0);

console.log(num_dos);
console.log(parseInt(num_dos) % 1);

/**realiza la operacion segun haya sido la operacion ingresada */
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

/**informa el mensaje */
alert("El resultado es " + resultado);