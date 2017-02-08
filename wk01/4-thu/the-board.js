console.log('board');

var row = prompt("Please define the height","8");
var column = prompt("Please define the width","8");
var symbol = prompt("Please define the symbol", "#");
var space = "";


 for (var i = 1; i <= row; i++){
  var spaceRowString = " ";

    if (i % 2 === 0) {
      for(var j = 0 ; j < column ; j++) {
        spaceRowString = spaceRowString.concat(symbol+ " ");
      }
     } else {
      for(var j = 0 ; j < column ; j++){
        spaceRowString = spaceRowString.concat(" "+symbol);
      }
     }
  // }
  space += spaceRowString + "\n";
}
console.log(space);
