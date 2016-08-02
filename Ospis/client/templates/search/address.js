Template.Search.onRendered(function() {
  GoogleMaps.load({key:'AIzaSyDFQjvbjuWvLxq6k1fEIZkYoaVl_XY0dzE'});
});

Template.Search.helpers({
  mapOptions: function() {
    // Make sure the maps API has loaded
    latLng = Geolocation.latLng();
    if (GoogleMaps.loaded() && latLng) {
      Session.set('current_location',latLng);
      return {
        center: new google.maps.LatLng(latLng.lat, latLng.lng),
        zoom: 15
      };
    }
  }

});
Template.Search.onCreated(function() {
  // We can use the `ready` callback to interact with the map API once the map is ready.
  GoogleMaps.ready('map', function(map) {
    console.log("I'm ready!");
    // Add a marker to the map once it's ready
    var marker = new google.maps.Marker({
      position: map.options.center,
      map: map.instance
    });
    if (navigator.geolocation) {
      // Support
      navigator.geolocation.getCurrentPosition(function(position) {
        var current = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      });
    } else {
      // No support
      console.log("Something is wrong!");
    }
  });
});
