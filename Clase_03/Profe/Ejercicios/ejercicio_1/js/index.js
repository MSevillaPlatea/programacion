// Array inicial con los días de la semana
var daysOfTheWeek = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Sabado',
  'Domingo',
  'Pato'
];


// Uso un ciclo for para recorrer el Array y evaluar cada día de la semana
for (var i = 0; i < daysOfTheWeek.length; i++) {
  var day = daysOfTheWeek[i];

  // Comparo cada día del Array con todos los casos posibles
  switch (day) {
    case 'Lunes':
    case 'Martes':
    case 'Miércoles':
    case 'Miercoles':
    case 'Jueves':
    case 'Viernes':
      console.log('Es un día habíl');
      break;
    case 'Sábado':
    case 'Domingo':
      console.log('Es día de fin de semana');
      break;
    default:
      console.log('Ingresaste cualquier cosa!');
      break
  }
}

