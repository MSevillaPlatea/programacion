var boton = document.getElementById('changeBox');
var box = document.getElementById('box');

boton.onclick = function () {
  box.classList.add('blue');
  box.classList.remove('orange')
};


var elBoton = document.getElementById('miBoton');

var miAccion = function () {
  console.log(document.getElementById('textoLoco').value)
};

elBoton.onclick = miAccion;
