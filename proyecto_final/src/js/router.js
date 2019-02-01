import crossroads from 'crossroads'
import homeController from "./controllers/homeController"
import guardadosController from "./controllers/guardadosController"
import contactController from "./controllers/contactController"
import personajes from "./controllers/peopleController"

crossroads.addRoute("/", function() {
    $('#root').load('./partials/home.html', homeController)
});

crossroads.addRoute("#/contact", function() {
    $('#root').load('./partials/contact.html', contactController)
});

crossroads.addRoute("#/guardados", function() {
    $('#root').load('./partials/guardados.html', guardadosController)
});
crossroads.addRoute("#/people", function() {
    $('#root').load('./partials/people.html', personajes("https://swapi.co/api/people"))
});

crossroads.addRoute('/', function() {
    console.log('Home page')
})

crossroads.addRoute("#/contact", function() {
    console.log("contact");
})

crossroads.addRoute("#/people", function() {
    console.log("people");
})
crossroads.addRoute("#/guardados", function() {
    console.log("guardados");
})

// En cada cambio del # va a verificar las rutas
$(window).on('hashchange', function() {
    crossroads.parse(window.location.hash)
})

crossroads.parse(window.location.hash)