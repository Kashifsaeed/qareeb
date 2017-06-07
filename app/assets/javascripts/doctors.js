$(window).keydown(function(event){
  if(event.keyCode == 13) { 
    event.preventDefault(); 
    return false; 
  }  
});

// NEW DOCTOR 

var maps = [];
var timingButtons = 0;

function initialize() {
  getAllExistingMaps();
  document.getElementById("add_clinic").onclick = getNewMap;
}

function getNewMap() {
  setTimeout(function(){
    temp = document.getElementById("mapnew_clinics");
    temp.id = 'map' + maps.length;
    initMap(temp);
    button = document.getElementById("add_timing");
    button.id = "add_timing" + timingButtons;
    timingButtons++;
    button.onclick = validateFee;
  }, 100);
}

function getAllExistingMaps() {
  var divs = document.getElementsByTagName("div"), item;
  for (var i = 0, len = divs.length; i < len; i++) {
    item = divs[i];
    if (item.id && item.id.indexOf("map") == 0) {
      initMap(item);
    }
  }
}

function initMap(element) {
  lng = parseFloat(element.previousSibling.previousSibling.value);
  if (isNaN(lng)) {
    lng = 67.0099;
    lat = 24.8615;
    zoom = 13;
  }
  else {
    lat = parseFloat(element.previousSibling.previousSibling.previousSibling.value);
    zoom = 15;
  }
  var map = new google.maps.Map(element, {
    zoom: zoom,
    center: {
      lat: lat,
      lng: lng
    },
    mapTypeId: 'terrain', 
    draggable: false, 
    zoomControl: false, 
    scrollwheel: false, 
    disableDoubleClickZoom: true, 
    streetViewControl: false 
  });
  maps.push(map);
}

function Autocomplete(element){
  var options = {
    componentRestrictions: {country: "pk"}
  };
  var nearby = new google.maps.places.Autocomplete(element, options, {types: ['geocode']} );
  nearby.addListener('place_changed', function(){
    var place = this.getPlace();
    element.parentNode.nextSibling.value = place.geometry.location.lat();
    element.parentNode.nextSibling.nextSibling.value = place.geometry.location.lng();
  });
  nearby.addListener('place_changed', function(){
    var id = parseInt(element.parentNode.nextSibling.nextSibling.nextSibling.nextSibling.id.split("map")[1]);
    var place = this.getPlace();
    if (place.geometry.viewport) {
      maps[id].fitBounds(place.geometry.viewport);
    } else {
      maps[id].setCenter(place.geometry.location);
      maps[id].setZoom(17);
    }
  });
}

// SHOW DOCTOR 

function initializeShow() {
  loadAllMaps();
}

function loadAllMaps() {
  divs = document.getElementsByClassName("map");
  for (var i=0; i<divs.length; i++) {
    loadMap(divs[i]);
  }
}

function loadMap(element) {
  lat = parseFloat(element.firstChild.innerHTML);
  lng = parseFloat(element.lastChild.innerHTML);
  new google.maps.Map(element, {
    zoom: 15, 
    center: {
      lat: lat, 
      lng: lng 
    }, 
    mapTypeId: 'terrain', 
    draggable: false, 
    zoomControl: false, 
    scrollwheel: false, 
    disableDoubleClickZoom: true, 
    streetViewControl: false 
  });
}

// AUTOCOMPLETE 

$("#doctor_name").autocomplete({
  source: "/doctors/autofill?type=name", 
  minLength: 2 
});

// VALIDATION 

// New Doctor Page 
$("#new_doctor").validate({
  rules: {
    "doctor[name]": {
      required: true,
    },
    "doctor[phone]": {
      required: true,
    },
    "doctor[speciality]": {
      required: true,
    },
    "doctor[pmdc_id]": {
      required: true,
    }
  }
});

// Edit Doctor Page 
$(document).ready(function(){
  // Get Edit Doctor Form [If Exists] 
  var forms = document.getElementsByTagName("form"), form;
  for (var i = 0, len = forms.length; i < len; i++) {
    form = forms[i];
    if (form.id && form.id.indexOf("edit_doctor") == 0) {
      $(form).validate({
        rules: {
          "doctor[name]": {
            required: true,
          },
          "doctor[phone]": {
            required: true,
          },
          "doctor[speciality]": {
            required: true,
          },
          "doctor[pmdc_id]": {
            required: true,
          }
        }
      });
      // Placed here so it only fires when on Edit Doctor Page 
      validateFees();
    }
  }
});

function validateFee() {
  temp = this.parentNode;
  setTimeout(function(){
    $(temp.previousSibling.firstChild.firstChild.nextSibling.firstChild).rules( "add", {
      required: true 
    });
  }, 100);
}

function validateFees() {
  // Loop through all Existing Clinics 
  button = document.getElementById("add_timing");
  while (button !== null) {
    button.id = "add_timing" + timingButtons;
    timingButtons++;
    // Apply Validation to all Timings that Exist 
    // - Loop through all Existing Timings of Clinic [via DOM Navigation] 
    timing = button.parentNode.previousSibling.previousSibling.firstChild;
    while (timing !== null) {
      $(timing.firstChild.nextSibling.firstChild).rules( "add", {
        required: true 
      });
      timing = timing.parentNode.previousSibling.previousSibling.firstChild;
    }
    // Apply Validation to all Timings that will be added 
    button.onclick = validateFee;
    button = document.getElementById("add_timing");
  }
}
