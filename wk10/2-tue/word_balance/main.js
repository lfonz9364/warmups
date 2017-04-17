$(document).ready(function(){
  $('.weight').on('click', function(event){
    event.preventDefault;
    var word = $('.word').val();
    var alphabet = genAlphabet('a', 'z');
    var leftWordsWeight = [];
    var rightWordsWeight = [];

    for (var i = 0; i < word.length; i++){
      var weight = (i + 1) * $.inArray(word[i], alphabet);
      leftWordsWeight.push(weight);
      for(var j = 0; j < word.length; j++){
        var weightRight = (i + j) * $.inArray(word[j], alphabet);
        rightWordsWeight.push(weightRight);
      }
    }
    console.log(leftWordsWeight, rightWordsWeight)
    if(leftWordsWeight.reduce(getSum) === rightWordsWeight.reduce(getSum)){
        console.log('text')
    }

  });

function genAlphabet(charA, charZ){
    var a = [];
    var i = charA.charCodeAt(0);
    var j = charZ.charCodeAt(0);
    for (; i <= j; i++) {
      a.push(String.fromCharCode(i));
    }
    return a;
  }
});

function getSum(total, num){
  return total + num;
};
