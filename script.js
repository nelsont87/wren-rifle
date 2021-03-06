
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
$('#button').append('<p>Are you ready to take the adventure and rescue our puppies?</p>');
$('#yes').click(function() {
  $('#inputLocation').text("Please type in a location and click on the puppy you would like to rescue.");
});

$('#no').click(function() {
  alert('Come back when you are ready!');
});

// $('#icon').click(function() {
//   var userChoice = prompt("In order to rescue the puppy, we have to flip a coin, head or tale? (h/t)");
//   // $('input:textbox').val('h/t');
//   var computerChoice = Math.random();
//   if (computerChoice < 0.51) {
//     $('#game').text('You guessed it right! Congradulations! You have successfully rescued the puppy! Here is a drink as a reward!')
//   } else {
//     $('#game').text('Oops! The puppy has been rescued by someone else, pick another puppy and try again!');
//   }
// })


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


    	//creating the icon that will be displayed
    	function Platform(pos, wid, hei){
  			this.draw = function(ctx){
  				var dogIcon= document.getElementById("dogImg");
    		ctx.drawImage(dogIcon, pos.x+.5, pos.y+.5, 25, 22);

  		};
		};


		//creating random boxes on the canvas
		var can = document.getElementById("can"),
		    ctx = can.getContext('2d'),
		    wid = can.width,
		    hei = can.height,
		    numPlatforms = 5,
		    platWid = 25,
		    platHei = 22,
		    platforms = [],
		    hash = {};
		    ctx.clearRect(0,0,500, 500);
      //providing random x,y coordinates
  for(var i = 0; i < numPlatforms; i++){
    var posX = Math.floor(Math.random()*(wid-platWid)/platWid)*platWid,
      posY = Math.floor(Math.random()*(hei-platHei)/platHei)*platHei;
//ensuring the icons do not overlap
    while (hash[posX + 'x' + posY]){
      posX = Math.floor(Math.random()*wid/platWid)*platWid;
      posY = Math.floor(Math.random()*hei/platHei)*platHei;
    }
    
    hash[posX + 'x' + posY] = 1; 
    platforms.push(new Platform({x:posX, y:posY}, platWid, platHei));
  }

    for(var i = 0; i < platforms.length; i++){
      platforms[i].draw(ctx);
    }
    can.addEventListener('click', function(e){
      console.log("Why are you looking in the console?");
      var userChoice = prompt("In order to rescue the puppy, we have to flip a coin, head or tale? (h/t)");
      var computerChoice = Math.random();
      if (computerChoice < 0.51) {
        $('#game').text('You guessed it right! Congradulations! You have successfully rescued the puppy! Here is a drink as a reward!')
      } else {
        $('#game').text('Oops! The puppy has been rescued by someone else, pick another puppy and try again!');
      }
      });

   

	    });
	    map.fitBounds(bounds);
	});
};


// <p hidden>This paragraph should be hidden.</p>

// $("button").click(function(){
//     $("div").hide({
//         height: 'hide'
//     });
// }); 

// $(selector).hide(speed,callback);

// $(selector).show(speed,callback);


