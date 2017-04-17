
var myResults = [ {name: "six pack of beer", location: {lat: 37.767182, long: -122.5}},
          {name: "whacky glasses", location: {lat: 37.767182, long: -122.51}},
          {name: "whiskey bottle", location: {lat: 37.767282, long: -122.49}},
          {name: "diving goggles", location: {lat: 37.770282, long: -122.503}},
          {name: "running shoes", location: {lat: 37.7669, long: -122.457}},
          {name: "paint brushes", location: {lat: 37.76800, long: -122.4580}}]

//Harvesine Formula
function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1);
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon/2) * Math.sin(dLon/2)
            ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c; // Distance in km
    return d;
    }

function deg2rad(deg) {
    return deg * (Math.PI/180)
    }

function proximityCalculate(currentLat, currentLong) {
  var currentLat = document.querySelector
  var currentLong = document.querySelector
  agregateDetails = [];
  myResults.forEach(function findLocation(detail) {
    itemLat = detail.location.lat;
    itemLong = detail.location.long;
    distance = Math.round(getDistanceFromLatLonInKm(currentLat, currentLong, itemLat, itemLong));
    individualProximity = {item: detail.name, proximity: distance};
    agregateDetails.push(individualProximity);
  })
  agregateDetails.sort(function(a, b) {
    return a.proximity - b.proximity;
    });
  agregateDetails.forEach(function (fullDetail){
    paragraph = document.createElement('p');
    body = document.querySelector('body');
    paragraph.innerText = 'name: ' + fullDetail.item + ', ' + 'distance: ' + fullDetail.proximity + 'km';
    body.appendChild(paragraph);
  });
}
