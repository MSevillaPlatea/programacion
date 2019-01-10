var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var dni = document.getElementById("dni");
var boton = document.getElementById("boton");
var key = "estudiantes";
var estudiante = {};
var studentListNodes = document.getElementById('lista_alumnos');



//
// ──────────────────────────────────────────────────────────────────── I ──────────
//   :::::: V A L I D A R   C A M P O S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────
//

var validar = function(campo) {
    var campo = campo;
    if (!campo.value) {
        campo.classList.remove('is-valid');
        campo.classList.add('is-invalid');
        console.log(campo.id + " vacio");
    } else {
        campo.classList.remove('is-invalid');
        campo.classList.add('is-valid');
        console.log(campo.id + "con algo");
    }

}




//
// ──────────────────────────────────────────────────────────────── I ──────────
//   :::::: G U A R D A   D A T O S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────
//




var enviar = function() {
    validar(nombre);
    validar(apellido);
    validar(dni);
    estudiante[nombre.id] = nombre.value;
    estudiante[apellido.id] = apellido.value;
    estudiante[dni.id] = dni.value;
    var estudiantes = getLocalStorage(key);
    var lista_nueva = estudiantes.concat(estudiante);
    localStorage.setItem(key, JSON.stringify(lista_nueva));
    //debug datos de ejemplo
    console.log("debug datos de ejemplo");
    console.log("nombre cargado");
    console.log(nombre);
    console.log(nombre.id);
}

boton.onclick = enviar;


//
// ──────────────────────────────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: O B T I E N E   D A T O S   D E L   L O C A L S T O R A G E : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────────────────────────────────
//





var getLocalStorage = function(key) {
    return JSON.parse(localStorage.getItem(key)) || []
};


//
// ──────────────────────────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: M U E S T R A   L I S T A   D E   E S T U D I A N T E S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────────────────────────────
//



var drawList = function(estudiantes) {

    for (var i = 0; i < estudiantes.length; i++) {
        var studentNode = document.createElement('li');
        studentNode.innerText = estudiantes[i].name + ' - ' + estudiantes[i].dni;
        studentListNodes.appendChild(studentNode)
    }
};