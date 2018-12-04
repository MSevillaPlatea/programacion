### Loops!

Imprimir por consola:

- Los números del 1 al 250
```javascript
	for (var i = 1; i <= 250; i++) {
    	    console.log(i)
    	}
```

- Los números múltiplos de 3 menores a 1000.
```javascript
	for (var i = 1; i < 1000; i++) {
	    if (i%3 === 0) console.log(i)
	}
```
o

```javascript
	for (var i = 3; i < 1000; i = i+3) {
	    console.log(i)
	}
```

- Imprimir todos los días de la semana a partir de un array ```['a', 'b', 'c', 'd']```
```javascript
	var dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    
    for (var i = 0; i<= dias.length; i++){
      console.log(dias[i])
    }
```

- Letra por letra la frase "anita lava la tina".
- La misma frase pero de atras hacia adelante.
```javascript
	var a = "Anita lava la tina";


	for (var i = 0; i < a.length; i++) {
	    console.log(a[i])
	}

	for (var i = a.length; i >= 0; i--) {
	    console.log(a[i])
	}
```

- Cómo validarías que una frase es un palíndromo?
```javascript
	var str = "Anita lava la tina";
    var re = /[^A-Za-z0-9]/g;
    
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    if (reverseStr === lowRegStr) {
      console.log('Es palíndromo')
    } else {
      console.log('no es palíndromo')
    }
```

- Imprimir en la consola:
```
*  
* *  
* * *  
* * * *  
* * * * *
```
```javascript
var ms = '';
for ( var i = 1; i <= 5; i++) {
    for (var j = 1; j <= i; j++) {
        //console.log('este es jota', j, ms)
        ms = ms + '*';
    }

    console.log(ms)
    ms = ''
}
```