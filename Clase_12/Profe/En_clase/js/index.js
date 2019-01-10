$(document).ready(function () {
  var nodoVanilla = document.getElementById('cambiar');
  var nodoJQuery = $('#cambiar');

  console.log('vanilla', nodoVanilla);
  console.log('jQuery', nodoJQuery);


  nodoVanilla.onclick = function (e) {
    var elemento = e.target;
    console.log(elemento)
  }

  var pepe2 = $('#miInput');

  pepe2.click(function (event) {
    console.log(event.target.value)
    console.log($(event.target).val())
  })

});