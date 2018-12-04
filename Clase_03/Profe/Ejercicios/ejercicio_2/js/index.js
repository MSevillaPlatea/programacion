var name = prompt('Cómo te llamás?');
var number;

do {
  number = prompt('Ingresá un número del 0 al 100');
} while(number < 0 || number > 100)