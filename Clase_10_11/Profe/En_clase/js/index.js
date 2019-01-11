var KEY = 'students';
var student = {};
var firstName = document.getElementById('name');
var dni = document.getElementById('dni');
var lastName = document.getElementById('lastName');
var email = document.getElementById('email');
var addStudent = document.getElementById('addStudentButton');
var studentListNodes = document.getElementById('mainList');
var deleteDni = document.getElementById('deleteDni');
var deleteStudentButton = document.getElementById('deleteStudentButton');

addStudent.disabled = true;

var getLocalStorage = function(key) {
    return JSON.parse(localStorage.getItem(key)) || []
};

var drawList = function(students, actions) {
    if (actions && actions.removePrev) {
        studentListNodes.innerHTML = '';
    }

    for (var i = 0; i < students.length; i++) {
        var studentNode = document.createElement('li');
        var studentData = students[i];
        studentNode.innerText = studentData.name + ' ' + studentData.lastName + ' - ' + studentData.dni;
        studentListNodes.appendChild(studentNode)
    }
};

var validateAddStudent = function() {
    if (student.name && student.email && student.dni) {
        addStudent.disabled = false;
    }
};

var isValid = {
    name: function(name) {
        return !!name
    },
    dni: function(dni) {
        var students = getLocalStorage(KEY);
        for (var i = 0; i < students.length; i++) {
            if (students[i].dni === dni) {
                return false
            }
        }
        return parseInt(dni) > 0
    },
    lastName: function() {
        return true
    },
    email: function(email) {
        if (!email) return false;
        var parsedEmail = email.split('@');
        return parsedEmail.length === 2 && parsedEmail[1].indexOf('.') !== -1
    }
};

var validateElement = function(event) {
    var element = event.target;
    var field = event.target.name;

    if (!isValid[field](element.value)) {
        element.classList.remove('is-valid');
        element.classList.add('is-invalid')
    } else {
        element.classList.remove('is-invalid');
        element.classList.add('is-valid')
    }
    student[field] = element.value;
    /**
     * el formato del obj estudiante es:
     *
     * {
     *    name: 'string',
     *    lastName: 'string',
     *    dni: 'number',
     *    email: 'string'
     * }
     */

    validateAddStudent()
};

firstName.onblur = validateElement;
dni.onblur = validateElement;
lastName.onblur = validateElement;
email.onblur = validateElement;

var saveStudent = function() {
    // validar de nuevo los datos
    var studentKeys = Object.keys(isValid);
    var isStudentValid = true;

    for (var i = 0; i < studentKeys.length; i++) {
        var field = studentKeys[i];
        var value = student[field];
        var element = document.getElementById(field);

        if (!isValid[field](value)) {
            element.classList.remove('is-valid');
            element.classList.add('is-invalid');
            isStudentValid = false;
        } else {
            element.classList.remove('is-invalid');
            element.classList.add('is-valid')
        }
    }

    if (!isStudentValid) {
        return
    }
    var studentList = getLocalStorage(KEY);
    var newList = studentList.concat(student);

    localStorage.setItem(KEY, JSON.stringify(newList));
    drawList([student])
};

addStudent.onclick = saveStudent;

var removeStudent = function(dni) {
    var studentList = getLocalStorage(KEY);
    var newList = [];

    for (var i = 0; i < studentList.length; i++) {
        if (studentList[i].dni !== dni) {
            newList.push(studentList[i])
        }
    }

    drawList(newList, { removePrev: true });
    localStorage.setItem(KEY, JSON.stringify(newList))
};

deleteStudentButton.onclick = function(e) {
    var dni = deleteDni.value;

    removeStudent(dni)
};

drawList(getLocalStorage(KEY));