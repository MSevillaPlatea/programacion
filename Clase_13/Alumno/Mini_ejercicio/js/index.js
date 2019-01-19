$(document).ready(function() {

    var eliminar = function(e) {

        $(e.target).parent().remove();

        console.log("test");
    }




    $(".fas.fa-trash-alt").click(eliminar);




});