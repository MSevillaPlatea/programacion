var content = document.getElementById('content');
var nombres = ['Ariela', 'Javier', 'Mauricio', 'Ana'];
var reyesMagos = ['Melchor', 'Gaspar', 'Baltazar'];

var createName = function (name, className, num, idPrefix) {
  var miDiv =  document.createElement('div');
  miDiv.innerHTML = name;

  miDiv.id = idPrefix + num;
  miDiv.className = className;
  //document.createElement('input').value = 'papa';
  miDiv.setAttribute('style', 'color:orange; font-weight: bold');


  return miDiv
};

for (var i = 0; i < nombres.length; i++) {
  var newElem = createName(nombres[i], 'nosotros', i, 'nuestros_nombres_');
  content.appendChild(newElem);
}
// i = 4
for (var j = 0; j < reyesMagos.length; j++) {
  content.appendChild(createName(reyesMagos[j], 'reyes_magos', j, 'nombres_reyes_magos_'))
}

var removeNode = function (id) {
  var nodeToRemove = document.getElementById(id);
  nodeToRemove.parentNode.removeChild(nodeToRemove)
  //nodeToRemove.remove()
};


var students = [
  {
    firstName: 'Ariela',
    lastName: 'Baruffaldi',
    dni: 22999333,
    email: 'juan@gmail.com'
  },{
    firstName: 'Javier',
    lastName: 'Claria',
    dni: 22999334,
    email: 'juan@gmail.com'
  },{
    firstName: 'Mauricio',
    lastName: 'Sevilla',
    dni: 22999335,
    email: 'juan@gmail.com'
  },{
    firstName: 'Alessandra',
    lastName: 'Tagliatti',
    dni: 22999336,
    email: 'juan@gmail.com'
  }
];

var newStudent = {
  firstName: 'Pepe',
  lastName: 'Pepez',
  dni: 22999337,
  email: 'juan@gmail.com'
};

var createStudent = function (student) {
  var studentNode = document.createElement('li');

  studentNode.className = 'list-group-item';
  studentNode.id = student.dni;

  studentNode.innerHTML = '<h1>' +
    student.firstName + ' ' + student.lastName +
    '</h1>' +
    '<h3>' +
    'DNI: ' + student.dni +
    '</h3><p>' +
    'E-mail: ' + student.email +
    '</p>';

  return studentNode;
};

var studentList = document.createElement('ul');
studentList.className = 'list-group';


for (var k = 0; k < students.length; k++) {
  var student = createStudent(students[k]);
  studentList.appendChild(student)
}

studentList.appendChild(createStudent(newStudent));

content.appendChild(studentList);

var removeStudent = {
  removeElement: function (nodeId) {
    document.getElementById(nodeId).remove()
  },
  removeChild: function (nodeId) {
    var node = document.getElementById(nodeId);
    node.parentNode.removeChild(node);
  }
};

