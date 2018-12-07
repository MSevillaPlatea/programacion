var examResults = [7, 5, 6, 4, 3, 2, 8];



var promedio = function(array) {


    var suma_array = 0;

    for (var i = 0; i < array.length; i++) {
        var actual = array[i];
        suma_array = suma_array + actual;

    }

    return suma_array / array.length;
}




console.log(promedio(examResults));