var KEY = 'students';
var student = {};
var firstName = document.getElementById('firstName');
var dni = document.getElementById('dni');
var lastName = document.getElementById('lastName');
var email = document.getElementById('email');
var addStudent = document.getElementById('addStudentButton');
var studentListNodes = document.getElementById('mainList');

addStudent.disabled = true;

var getLocalStorage = function (key) {
  return JSON.parse(localStorage.getItem(key)) || []
};

var drawList = function (students) {

  for (var i = 0; i < students.length; i++) {
    var studentNode = document.createElement('li');
    studentNode.innerText = students[i].name + ' - ' + students[i].dni;
    studentListNodes.appendChild(studentNode)
  }
};

var validateAddStudent = function () {
  if (student.name && student.email && student.dni) {
    addStudent.disabled = false;
  }
};

var isValid = {
  name: function (e) {
    return e.value
  },
  dni:function (e) {
    return e.value && parseInt(e.value) > 0
  },
  lastName:function (e) {
    return true
  },
  email: function (e) {
    var email = e.value;
    var parsedEmail = email.split('@');

    return parsedEmail.length === 2 && parsedEmail[1].indexOf('.') !== -1
  }
};

var validateElement = function (event) {
  var element = event.target;
  var field = event.target.name;

  if (!isValid[field](element)) {
    element.classList.remove('is-valid');
    element.classList.add('is-invalid')
  } else {
    element.classList.remove('is-invalid');
    element.classList.add('is-valid')
  }
  student[field]= element.value;

  validateAddStudent()
};

firstName.onblur = validateElement;
dni.onblur = validateElement;
lastName.onblur = validateElement;
email.onblur = validateElement;

var saveStudent = function () {
  var studentList = getLocalStorage(KEY);
  var newList = studentList.concat(student);

  localStorage.setItem(KEY, JSON.stringify(newList));
  drawList([student])
};

addStudent.onclick = saveStudent;

drawList(getLocalStorage(KEY));