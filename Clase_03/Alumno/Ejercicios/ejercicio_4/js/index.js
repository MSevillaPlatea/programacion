var daysOfTheWeek = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Sabado',
    'Domingo',
    'Pato'
]
for (var i = 0; i < daysOfTheWeek.length; i++) {
    var dia = daysOfTheWeek[i];
    switch (dia) {
        case "Domingo":
            console.log(dia + " es finde");
            break;
        case "Sábado":
            console.log(dia + " es finde" + " y tiene tilde");
            break;
        case "Miércoles":
            console.log(dia + " es semana" + " y tiene tilde");
            break;
        case "Pato":
            console.log(dia + " no es un dia pavo!");
            break;
        default:
            console.log(dia + " es semana");
    }
}