var dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
var dia;
for (var i = 0; i< dias.length; i++){
  dia = dias[i];
  switch (dia) {
    case 'Lunes':
    case 'Martes':
    case 'Miércoles':
    case 'Jueves':
    case 'Viernes':
      console.log(dia);
      break;
    default:
      console.log('es ' + dia + '. No trabajamos los fines de semana')
      break;
  }
}





/*

 for (var i = 1; i <= 250; i++) {
 console.log(i)
 }


for (var i = 1; i < 1000; i++) {
  if (i%3 === 0) console.log(i)
}

for (var i = 12; i < 1000; i = i+3) {
  console.log(i)
}

var dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

for (var i = 0; i<= dias.length; i++){
  console.log(dias[i])
}

var a = "Anita lava la tina";


for (var i = 0; i < a.length; i++) {
  console.log(a[i])
}

for (var i = a.length; i >= 0; i--) {
  console.log(a[i])
}

var a = "Anita lava la tina";


for (var i = 0; i < a.length; i++) {
 console.log(a[i])
}

for (var i = a.length; i >= 0; i--) {
 console.log(a[i])
}

var str = "Anita lava la tina";
var re = /[^A-Za-z0-9]/g;

var lowRegStr = str.toLowerCase().replace(re, '');
var reverseStr = lowRegStr.split('').reverse().join('');
if (reverseStr === lowRegStr) {
  console.log('Es palíndromo')
} else {
  console.log('no es palíndromo')
}


var ms = '';
for ( var i = 1; i <= 5; i++) {
  for (var j = 1; j <= i; j++) {
    ms = ms + '*';
  }
  console.log(ms)
  ms = ''
}

*/