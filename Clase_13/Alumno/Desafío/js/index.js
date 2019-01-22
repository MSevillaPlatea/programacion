$(document).ready(function() {


    $("#firstName").blur(function(e) {
        var elemento = $(e.target);
        if (!elemento.val()) {
            console.log("campo vacio");
            elemento.removeClass("is-valid");
            elemento.addClass("is-invalid");
            $("#nombre_control").text("nombre no valido");
        } else if (typeof elemento !== "string") {
            console.log("nombre valido");
            console.log(elemento);
            elemento.removeClass("is-invalid");
            elemento.addClass("is-valid");
            $("#nombre_control").text("nombre valido");
        } else {
            elemento.removeClass("is-invalid");
            elemento.addClass("is-valid");
            $("#nombre_control").text("nombre invalido");
        }
    });

    $("#email").blur(function(e) {
        var elemento = $(e.target);
        if (!elemento.val()) {
            console.log("campo vacio");
            $("#email_control").text("email no valido");
        } else if (elemento.val().indexOf('@') === -1) {
            $("#email_control").text("email no valido");
            console.log("no es correo valido");
            elemento.removeClass('is-valid');
            elemento.addClass('is-invalid');
        } else if (elemento.val().indexOf('.') === -1) {
            $("#email_control").text("email no valido");
            console.log("no es correo valido");
            elemento.removeClass('is-valid');
            elemento.addClass('is-invalid');
        } else {
            $("#email_control").text("correo valido");
            console.log("correo valido");
            elemento.removeClass('is-invalid');
            elemento.addClass('is-valid');
        }

    });

    $("#comments").blur(function(e) {

        var elemento = $(e.target);
        if (!elemento.val()) {
            // console.log("comentario invalido");
            console.log(elemento);
            elemento.removeClass("is-valid");
            elemento.addClass("is-invalid");
            $("#comentario_control").text("comentario no valido");
        } else {
            console.log("comentario valido");
            console.log(elemento);
            elemento.removeClass("is-invalid");
            elemento.addClass("is-valid");
            $("#comentario_control").text("comentario valido");
        }

    });

});