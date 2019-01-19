$(document).ready(function(){
  var misDatos = [];
  var showPeople = function (event) {
    var uri = $(event.target).parent().attr('data');

    $.ajax(uri).done(displayPersonInfo).fail(console.error)
  };


  var printElements = function (element) {

    var person = document.createElement('tr');
    $(person).attr('data', element.url);

    $(person).append('<td>' + element.name + '</td>' +
      '<td>' + element.eye_color + '</td>' +
      '<td>' + element.skin_color + '</td>');

    $(person).click(showPeople);

    $('#list').append(person);

  };

  var displayPersonInfo = function (data) {
    document.createElement('ul');

    $.ajax(data.homeworld)
      .done(function(homeworld){
        $('#caracter_info').html('<h2>'+ data.name +'</h2>' +
          '<ul>' +
          '<li>Altura: ' + data.height + '</li>' +
          '<li>Género: ' + data.gender + '</li>' +
          '<li>Color de pelo: ' + data.hair_color + '</li>' +
          '<li>Planeta de origen: ' + homeworld.name + '</li>' +
          '</ul>')
      })


  };

  $.ajax('https://swapi.co/api/people/')
    .done(function(data){
      misDatos = data.results;
      console.log('me devolvio la llamada')
      var people = data.results;
      for (var i = 0; i < people.length; i++) {
        printElements(people[i])
      }
    })
    .fail(function(error){
      if (error.status == 404) {
        console.error('el recurso no fue encontrado')
      }
    });

  console.log('datos del servidor', misDatos)


  setTimeout(function () {
    console.log('datos del servidor', misDatos)

  }, 2000)
});


