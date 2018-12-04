var msg;
do{
  msg = prompt('Ingrese su contraseña');
}while (!msg);


var num;

do {
  num = prompt('Ingrese un numero');
} while(parseInt(num) >= 100 || parseInt(num) < 0);


for (var i = 10; i <= 1000; i++){

  if (i % 3 === 0) {
    console.log(i)
  }
  //lo que se ejecuta mientras se cumpla la condicion
}
