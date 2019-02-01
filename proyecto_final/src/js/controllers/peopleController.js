function personajes(url) {
    $.ajax(url)
        .done(function(data) {
            console.log("se cargaron los personajes")
            for (var i = 0; i < data.results.length; i++) {
                $("#tableBody").append("<tr><th>" + i + "</th>" + "<th>" + data.results[i].name + "</th>" + "<th>" + data.results[i].gender + "</th>" + "<th>" + data.results[i].height + "</th>" + "<th>" + data.results[i].mass + "</th>" + "<th>" + data.results[i].eye_color + "</th>" + "<th>" + "<button class='btn btn-danger'>Guardar</button>" + "</th></tr>");
                console.log(data.results[i].name);
            }
        })
        .fail(function(error) {
            console.log("error" + error);
        })
}
export default personajes;