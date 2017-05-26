var arr;
var placeSearch, autocomplete;
var map,marker;

function initialize() {
  initMap();
  // initAutocomplete();
}



// google map show

function initMap() {
  var karachi = {lat: 24.8615, lng: 67.0099};
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: karachi,
    mapTypeId: 'terrain'
  });
  }




function Autocomplete(element){
  id = element.id
  arr = id.split("_")
  // arr.push
  var options = {
    componentRestrictions: {country: "pk"}
  };

  var nearby = new google.maps.places.Autocomplete(element,options, {types: ['geocode']} );
  nearby.addListener('place_changed', pickupcoordinates);
  nearby.addListener('place_changed', marker);

}

// fill lat/lng for pickup task

function pickupcoordinates() {

  var place = this.getPlace();
  document.getElementById('doctor_clinics_attributes_'+arr[3]+'_lat').value = place.geometry.location.lat();
  document.getElementById('doctor_clinics_attributes_'+arr[3]+'_lng').value = place.geometry.location.lng();

}




// create marker for pickup task

function marker(element) {


      var place = this.getPlace();

      // here marker fit on the map
      if (place.geometry.viewport) {

          map.fitBounds(place.geometry.viewport);
        } else {

          map.setCenter(place.geometry.location);
          map.setZoom(17);

        }

        // here remove marker if any on map
      if (marker) {

        marker.setMap(null);

      }
      // create new marker on map
      marker = new google.maps.Marker({
        position: place.geometry.location,

        map: map,
        // label: "P",
        anchorPoint: new google.maps.Point(0, -29)
        });



  marker.setMap(map);

}
