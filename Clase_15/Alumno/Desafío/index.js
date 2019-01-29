$(document).ready(function() {

    //
    // ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────── I ──────────
    //   :::::: F U N C I O N   P A R A   O B T E N E R   S O L O   U N   P E R S O N A J E : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
    //



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



    personaje("https://swapi.co/api/people", 3);



    //
    // ──────────────────────────────────────────────────────────────────────────────────────────────────────────────── I ──────────
    //   :::::: F U N C I O N   O B T E N E R   T O D O S   L O S   P E R S O N A J E S : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
    //

    /*  function personajes(url) {
         $.ajax(url)
             .done(function(data) {

                 for (var i = 0; i < data.results.length; i++) {
                     console.log("personajes: " + data.results[i].name);
                 }
             })
             .fail(function(error) {
                 console.log("error" + data);
             })
     }

     personajes("https://swapi.co/api/people"); */





    //
    // ────────────────────────────────────────────────────────────────────────────────────────────────── I ──────────
    //   :::::: C A R G A R   P E R S O N A J E   U N I C O   A L   D O M : :  :   :    :     :        :          :
    // ────────────────────────────────────────────────────────────────────────────────────────────────────────────
    //


    function cargar(per) {


        $("#1").html(per);


    }


})