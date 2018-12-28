var numbers = document.getElementsByClassName('number');
var operations = document.getElementsByClassName('operation');
var getResult = document.getElementById('getResult');
var display = document.getElementById('display');

var num1 = '', num2 = '', operation;
var msg = '';

var setNumber = function (e) {
  var val = e.target.value;

  if (operation) {
    num2 += val
  } else {
    num1 += val
  }

  msg += val;
  display.innerText = msg
};

var setOperation = function (e) {
  var val = e.target.value;
  if (!num1) {
    alert('momento cerebrito');
    return
  } else if (operation) {
    alert('momento cerebrito');
    return
  }

  operation = val;
  msg += val;
  display.innerText = msg
};


for (var i = 0; i < numbers.length; i++) {
  numbers[i].onclick = setNumber
}

for (var j = 0; j < operations.length; j++) {
  operations[j].onclick = setOperation;
}


getResult.onclick = function () {
  var result = 0;
  if (operation === '+') {
    result = parseInt(num1) + parseInt(num2)
  } else if (operation === '-') {
    result = parseInt(num1) - parseInt(num2)
  }
  num1 = '';
  num2 = '';
  operation = '';
  msg = '';
  display.innerText = result
};
