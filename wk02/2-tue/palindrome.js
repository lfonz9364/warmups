console.log('Palindrome');

var usrInput = prompt('Please input a word');

var checkForPalindrome = function() {
  debugger;
  var replacePunctuation = usrInput.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()'"]/g," ");
  var trial = replacePunctuation.replace(/\s{2,}/g," ");
  var noSpace = replacePunctuation.replace(/ /g,"");
  var lowerCased = noSpace.toLowerCase();
  var reversedCharacters = lowerCased.split("").reverse().join("");

  if (reversedCharacters === lowerCased) {
    return true;
  } else {
    return false;
  }
}
