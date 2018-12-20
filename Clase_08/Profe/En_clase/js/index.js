var lista = document.createElement('ul');
var contenido = document.getElementById('content');

var items = [
  {
    nombre: 'ana',
    apellido: 'turrillo'
  },{
    nombre: 'cosme',
    apellido: 'fulanito'
  },{
    nombre: 'pepe',
    apellido: 'pepez'
  }
];

for (var i = 0; i < items.length; i++) {
  var name = items[i].nombre + ' ' + items[i].apellido;

  var item = document.createElement('li');
  var itemContent = document.createElement('p');

  itemContent.innerHTML = name;

  item.appendChild(itemContent);

  lista.appendChild(item)
}

contenido.appendChild(lista);