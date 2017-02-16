console.log('decider');

var countHead = 0;
var countTails = 0;
var coinSide = "";
var resultNumber = "";
var coin = document.getElementById('flipCoin');
var result = document.getElementById('result');
var tallyHead = document.getElementById('tally-Head');
var tallyTails = document.getElementById('tally-Tails');

var rdmNumber = function(){
  min = 0;
  max = 1;
  return Math.round(Math.random()* (max-min)+min);
}

var coinFlip = function() {
    while (countHead < 5 && countTails < 5 ){
      var x = rdmNumber();
      if (x===0) {
        coinSide = 'HEADS';
        console.log(coinSide);
        countHead = countHead + 1;
      } else if (x===1){
        coinSide = 'TAILS';
        console.log(coinSide);
        countTails = countTails + 1;
      }
    }
      console.log (countWin())
}

var countWin = function() {
  if (countHead === 5) {
    resultNumber = coinSide + ' WINNER';
  } else if (countTails === 5){
    resultNumber = coinSide + ' WINNER';
  }
  result.innerHTML = resultNumber;
  tallyHead.innerHTML = 'Heads: ' + countHead;
  tallyTails.innerHTML = 'Tails: ' + countTails;
}

coin.addEventListener('click', coinFlip);
