//
// ────────────────────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: F U N C I O N   B U S C A R   P E R S O N A J E S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────────────────────
//

import { setLocalList } from './../utils/localStorage';


function personajes(url) {
    var pjs = [];
    $.ajax(url)
        .done(function(data) {
            console.log("se cargaron los personajes")
            for (var i = 0; i < data.results.length; i++) {
                $("#tableBody").append("<tr><th id= 'id'>" + i + "</th>" + "<th>" + data.results[i].name + "</th>" + "<th>" + data.results[i].gender + "</th>" + "<th>" + data.results[i].height + "</th>" + "<th>" + data.results[i].mass + "</th>" + "<th>" + data.results[i].eye_color + "</th>" + "<th>" + "<button class='btn btn-danger boton' " + " attr = " + data.results[i].url + ">Guardar</button>" + "</th></tr>");
                console.log(data.results[i].name);
            }
            $(".boton").click(function(event) {
                var pj_url = $(event.target).attr("attr");
                $.ajax(pj_url)
                    .done(function(data) {
                        console.log(pjs.push(JSON.stringify(data)));
                        console.log(data);
                        var nuevo = pjs.push(JSON.stringify(data));
                        console.log(JSON.stringify(data));
                        setLocalList("personaje", nuevo);
                        setLocalList("personaje", JSON.stringify(data));
                        setLocalList("dsa", [32, 32, 43]);
                    })
                    .fail(function(error) {
                        console.log("error");
                    })





            });
        })
        .fail(function(error) {
            console.log("error" + error);
        })
}
export default personajes;
//export { personaje, personajes };

//
// ──────────────────────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: F U N C I O N   G U A R D A R   P E R S O N A J E S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────────────────────────
//

/* var personaje = [];


function guardar() {
    console.log("guardar");
    localStorage.setItem(pj, personaje)



} */