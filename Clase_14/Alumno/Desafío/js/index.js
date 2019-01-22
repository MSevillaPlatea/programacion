$(document).ready(function() {



    function esconder(e) {
        var elemento = $(e.target);

        elemento.parent().parent().hide(500);


    }


    $("#1").click(esconder);


})