console.log('connected');


var groups = {
  A: 20,
  B: 15,
  C: 10
}

function splitTheBill(groups) {
  var arr = [];

  $.each(groups, function(i, val){
    arr.push(val);
    arr.sort();
  });

  var middle = Math.floor((arr.length - 1) / 2);
  if (arr.length % 2) {
      var median = arr[middle];
  } else {
      var median = (arr[middle] + arr[middle] + 1) / 2.0;
  };

  $.each(groups, function(i, val){
    groups[i] = val - median;
  });

  $.each(groups, function(i,val){
    var par = $('<p>').text(i + ":" + val);
    $('body').append(par);
  })
  // return group;
}
