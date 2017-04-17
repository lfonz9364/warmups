
$('.confirm').on('click',function (){
  var players = Number($('.players').val());
  var allPlayer = [];
  for (var i = 0; i < players; i++){
    var player = new Object();
    player['image'] = [];
    player['value'] = [];
    allPlayer.push(player);
  }

    $.ajax({
      url: 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1',
      method: 'get'
    }).done(function(data){
      for (var i = 0; i < players; i++){
        var everyPlayerAllCard = $('<div class="player' + i + '">').append(drawCard(data.deck_id));
        $('.player').append(everyPlayerAllCard);
      }
    });

    function drawCard(deckId) {
      $.ajax({
        url: 'https://deckofcardsapi.com/api/deck/'+ deckId + '/draw/?count=2'
      }).done(function(data){
        console.log(data.cards);
        var x = data.cards;
        var everyPlayer;
        x.forEach(function(xs){
          var card = $('<img>').attr('src', xs.image );
          var playerCards = $('<div class="cards">');
          everyPlayer = playerCards.append(playerCards);
        })
        return everyPlayer;
      })
    };

})



// var gameStatus  = 1;                  // Tells whether new deal or not
// var winnings   = 100;                 //  Holds winnings
// var back        = new Image(73,97);   // Image for back of card
// var offset      = 0;                  // Image offset
//
// var picked      = new Array(52);      // Cards already picked
// var flipped     = new Array(5);       // cards already flipped
// var cards       = new Array(5);       // images for dealt cards
// var cardVals    = new Array(5);       // values of dealt cards
// var cardImg     = new Array(52);      // images of entire deck
//
// for (var i = 0; i < 5; i++){
//   cards[i] = new Image(73,97);        // Create array of five card images
//   flipped[i] = 0;                     // set flipped flags to unflipped
// }
//
// for (var i = 0; i < 52; i++) {
//   cardImg[i] = new Image(73,97);      // create image array for whole deck
//
//   // prechace all the card images
//
//   cardImg[i].src = "/images/" + (i+1) +".jpg";
//   picked[i] = 0;                      // set picked flags to unpicked
// }
//
// back.src = '/images/b.jpg';   // store image for backs of cards
