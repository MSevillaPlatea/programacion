$(document).ready(function() {



    $("#email").blur(function(e) {
        var elemento = $(e.target);


        if (!elemento.val()) {
            console.log("campo vacio");
        } else if (elemento.val().indexOf('@') === -1) {
            $("#indicador").html("<p>correo invalido</p>");
            console.log("no es correo valido");
            elemento.removeClass('is-valid');
            elemento.addClass('is-invalid');
        } else if (elemento.val().indexOf('.') === -1) {
            $("#indicador").html("<p>correo invalido</p>");
            console.log("no es correo valido");
            elemento.removeClass('is-valid');
            elemento.addClass('is-invalid');
        } else {
            $("#indicador").html("<p>correo valido</p>");
            console.log("correo valido");
            elemento.removeClass('is-invalid');
            elemento.addClass('is-valid');
        }

    });

});