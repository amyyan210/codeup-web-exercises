(function() {
    "use strict";

    // Set our map options
    var mapOptions = {
        // Set the zoom level
        zoom: 15,

        // This sets the center of the map at our location
        center: {

            lat:  42.361145,
            lng: -71.057083
        }
    };


    var mikesPastry = {
        address: "300 Hanover St, Boston, MA 02113"
    };

    // Empty object for marker
    var point = {};

    var geocoder = new google.maps.Geocoder();

    geocoder.geocode(mikesPastry, function(results, status) {
        // Check for a successful result
        if (status == google.maps.GeocoderStatus.OK) {

            // Recenter the map over the address
            map.setCenter(results[0].geometry.location);

            // Returns latitude
            point.lat = results[0].geometry.location.lat();

            // Returns longitude
            point.lng = results[0].geometry.location.lng();

            // Add the marker to our existing map
            var marker = new google.maps.Marker({
                position: point,
                map: map
            });
        } else {

            // Show an error message with the status if our request fails
            alert("Geocoding was not successful - STATUS: " + status);
        }
    });


    // Render the map
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
})();