//
// ──────────────────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: E J E R C I C I O   J A R R A   M E D I D O R A : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────────────────────
//



/* var ingrediente = function(nombre, cantidad) {
    this.cantidad = cantidad;
    this.nombre = nombre;
}

var vaso = function() {
    this.medir = function(ingrediente) {
        console.log(ingrediente.nombre + ingrediente.cantidad);
    }
}

var jarra_torta_mediana = new vaso();


var harina = new ingrediente("harina ", "1kg");
var azucar = new ingrediente("azucar ", "4 cucharadas");
var huevos = new ingrediente("huevos ", "3 unidades");
var manzana = new ingrediente("manzana ", "2 unidades");
var leche = new ingrediente("leche ", "medio litro");



jarra_torta_mediana.medir(azucar);
jarra_torta_mediana.medir(harina);
jarra_torta_mediana.medir(leche);
jarra_torta_mediana.medir(manzana);
jarra_torta_mediana.medir(huevos); */



//
// ────────────────────────────────────────────────────────────────── I ──────────
//   :::::: E J E M P L O   A U T O S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────
//



/* var car = function(modelo, marca, ano) {
    this.modelo = modelo;
    this.marca = marca;
    this.ano = ano;
    this.getcarname = function() {
        console.log(this.modelo + this.marca + this.ano);
    }
}



var auto1 = new car("suran ", "volk ", "2016");
var auto2 = new car("galaxy ", "ford ", "1994");


auto1.getcarname();
auto2.getcarname(); */


//
// ──────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: E J E R C I C I O   A L U M N O : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────
//

/* var students = [{
        firstName: 'Juan',
        lastName: 'Pérez',
        dni: 45678987,
        email: 'juan@gmail.com'
    },
    {
        firstName: 'Ana',
        lastName: 'Fernandez',
        dni: 45678989,
        email: 'ana@gmail.com'
    },
    {
        firstName: 'Pedro',
        lastName: 'Mármol',
        dni: 45678956,
        email: 'pedro@gmail.com'
    }
]

for (var i = 0; i < students.length; i++) {
    var nombre = students[i].firstName;
    var apellido = students[i].lastName;
    var dni = students[i].dni;
    var email = students[i].email;

    var alumno = function(nombre, apellido, dni, email) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        var id = Math.random();
        this.getId = function() {
            console.log(id);
        }
        this.getName = function() {
            if (nombre === undefined || apellido === undefined) {
                console.log("no encontrado");
            } else {
                console.log(nombre + " " + apellido + " " + dni + " " + email);
            }
        }
    }
    var estudiante = new alumno(nombre, apellido, dni, email);
    estudiante.getName();
    estudiante.getId();
} */

//
// ───────────────────────────────────────────────── DEFINIDO SIN ARRAY Y FOR ─────
//



/* var pepe = new alumno("pepe", " lalo", " 343242", " sfds@fds.com");
var lolo = new alumno("lolo", " quien", " 3432432", " ffds@fdfs.com");

pepe.getName();
pepe.getId();

lolo.getName();
lolo.getId(); */



//
// ────────────────────────────────────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: E M P L E A D O   T I E M P O   D E   T R A B A J O   Y   P A G O : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
//

//
// ─────────────────────────── FUNCION EMPLEADO SUMA HORAS CON METODO INTERNO ─────
//
var empleado = function(nombre) {
        this.nombre = nombre;
        horas = 0;
        this.trabajar = function() {
            horas = horas + 1;
        }
        this.getHoras = function() {
            return horas;
        }

    }
    //
    //  FUNCION EMPLEADOR MULTIPLICA SUELDO FIJO POR HORAS PRODUCIDAS ARRIBA EN METODO PUBLICO ─────
    //
var empleador = function() {
        this.paga = 1000;
        sueldo = 0;
        this.pagar = function(empleado) {
            sueldo = this.paga * empleado.getHoras();
        }
        this.facturar = function() {
            return sueldo;
        }
    }
    //
    // ─────────── DECLARA NUEVO EMPLEADO Y JEFE SUMA HORAS PAGA Y MUESTRA SUELDO ─────
    //
var juan = new empleado("juan");
var jefe = new empleador();
juan.trabajar();
juan.trabajar();
console.log(juan.getHoras());
jefe.pagar(juan);
jefe.pagar(juan);
console.log(jefe.facturar(juan));