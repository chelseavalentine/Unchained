var map;

// "main" function
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.718101, lng: -74.002108},
    scrollwheel: false,
    zoom: 17
  })

  locate();

  marker1 = putMarker({lat: 40.717545, lng: -74.001735}, map);
  marker2 = putMarker({lat: 40.717756, lng: -74.003699}, map);
  marker3 = putMarker({lat: 40.718415, lng: -74.002991}, map);
  marker4 = putMarker({lat: 40.717016, lng: -74.001403}, map);
  marker5 = putMarker({lat: 40.718761, lng: -74.003104}, map);
  
  // TODO
  console.log('hi');
  $.getJSON("/proxy/data.json", function(data) {
    console.log(data[0]);

    //makeContentString()
    console.log("help");
    addInfoWindow(map, marker1, data[0], '../res/images/food/brunch_spread.jpg');
    addInfoWindow(map, marker2, data[1], '../res/images/food/coffee.jpg');
    addInfoWindow(map, marker3, data[2], '../res/images/food/roasted_pork_and_scrambled_egg_burrito_with_some_red_pepper_salsa.jpg');
    addInfoWindow(map, marker4, data[3], '../res/images/food/strawberry_cheesecake.jpg');
    addInfoWindow(map, marker5, data[4], '../res/images/food/halal.jpg');
  });
}
// arg1: {lat: -25.363, lng: 131.044}
// arg2: map var
// arg3: string, does nothing
function putMarker(position, map) {
	var marker = new google.maps.Marker({
		position: position,
		map: map
	});
  return marker;
}
function putCustomMarker(position, map, icon) {
  var marker = new google.maps.Marker({
    position: position,
    map: map,
    icon: icon
  });
  return marker;
}
function makeContentString(merchant_data, imgURL) {
  name = merchant_data.CleansedMerchantName;

  var contentString = '<div class=infow>' +
  '<h1> ' + merchant_data.CleansedMerchantName + ' </h1>' +
  '<img src= "' + imgURL + '" + height="50" width="42">' 
  + '<p> ' + merchant_data.CleansedMerchantStreetAddress + ' </p>' + 
  '<p> ' + merchant_data.CleansedMerchantTelephoneNumber + '</p>' + '</div>';
  console.log(contentString);
  return contentString;
}
function addInfoWindow(map, marker, merchant_data, imgURL) {
  console.log("attempt to add info window");
  var contentString = makeContentString(merchant_data, imgURL);
  console.log(contentString);
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
  
  marker.addListener('dblclick', function() {
    infowindow.close(map, marker);
  });
}
function locate() {

  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }; 
        // recenter
        map.setCenter(pos);
        // custom self marker
        var image = 'http://www.robotwoods.com/dev/misc/bluecircle.png';
        meMarker = putCustomMarker(pos, map, image);

      }, function() {
        pos = {lat: 40.718101, lng: -74.002108};
        map.setCenter(pos);
        //handleLocationError(true, infoWindow, pos);
      });
  } 
  else {
      // Browser doesn't support Geolocation
      pos = {lat: 40.718101, lng: -74.002108};
      map.setCenter(pos);
      //handleLocationError(false, infoWindow, pos);
  }
}
