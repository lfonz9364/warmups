console.log('grannytalk');

var year = Math.floor(Math.random() * (1950-1930)) + 1930;

var grannyTalk = function(usrInput) {
  var usrInput = prompt('Say something to Granny');
  var grannyReply;

  if (usrInput == 'BYE') {
    return grannyReply = "What's that honey, I didn't hear you..";
  } else if (usrInput == usrInput.toUpperCase()) {
    return grannyReply = "NO, NOT SINCE " +year;
  } else {
    return grannyReply = "SPEAK UP SONNY JIM";
  }
  // console.log(grannyReply);
}

var grandpaTalk = function(usrInput) {
  var grannyReply =  grannyTalk(usrInput);
  var yearString = year + "";
  var grandpaReply;

  if (grannyReply === "What's that honey, I didn't hear you..") {
    return grandpaReply = grannyReply + "What's that sunny, I didn't talk to you..";
  } else if (grannyReply === "SPEAK UP SONNY JIM") {
    return grandpaReply = "SPAEK UP SUNNY JAM";
  } else {
    return grandpaReply = "NO, NOT SINCE " + (yearString.split("").reverse().join(""));
  }
  // console.log(grannyReply);
  // console.log(grandpaReply);
}
