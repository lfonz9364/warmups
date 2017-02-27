console.log('decoder');


var caesarChipher = function (){
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var usrInput = 'FRZDUGV GLH PDQB WLPHV EHIRUH WKHLU GHDWKV, WKH YDOLDQW QHYHU WDVWH RI GHDWK EXW RQFH.'
  var lowerCased = usrInput.toLowerCase();
  var usrInputArray = lowerCased.split('');
  var decodedMessage = [];

  for (var index = 0; index < usrInputArray.length; index++) {
    var usrInputValue = usrInputArray[index];
    var searchIndex = alphabet.indexOf(usrInputValue);

    if (searchIndex !== -1 ) {
      if (searchIndex < 3) {
        var newAlphabetIndex = alphabet.length - (3 - searchIndex);
        var decodedAlphabet = alphabet[newAlphabetIndex];
      } else {
        var newAlphabetIndex = searchIndex - 3;
        var decodedAlphabet = alphabet[newAlphabetIndex];
      }
    } else  {
      var decodedAlphabet = usrInputValue;
    }
    decodedMessage.push(decodedAlphabet);
  }
  var message = decodedMessage.join('');
  var messagePrint = document.createElement('p');
  messagePrint.textContent = message;
  document.querySelector('body').appendChild(messagePrint);
}
