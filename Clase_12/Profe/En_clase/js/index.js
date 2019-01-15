$(document).ready(function () {
  var square = $('.square');
  var circle = true;
  var positions = {};
  var winner = '';


  square.click(function (e) {
    var thisSquare = $(e.target);
    var squareId = thisSquare.attr('id');
    var thisPosition = squareId[squareId.length -1] -1;

    if (!thisSquare.hasClass('cross') && !thisSquare.hasClass('circle') && !winner){
      if (circle) {
        thisSquare.addClass('circle');
        circle = false;
        positions[thisPosition] = 'circle';
      } else {
        thisSquare.addClass('cross');
        circle = true;
        positions[thisPosition] = 'cross';
      }
    }

    findWinner()

  });

  $('#restart').click(function () {
    square.removeClass('cross').removeClass('circle');
    winner = '';
    positions = {};
    $('#winner').text('')
  });

  var winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  var findWinner = function () {
    for (var i = 0; i < winningPositions.length; i++) {
      var line = winningPositions[i];
      var p1 = positions[line[0]];
      var p2 = positions[line[1]];
      var p3 = positions[line[2]];
      /**
       * {
       *  0: 'cross',
       *  1: 'circle',
       *  2: 'circle',
       *  3: 'cross',
       *  6: 'cross',
       *  7: 'circle'
       * }
       */
      if (!p1 || !p2 || !p3) continue;


      if (p1 === p2 && p2 === p3) {
        winner = p1;
        $('#winner').text('Partida terminadad. Ganador: ' + p1)
      }
    }
  }
});