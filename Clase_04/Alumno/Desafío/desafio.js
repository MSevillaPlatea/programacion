var nombre = "pedro";

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

console.log(comprobador(nombre, lista));