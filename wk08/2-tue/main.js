console.log('clock');

window.onload = function () {
  setInterval(showClock, 1000);
}

function showClock () {
  var canvas = $('.canvas');
  var context = canvas[0].getContext('2d');

  var date = new Date;
  var angle;
  var secHandLength = 60;

  context.clearRect(0, 0, canvas.width(), canvas.height());

  OUTER_DIAL1();
  OUTER_DIAL2();
  CENTER_DIAL();
  MARK_THE_HOURS();
  MARK_THE_SECONDS();

  SHOW_SECONDS();
  SHOW_MINUTES();
  SHOW_HOURS();

  function OUTER_DIAL1() {
    context.beginPath();
    context.arc(canvas.width() / 2, canvas.height() / 2, secHandLength + 10, 0, Math.PI * 2);
    context.strokeStyle = '#92949c';
    context.stroke();
  }
  function OUTER_DIAL2() {
    context.beginPath();
    context.arc(canvas.width() / 2, canvas.height() / 2, secHandLength + 7, 0, Math.PI * 2);
    context.strokeStyle = '#929bac';
    context.stroke();
  }
  function CENTER_DIAL() {
    context.beginPath();
    context.arc(canvas.width() / 2, canvas.height() / 2, 2, 0, Math.PI * 2);
    context.linewidth = 3;
    context.fillStyle = '#353535'
    context.strokeStyle = '#0c3d4a';
    context.stroke();
  }

  function MARK_THE_HOURS() {
    for (i = 0; i < 12; i++){
      angle = (i - 3) * (Math.PI * 2) / 12;
      context.linewidth = 1;
      context.beginPath();

      var x1 = (canvas.width() / 2) + Math.cos(angle) * (secHandLength);
      var y1 = (canvas.width() / 2) + Math.sin(angle) * (secHandLength);
      var x2 = (canvas.width() / 2) + Math.cos(angle) * (secHandLength - (secHandLength / 7));
      var y2 = (canvas.width() / 2) + Math.sin(angle) * (secHandLength - (secHandLength / 7));

      context.moveTo(x1, y1);
      context.lineTo(x2, y2);

      context.strokeStyle = '#466b76';
      context.stroke();
    }
  }
  function MARK_THE_SECONDS() {
    for (i = 0; i < 60; i++){
      angle = (i - 3) * (Math.PI * 2) / 60;
      context.linewidth = 1;
      context.beginPath();

      var x1 = (canvas.width() / 2) + Math.cos(angle) * (secHandLength);
      var y1 = (canvas.width() / 2) + Math.sin(angle) * (secHandLength);
      var x2 = (canvas.width() / 2) + Math.cos(angle) * (secHandLength - (secHandLength / 30));
      var y2 = (canvas.width() / 2) + Math.sin(angle) * (secHandLength - (secHandLength / 30));

      context.moveTo(x1, y1);
      context.lineTo(x2, y2);

      context.strokeStyle = '#c4d1d5';
      context.stroke();
    }
  }
  function SHOW_SECONDS() {
    var sec = date.getSeconds();
     angle = ((Math.PI * 2) * (sec / 60)) - ((Math.PI * 2) / 4);
     context.linewidth = 0.5;

     context.beginPath();

     context.moveTo(canvas.width() / 2, canvas.height() / 2);

     context.lineTo((canvas.width() / 2 + Math.cos(angle) * secHandLength),
         canvas.height() / 2 + Math.sin(angle) * secHandLength);


     context.moveTo(canvas.width() / 2, canvas.height() / 2);

     context.lineTo((canvas.width() / 2 - Math.cos(angle) * 20),
         canvas.height() / 2 - Math.sin(angle) * 20);

     context.strokeStyle = '#586A73';
     context.stroke();
  }
  function SHOW_MINUTES() {
      var min = date.getMinutes();
      angle = ((Math.PI * 2) * (min / 60)) - ((Math.PI * 2) / 4);
      context.linewidth = 1.5;

      context.beginPath();
      context.moveTo(canvas.width() / 2, canvas.height() / 2);

      context.lineTo((canvas.width() / 2 + Math.cos(angle) * secHandLength / 1.1),
                   canvas.height() / 2 + Math.sin(angle) * secHandLength / 1.1);

      context.strokeStyle = '#999';
      context.stroke();
  }
  function SHOW_HOURS() {

      var hour = date.getHours();
      var min = date.getMinutes();
      angle = ((Math.PI * 2) * ((hour * 5 + (min / 60) * 5) / 60)) - ((Math.PI * 2) / 4);
      context.linewidth = 1.5;

      context.beginPath();
      context.moveTo(canvas.width() / 2, canvas.height() / 2);
      context.lineTo((canvas.width() / 2 + Math.cos(angle) * secHandLength / 1.5),
                  canvas.height() / 2 + Math.sin(angle) * secHandLength / 1.5);

      context.strokeStyle = '#000';
      context.stroke();
  }
}
