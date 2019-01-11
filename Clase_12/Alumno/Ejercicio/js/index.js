$("document").ready(function() {


    //
    // ────────────────────────────────────────────────────────── I ──────────
    //   :::::: V A R I A B L E S : :  :   :    :     :        :          :
    // ────────────────────────────────────────────────────────────────────
    //



    var elemento = $(".square");
    var clase_actual = "";

    //
    // ────────────────────────────────────────────────────────────────────────── I ──────────
    //   :::::: F U N C I O N E S   P R O P I A S : :  :   :    :     :        :          :
    // ────────────────────────────────────────────────────────────────────────────────────
    //




    var asigna_cruz = function(a) {
        a.addClass("cross");
    }

    var asigna_cuadrado = function(a) {
        a.addClass("square");
    }

    var revisa_y_guarda_clase = function(a) {
        var clase_actual = a.attr("class");
        //console.log(a.attr("class"));
        return clase_actual;
    }

    //
    // ────────────────────────────────────────────────────── I ──────────
    //   :::::: E V E N T O S : :  :   :    :     :        :          :
    // ────────────────────────────────────────────────────────────────
    //





    elemento.click(function(e) {
        var objetivo = $(e.target);


        revisa_y_guarda_clase(objetivo);


        asigna_cruz(objetivo);

    })








































});