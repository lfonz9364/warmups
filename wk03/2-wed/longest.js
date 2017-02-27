console.log('longest app');



document.querySelector('button').addEventListener('click', function longest() {
  var s1 = document.querySelector('.firstSentence').value;
  var s2 = document.querySelector('.secondSentence').value;
  var mergeSentences = s1.concat(s2);
  var uniqueChar = "";

  for (var x=0; x < mergeSentences.length; x++) {
    if (uniqueChar.indexOf(mergeSentences.charAt(x))==-1) {
      uniqueChar += mergeSentences[x];
    }
  }
  var newSentences = uniqueChar.split("").sort().join("");
  var textList = document.querySelector('.newSentences');
  var newElement = document.createElement('article');
  newElement.textContent = newSentences;
  textList.appendChild(newElement);
});
