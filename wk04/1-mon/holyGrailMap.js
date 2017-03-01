console.log('holyGrailMap');

var map1 = [
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","X","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"]
];

var map2 = [
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","X","A","A","A"]
];

var map3 = [
["A","A","A","A","A"],
["A","A","V","A","A"],
["A","A","A","V","A"],
["v","v","V","v","X"],
["A","V","A","A","A"]
];

var map4 = [
["A","A","A","A","A"],
["A","A","V","A","A"],
["A","A","A","V","A"],
["v","v","V","v","A"],
["X","V","A","A","A"]
];

var holyGrailMap = [
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","G","v","S","S"],
["v","v","H","v","S","S"],
["v","v","V","v","S","S"],
["A","V","A","A","A","S"]
];


var selectMap = function(map) {
  debugger;
  if (map === "holyGrailMap") {
    return holyGrailMap;
  } else if (map === "map1") {
    return map1;
  } else if (map === "map2") {
    return map2;
  } else if (map === "map3") {
    return map3;
  } else if (map === "map4") {
    return map4;
  }
}

var treasureFinder = function(treasureMap,sign) {
  var sign = document.querySelector('#charSign').value;
  var map = document.querySelector('#map').value;
  var bodyList = document.querySelector('body');
  var newElement = document.createElement('article');
  var treasureMap = selectMap(map);
  var totalChar = countDuplicate(treasureMap,sign);
  if (totalChar > 1) {
    newElement.textContent = sign + " that doesn't belong in a museum!";
  } else {
    var longLat = [];
    var i = 0;
    while (treasureMap[i].includes(sign) !== true) {
      i++;
    }
    var j = treasureMap[i].indexOf(sign);
    longLat.push (i, j);
    newElement.textContent = sign + " [" + longLat + "]";
  }
  bodyList.appendChild(newElement);
}

var countDuplicate = function(array, char) {
  var countChar = 0;
  for (var j = 0; j < array.length; j++ ) {
    for (var x = 0; x < array[j].length; x++){
      if(array[j][x] === char){
        countChar++;
      }
    }
  }
  return countChar;
}
