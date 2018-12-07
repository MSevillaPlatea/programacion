//
// ──────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: R E V I S A R   N O   F U N C A : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────
//




/* var agrandar = function(entrada) {

    return entrada.toUperCase();

};

var palabra2 = "hola";


console.log(agrandar(palabra2)); */



//
// ──────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: S T R I N G   M A S   L A R G A : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────
//
/* string_inicial = "hola mundo bla bla";
console.log(string_inicial.split(" ")); */

var reconocer = function(string_inicial) {

    var mas_larga = "";
    var lista = string_inicial.split(" ");

    for (i = 0; i < lista.length; i++) {

        if (lista[i].length > mas_larga.length) {
            mas_larga = lista[i];
        }

    }
    return mas_larga;

}


console.log(reconocer("hola mundo bla bla llllll"));


//
// ──────────────────────────────────────────────────────── I ──────────
//   :::::: U N A   S U M A : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────
//

/* var unasuma = function(num1, num2) {
    return num1 + num2;
}

console.log(unasuma(2, 2)); */


//
// ──────────────────────────────────────────────────── I ──────────
//   :::::: F R U T A S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────
//

var frutas = ["manzana", "pera", "durazno"];


var entregador = function(canasta) {

    var objeto = [];

    for (i = 0; i < canasta.length; i++) {

        objeto.push(canasta[i]);

    }


    return objeto;
}


entregador(frutas);