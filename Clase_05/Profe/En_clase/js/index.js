/*var Jarra = function () {

  this.medir = function (ingrediente) {
    console.log(ingrediente.nombre, ingrediente.cantidad)
  }

};

var Ingrediente = function (nombre, cantidad) {
  this.nombre = nombre;
  this.cantidad = cantidad;
};


var miJarritaDeMedida = new Jarra();

var harina = new Ingrediente('harina', '100 gramos');
var manzana = new Ingrediente('manzana', '20 gramos');
var huevos = new Ingrediente('huevos', '2 unidades');
var leche = new Ingrediente('lecha', '1 litro');
var vainilla = new Ingrediente('esencia de vainilla', '2 gotas');


miJarritaDeMedida.medir(harina);
miJarritaDeMedida.medir(manzana);
miJarritaDeMedida.medir(huevos);
miJarritaDeMedida.medir(leche);
miJarritaDeMedida.medir(vainilla);

*/

var Empleado = function (nombre) {
  this.nombre = nombre;
  var horas = 0;

  this.trabajar = function () {
    horas++
  };

  this.getHoras = function () {
    return horas;
  }

};

var Jefe = function (nombre) {
  this.nombre = nombre;
  var valor = 500;
  this.pagar = function (empleado) {
    console.log('Pagar ' + valor*empleado.getHoras() + ' pesos a ' + empleado.nombre)
  }
};

var pepe = new Empleado('Pepe');

pepe.trabajar();
pepe.trabajar();
pepe.trabajar();

var elJefe = new Jefe('Julio');

elJefe.pagar(pepe);