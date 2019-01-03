var changeButton = document.getElementById('changeBox');
var box = document.getElementById('box');

changeButton.onclick = function () {
  var classes = box.getAttribute('class');
  var isOrange = classes.indexOf('orange') !== -1;

  if (isOrange) {
    box.classList.remove('orange');
    box.classList.add('blue');
  } else {
    box.classList.remove('blue');
    box.classList.add('orange');
  }
};

var firstNameInput = document.getElementById('firstName');

firstNameInput.onblur = getElement;

function getElement (event) {
  console.log('valor', event.target.value)
}
