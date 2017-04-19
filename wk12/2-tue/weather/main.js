console.log('weather connected');

// HTML5 geolocation.
$(document).ready(function(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      console.log(pos);
      var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?lat=" + pos.lat + "&lon=" + pos.lng + "&units=metric&APPID=23073c5ee142ae5fc437329842e4f7ce";
      $.ajax({
        type: "GET",
        url: weatherUrl,
        dataType: "jsonp",
      }).done(function(data) {
        var result = data;
        var description = $('<p>').text(result.weather[0].description);
        var temp = $('<p>').text(result.main.temp + " celcius");
        var city = $('<p>').text("City: " + result.name);
        $('body').append(description);
        $('body').append(temp);
        $('body').append(city);
      })
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
      'Error: The Geolocation service failed.' :
      'Error: Your browser doesn\'t support geolocation.');
      infoWindow.open(map);
    }
});
