$(document).ready(function () {
  var esconder = function () {
    $('#box').hide(3000, function(){
      console.log('se escondió BOX')
    })
  };

  var mostrar = function () {
    $('#box').show(400)
  };

  var alternar = function () {
    $('#box').toggle(1500)
  };

  $('#hide').click(esconder);
  $('#show').click(mostrar);
  $('#toggle').click(alternar);

  /**
   * OTRO TEMA
   *
   */
  var func =  function (eventObject) {
    console.log( 'algo',    $(eventObject.target).val()    );

  }
  $('#nombre').on('change', func);

});
