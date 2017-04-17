console.log('test');


function userInput(changeInput) {
  var numbersChanged = [];
  var numbers_in = changeInput.split(',');
    for (x=0; x < numbers_in.length; x++) {
      numbersToPush = parseInt(numbers_in[x]);
      numbersChanged.push(numbersToPush);
    }
    return numbersChanged;
}

function getSquares() {
  var changeInput = document.querySelector('.numbers').value;
  var numbers = userInput(changeInput);
  var perfectSquare = [];
  for (i=0; i < numbers.length; i++){
    var numberToCheck = Math.sqrt(numbers[i]);
    if (numberToCheck % 1 === 0 && !perfectSquare.includes(numbers[i])) {
      perfectSquare.push(numbers[i]);
    }
  }
  perfectSquare.sort(function(a,b) {return a-b});
  document.querySelector("Body").append('Result: ' + perfectSquare);
}
