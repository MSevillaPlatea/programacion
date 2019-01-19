$(document).ready(function() {

    //
    // ────────────────────────────────────────────────────────── I ──────────
    //   :::::: V A R I A B L E S : :  :   :    :     :        :          :
    // ────────────────────────────────────────────────────────────────────
    //




    var contador = 0;

    //
    // ────────────────────────────────────────────────────────────────────────────────── I ──────────
    //   :::::: S H O W   H I D E   T O G G O E   C A J A : :  :   :    :     :        :          :
    // ────────────────────────────────────────────────────────────────────────────────────────────
    //





    var esconder = function(e) {
        $(e.target).hide();
    }

    var mostrar = function(e) {
        $(e.target).show();
    }

    var toggle = function(e) {
        $(e.target).toggle();
    }

    /* var cliclear = function(e) {
        $(e.target).click(esconder());
    } */

    //$("#box").cliclear();

    //$("#box").esconder();

    $("#box").click(esconder);




    //
    // ──────────────────────────────────────────────────────── I ──────────
    //   :::::: C O N T A D O R : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────────
    //



    $(document).keydown(function(event) {



        var tecla = event.which;

        console.log(tecla);

        if (tecla === 38) {
            contador = contador + 1;
        } else if (tecla === 40) {
            contador = contador - 1;
        }

        $("#contador").text(contador);

    });


    //
    // ────────────────────────────────────────────────────────────────────────────────── I ──────────
    //   :::::: V E R I F I C A D O R   D E   C A M P O S : :  :   :    :     :        :          :
    // ────────────────────────────────────────────────────────────────────────────────────────────
    //

    $("#nombre").blur(function(e) {
        console.log("hola");

    });




});