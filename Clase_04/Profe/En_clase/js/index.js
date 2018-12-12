var notas = [7, 6, 10, 2, 3, 5, 9];

var avCalculator = function(notasAlumno){
  var suma = 0;

  for(var i = 0; i < notasAlumno.length; i++){
    var nota = notasAlumno[i];
    suma = suma + nota;
  }

  return suma / notasAlumno.length;
};

avCalculator(notas);

var palabraMasLarga = function (frase) {
  var palabras = frase.split(' ');
  var ganadora = '';

  for(var i = 0; i < palabras.length; i++){
    var palabra = palabras[i];
    if (ganadora.length < palabra.length) {
      ganadora = palabra;
    }
  }
  return ganadora;
};

var buscador = function(texto, alumnos){

};



