$(document).ready(function() {


    $("#firstName").blur(function(e) {
        console.log("nombre invalido");
        console.log($(e.target));
        $(e.target).addClass("is-invalid");
        $("#nombre_control").text("nombre no valido");

    });

    $("#email").blur(function(e) {
        console.log("email invalido");
        console.log($(e.target));
        $(e.target).addClass("is-invalid");
        $("#email_control").text("email no valido");

    });

    $("#comments").blur(function(e) {
        console.log("comentario invalido");
        console.log($(e.target));
        $(e.target).addClass("is-invalid");
        $("#comentario_control").text("comentario no valido");

    });




});