 
// on page load show map
window.onload = function() {
	initMap();
};

// init map
var myMap;

function initMap() {
	// set optios for map 
	var mapOptions = {
		center: {
			lat: 28.538335, 
			lng: -81.379236
		},
		zoom: 7.5,
		
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
	var hhsMarker = new google.maps.Marker({
		position: {
			lat: 27.664827, 
			lng: -81.515754,
		},
		map: myMap,
		title: 'Florida',
	});


		//landingspot Shuttle Landing Facility
	var hhsMarker = new google.maps.Marker({
		position: {
			lat: 28.614458, 
			lng: -80.694108,
		},
		map: myMap,
		title: 'Shuttle Landing Facility',
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
}

