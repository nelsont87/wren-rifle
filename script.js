
// <!--Operation Dog Rescue Party Time!
// Use google maps on page, 
// prompt whether the user is ready to take the adventure to rescue the dogs. 
// (Prompt user on what dog to rescue)?.
// Make Icon of dogs randomly appear on the page that are clickable. 
// User will play the game, if user wins, they successfully rescued a dog and award him with one drink
// Ten dogs total, rescue 3 dogs if user wins - Prompt would you like to play again?

// This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

// Ask if the user is ready to play
$('#button').append('<p> Are you ready to rescue our puppies? </p>');
$('#yes').click(function(){
  
});
$('#no').click(function() {
  $('#nextTime').append('<p> Come back when you are ready! </p>')
});






//variable game to put the puppy at risk of not being saved

// var userChoice = prompt("Do you choose rock, paper or scissors?");
// var computerChoice = Math.random();
// if (computerChoice < 0.34) {
//     computerChoice = "rock";
// } else if(computerChoice <= 0.67) {
//     computerChoice = "paper";
// } else {
//     computerChoice = "scissors";
// }

// if (choice1 === "paper") {
//     if (choice2 === "rock") {
//         return "paper wins";
//     } else {
//         if (choice2 === "scissors") {
//             return "scissors wins";
//         }
//     }
//     if (choice1 === "scissors") {
//         if (choice2 === "rock") {
//             return "rock wins";
//         } else {
//             if (choice2 === "paper") {
//                 return "scissors wins";
//             }
//         }
//     }
// }







function initAutocomplete() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -33.8688, lng: 151.2195},
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
     markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
      
    });
    map.fitBounds(bounds);
    });
};



