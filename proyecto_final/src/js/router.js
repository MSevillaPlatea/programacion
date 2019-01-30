import crossroads from 'crossroads'
import homeController from "./controllers/homeController"
import galeriaController from "./controllers/galeriaController"
import contactoController from "./controllers/contactoController"


crossroads.addRoute("/", function() {
    $('#root').load('./partials/home.html', homeController)
});

crossroads.addRoute("#/contacto", function() {
    $('#root').load('./partials/contacto.html', contactoController)
});
crossroads.addRoute("#/galeria", function() {
    $('#root').load('./partials/galeria.html', galeriaController)
});

crossroads.addRoute('/', function() {
    console.log('Home page')
})

crossroads.addRoute("#/contact", function() {
    console.log("contacto");
})

crossroads.addRoute("#/prueba", function() {
    console.log("prueba");
})

// En cada cambio del # va a verificar las rutas
$(window).on('hashchange', function() {
    crossroads.parse(window.location.hash)
})

crossroads.parse(window.location.hash)