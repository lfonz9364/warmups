console.log('MapFaker');

var treasureMap = [[]];
var numberOfRows;
var numberOfColumns;

var randomLocationIndexRows = function(numberOfRows) {
  var maxRows = numberOfRows;
  return Math.floor(Math.random() * numberOfRows);
}

var randomLocationIndexColumns = function(numberOfColumns) {
  var maxColumns = numberOfColumns;
  var minColumns = 0;
  return Math.floor(Math.random() * numberOfColumns);
}

var makeFakeMap = function(numberOfRows,numberOfColumns) {
  var randomColumns = randomLocationIndexColumns(numberOfColumns);
  var randomRows = randomLocationIndexRows(numberOfRows);
  var fakeMap = [];
  for (j=0; j < numberOfRows; j++) {
    var columns = [];
    for (i=0; i < numberOfColumns; i++) {
      columns.push('A');
    }
    if (j == randomRows ) {
      // columns.remove(randomColumns);
      // columns.insert(randomColumns,'X');
      columns.splice(randomColumns,1,'X');
    }
    // fakeMap.push(columns);
    console.log (columns);
  }
}
