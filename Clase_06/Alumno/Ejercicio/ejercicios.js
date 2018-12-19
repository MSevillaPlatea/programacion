/* 
var maximo = function(array) {
    this.lista = array;
    var maximo = 0;
    var minimo = 0;

    for (var i = 0; i < this.lista.length; i++) {

        if (this.lista[i] > maximo) {
            maximo = this.lista[i];
        } else {}
    }
    for (var i = 0; i < this.lista.length; i++) {

        if (this.lista[i] < minimo) {
            minimo = this.lista[i];
        } else {}

    }

    this.getmax = function() {
        return maximo;
    }
    this.getmin = function() {
        return minimo;
    }
}




var lista_nueva = new maximo(lista);

console.log(lista_nueva.getmax());
console.log(lista_nueva.getmin());
 */
/*
var lista = [1, 10, 8, 5, 4, 25, 3];
 var maximo = 0;
var minimo = lista[0];
var reverso = [];
var lista_nueva = [];

for (var i = 0; i < lista.length; i++) {

    if (lista[i] > maximo) {
        maximo = lista[i];
    } else {}
}
for (var i = 0; i < lista.length; i++) {

    if (lista[i] < minimo) {
        minimo = lista[i];
    } else {}

}

for (var i = lista.length - 1; i > -1; i--) {
    reverso.push(lista[i]);

}

lista.push(8);


for (var i = 0; i < lista.length - 1; i++) {
    lista_nueva.push(lista[i]);

}

console.log(lista_nueva);
console.log(lista);
console.log(maximo);
console.log(minimo);
console.log(reverso); */


//
// ────────────────────────────────────────────────────── I ──────────
//   :::::: F U N C I O N : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────
//
var array = [1, 10, 8, 5, 4, 25, 3];
var indice = 0;
var filtro = function(array, indice) {
    this.lista = array;
    this.numero = indice;
    var lista_filtrada = [];
    for (var i = 0; i < this.lista.length; i++) {
        if (i === this.numero) {} else {
            lista_filtrada.push(this.lista[i]);
        }
    }
    this.resultado = function() {
        /* console.log(lista_filtrada); */
        return lista_filtrada;
    }
}
var nuevo = new filtro(array, 2);
console.log(nuevo.resultado());