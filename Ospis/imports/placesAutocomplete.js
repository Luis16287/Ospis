PlacesAutocomplete = function () {
  let componentForm = {
    street_number: 'short_name',
    route: 'long_name',
    locality: 'long_name',
    administrative_area_level_1: 'short_name',
    country: 'short_name',
    postal_code: 'short_name'
  };

  let autocomplete = new google.maps.places.Autocomplete(
    (document.getElementById('autocomplete')),
    {types: ['geocode']});

  google.maps.event.addListener(autocomplete, 'place_changed', function (event) {
    var place = autocomplete.getPlace();

    Object.keys(componentForm).forEach(function(component){
      document.getElementById(component).value = '';
      document.getElementById(component).disabled = false;
    });

    // Get each component of the address from the place details
    // and fill the corresponding field on the form.
    for (var i = 0; i < place.address_components.length; i++) {
      var addressType = place.address_components[i].types[0];
      if (componentForm[addressType]) {
        document.getElementById(addressType).readOnly = false;
        var val = place.address_components[i][componentForm[addressType]];
        document.getElementById(addressType).value = val;
        document.getElementById(addressType).readOnly = true;
      }
    }
    document.getElementById('autocomplete').value = document.getElementById('street_number').value +
    ' ' + document.getElementById('route').value;

    // Just in case the API couldn't provide a zip code.
    if (document.getElementById('postal_code').value.length === 0) {
      document.getElementById('postal_code').readOnly = false;
    }
  });
};


export default PlacesAutocomplete;
