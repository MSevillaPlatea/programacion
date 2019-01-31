$(document).ready(function(){

  /*var mostrarDatos = function (results) {
    console.log('muestro datos', results);

    var tabla = $('#list');

    for (var i = 0; i < results.length; i++){
      console.log(results[i].name)
      tabla.append('<tr>' +
        '<td>'+ results[i].name+ '</td>' +
        '<td>'+ results[i].height+ '</td>' +
        '<td>'+ results[i].gender+ '</td>' +
        '<td>'+ results[i].hair_color+ '</td>' +
        '</tr>')
    }

  };

  console.log('empieza la request');

  $.ajax('https://swapi.co/api/people')
    .done(function (data) {
      console.log('termina la req', data);
      mostrarDatos(data.results)

    })
    .fail(function (error) {
      console.log('error', error.status)
    });

*/
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
    console.log(data)
    $.ajax(data.homeworld)
      .done(function(homeworld){
        console.log(homeworld)
        $('#caracter_info').html('<h2>'+ data.name +'</h2>' +
          '<ul>' +
          '<li>Altura: ' + data.height + '</li>' +
          '<li>Género: ' + data.gender + '</li>' +
          '<li>Color de pelo: ' + data.hair_color + '</li>' +
          '<li>Planeta de origen: ' + homeworld.  name + '</li>' +
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


/**
 *
 *
 *

 */