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

}
// arg1: {lat: -25.363, lng: 131.044}
// arg2: map var
// arg3: string, does nothing
function putMarker(position, map) {
	var marker = new google.maps.Marker({
		position: position,
		map: map,
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
