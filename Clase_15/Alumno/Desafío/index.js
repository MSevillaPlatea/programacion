$(document).ready(function() {

    //
    // ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────── I ──────────
    //   :::::: F U N C I O N   P A R A   O B T E N E R   S O L O   U N   P E R S O N A J E : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
    //


    /* 
        function personaje(url, num_personaje) {
            $.ajax(url)
                .done(function(data) {
                    var nombre = data.results[num_personaje].name;
                    var genero = data.results[num_personaje].gender;
                    var altura = data.results[num_personaje].height;
                    var peso = data.results[num_personaje].mass;
                    var color_de_ojos = data.results[num_personaje].eye_color;
                    var personaje = nombre + " " + genero + " " + altura + " " + peso + " " + color_de_ojos;
                    cargar(personaje);

                })
                .fail(function(error) {
                    console.log("error" + data);
                })



            // return personaje; 

        }



        personaje("https://swapi.co/api/people", 3); */



    //
    // ──────────────────────────────────────────────────────────────────────────────────────────────────────────────── I ──────────
    //   :::::: F U N C I O N   O B T E N E R   T O D O S   L O S   P E R S O N A J E S : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
    //

    // ────────────────────primera forma───────────────────────────────────────




    /*  function personajes(url) {
        $.ajax(url)
            .done(function(data) {

                for (var i = 0; i < data.results.length; i++) {
                    console.log("personajes: " + data.results[i].name);
                }
            })
            .fail(function(error) {
                console.log("error" + error);
            })
    }

    personajes("https://swapi.co/api/people");
 */


    // ──────────────────────segunda forma───────────────────────────────────


    function personajes(url) {
        $.ajax("https://swapi.co/api/people")
            .done(function(data) {
                console.log("se cargaron los personajes")
                for (var i = 0; i < data.results.length; i++) {
                    $("#tableBody").append("<tr><th>" + i + "</th>" + "<th>" + data.results[i].name + "</th>" + "<th>" + data.results[i].gender + "</th>" + "<th>" + data.results[i].height + "</th>" + "<th>" + data.results[i].mass + "</th>" + "<th>" + data.results[i].eye_color + "</th>" + "<th>" + "</th></tr>");
                    console.log(data.results[i].name);
                }
            })
            .fail(function(error) {
                console.log("error" + error);
            })
    }

    personajes();

    //
    // ────────────────────────────────────────────────────────────────────────────────────────────────── I ──────────
    //   :::::: C A R G A R   P E R S O N A J E   U N I C O   A L   D O M : :  :   :    :     :        :          :
    // ────────────────────────────────────────────────────────────────────────────────────────────────────────────
    //

    /* 
        function cargar(per) {


            $("#1").html(per);


        } */


})