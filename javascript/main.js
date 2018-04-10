 
// on page load show map
window.onload = function() {
	initMap();
	getAPIdataOrlando()
	
};
document.getElementById("california").onclick = function(){
	getAPIdataOrlando('santa maria, us');
};
document.getElementById("tenessee").onclick = function(){
	getAPIdataOrlando('decatur, us');
};
document.getElementById("florida").onclick = function(){
	getAPIdataOrlando('wilson, us');
};





//temperatuur
function getAPIdataOrlando(stad) {

	// construct request
	// var request = 'http://api.openweathermap.org/data/2.5/weather?appid=b0c8dafa512a0134e90df6ece3c2b7a2&q=the%20Hague,nl';
	var url = "http://api.openweathermap.org/data/2.5/weather";
	var apiKey ="b0c8dafa512a0134e90df6ece3c2b7a2";
	var city = stad;
	
	// construct request
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;

	// get current weather
	fetch(request)	
	
	// parse response to JSON format
	.then(function(response) {
		return response.json();
	})
	
	// do something with response
	.then(function(response) {
		// show full JSON object
		console.log(response);
		var temperatuur = Math.round((response.main.temp - 273.25) *10) / 10;
		var mintemp = Math.round((response.main.temp_min - 273.25) *10) / 10;
		var maxtemp = Math.round((response.main.temp_max - 273.25) *10) / 10;
		document.getElementById('weather').innerHTML = 	"De huidige temperatuur is " + temperatuur + " &deg;C" +
														"<br>De minimum temperatuur is " + mintemp + " &deg;C" +
														"<br>De minimum temperatuur is " + maxtemp + " &deg;C" ;

	})
	// catch error
	.catch(function (error) {
		console.log('Request failed', error);
	});
}





// init map
var myMap;

function initMap() {

//style
	var kleuren = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8ab0bd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#da795c"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [
      {
        "color": "#a22509"
      },
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e57668"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#acdfdd"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
];
	// set optios for map 
	var mapOptions = {
		center: {
			lat: 36.015596, 
			lng: -97.104557
		},
		zoom: 4,
		styles: kleuren,
	};

	// create map and add to page
	myMap = new google.maps.Map(document.getElementById('map'), mapOptions);



	//create marker for kennedy space center
	var hhsMarker = new google.maps.Marker({
		position: {
			lat: 28.5728722, 
			lng: -80.6489808,
		},
		map: myMap,
		title: 'Kennedy Space Center',
	});

	//create marker for Cape Canaveral
	var hhsMarker = new google.maps.Marker({
		position: {
			lat: 28.474009, 
			lng: -80.577174,
		},
		map: myMap,
		title: 'Cape Canaveral',
	});

		//create marker for Florida
	//var hhsMarker = new google.maps.Marker({
		//position: {
			//lat: 27.664827, 
			//lng: -81.515754,
		//},
		//map: myMap,
		//title: 'Florida',
	//});


		//landingspot United Launchh Alliance
	var hhsMarker = new google.maps.Marker({
		position: {
			lat: 34.632888, 
			lng: -87.066211,
		},
		map: myMap,
		title: 'United Launch Alliance',
		//icon: 'afbeelding/landing_facility.jpg',
		//scaledSize: new google.maps.Size('20px', '20px'),
		animation: google.maps.Animation.BOUNCE,
	});

		//landingspot SpaceX landing Zone 1
	var hhsMarker = new google.maps.Marker({
		position: {
			lat: 28.488573, 
			lng:  -80.542555,
		},
		map: myMap,
		title: 'SpaceX landing Zone 1',
		animation: google.maps.Animation.BOUNCE,
	});

		//landingspot Vandenberg AirFoirce Base
	var hhsMarker = new google.maps.Marker({
		position: {
			lat: 34.755858, 
			lng:  -120.548581,
		},
		map: myMap,
		title: 'Vandenberg AirFoirce Base',
		animation: google.maps.Animation.BOUNCE,
	});
}


