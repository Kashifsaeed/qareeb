var arr;
function Autocomplete(element){
  id = element.id
  arr = id.split("_")
  // arr.push
  var options = {
    componentRestrictions: {country: "pk"}
  };
  
  var nearby = new google.maps.places.Autocomplete(element,options, {types: ['geocode']} );
  nearby.addListener('place_changed', pickupcoordinates);
}

// fill lat/lng for pickup task

function pickupcoordinates() {
  
  var place = this.getPlace();
  document.getElementById('doctor_clinics_attributes_'+arr[3]+'_lat').value = place.geometry.location.lat();
  document.getElementById('doctor_clinics_attributes_'+arr[3]+'_lng').value = place.geometry.location.lng();

}