console.log('test')

function createMenu() {
  numberOfMenu = $('.menu-input').val();
    menu = $('<li>').html('<h2>' + numberOfMenu[0].toUpperCase() + numberOfMenu.substr(1) + '</h2><p class="arrow"><</p>');
    $('.menu-dropdown').append(menu);
}

function findDeg(tr) {
  var values = tr.split('(')[1],
      values = values.split(')')[0],
      values = values.split(',');

      var b = values[1];
      return b;
}



$('li').on('click', function(event){
  var target = $(event.target);
  var realTarget = target.closest('li').find('.arrow');
  var currentDeg = findDeg(realTarget.css('transform'));
  if( currentDeg == 1 ){
    $(realTarget).css('transform', 'rotate(-90deg)');
  } else {
    $(realTarget).css('transform', 'rotate(90deg)');
  };
})
