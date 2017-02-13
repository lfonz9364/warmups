console.log('minigolf');


var score = [
  {
  name: "Bob",
  hole: [3,2,6,11,9,2,6,9,10]
},{
  name: "Jimbo",
  hole: [5,12,9,22,13,7,16,10,11]
},{
  name: "Fish",
  hole: [2,2,4,5,4,3,6,4,1]
},{
  name: "Par",
  hole: [3,4,5,5,3,3,4,3,5]
}];

var playerName = titleCase(prompt('Please enter Player Name'));

//To capitalise the input
function titleCase(str) {
  str = str.toLowerCase();
  str = str.split(' ');

  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
}

var indexName = function() {
  var i = 0;
  while(score[i].name !== playerName){
  i++;
}
return i;
}



var sum = function() {
  var x = indexName();
  var numberOfScore = score[x].hole.length;
  var totalSum = 0;
  var j=0;

  while (j < numberOfScore) {
    totalSum = totalSum + score[x].hole[j];
    j++;
  }
  return totalSum;
}

var winOrNot = function() {
  var y = indexName();
  var numberOfWin = score[y].hole.length;
  var win = [];
  var a=0;
debugger;
   while( a <= numberOfWin) {
    if (score[y].hole[a] > score[3].hole[a]) {
      win.push('won');
    } else if (score[y].hole[a] <= score[3].hole[a]) {
      win.push('lose');
    }
    a++;
   }
   return win;
}
