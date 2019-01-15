$(document).ready(function () {

  var counter = 0;
  var setCounter = function (counter) {
    $('#counter').text(counter);

    return counter + 1
  };

  setCounter(counter);

  $(document).keydown(function (event) {

    var key = event.which;

    if (key === 38) { //arriba
      counter = counter + 1;
    }

    if (key === 40) { // abajo
      counter = counter - 1
    }

    if (key === 13) { // enter
      counter = 0
    }

    setCounter(counter)

  });


  $('#miId').click(function () {

  })

});