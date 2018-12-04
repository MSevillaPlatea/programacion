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

for (var i = 0; i < daysOfTheWeek.length; i++) {
  var day = daysOfTheWeek[i];

  // Comparo cada día del Array con todos los casos posibles
  switch (day) {
    case 'Lunes':
    case 'Martes':
    case 'Miércoles':
    case 'Jueves':
    case 'Viernes':
      console.log(day + ' - Es un día habíl');
      break;
    case 'Sábado':
    case 'Domingo':
      console.log(day + ' - Es día de fin de semana');
      break;
    default:
      console.log(day + ' - Ingresaste cualquier cosa!');
      break
  }
}