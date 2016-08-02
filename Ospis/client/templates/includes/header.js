import PlacesAutocomplete from '../../imports/placesAutocomplete';
import InputFields from '../../imports/inputFields';

Template.header.events({
  'click .img-responsive': function() {
    Router.go('/');
  }
});
Template.header.helpers({
 location:function () {
   console.log('geo',Geolocation.currentLocation());
   var latLong=Geolocation.latLng();
   if (latLong){
     reverseGeocode.getLocation(latLong.lat, latLong.lng, function(location){
       var addressObj=reverseGeocode.getAddrObj();
       var locality,area1,area2;
       for (var i=0;i<addressObj.length;i++){
         // console.log(addressObj[i].type);
         if (addressObj[i].type=='locality') locality=addressObj[i].longName;
         if (addressObj[i].type=='administrative_area_level_2') area2=addressObj[i].longName;
         if (addressObj[i].type=='administrative_area_level_1') area1=addressObj[i].longName;
       }
       // console.log(locality,area1,area2);
       // Session.set('address',reverseGeocode.getAddrStr());
        Session.set('address', locality+', '+area1);
       //  console.log(Session.get('address'));
       //  return Session.get('address');
      });
   }
 },
 algo: function () {
   return Session.get('address');
 }
});

Template.header.events({
  'click #change_address':function (events,template) {
    events.preventDefault();
    $('#changeLocationModal').modal('show');
  }
});

Template.changeLocation.events({
  'click #save': function(e) {
    e.preventDefault();
    //
    // var animal = {
    //   name: $('#animalName').val()
    // }
    //
    // Meteor.call('addAnimal', animal, function(error, result) {
    //   if (error) {
    //     alert(error);
    //   }
    // });

    $('#changeLocationModal').modal('hide');
  }
});

Template.changeLocation.onRendered(function () {
	if (GoogleMaps.loaded()) {
    PlacesAutocomplete();
  }
  InputFields.init();
});

// Template.changeLocation.onRendered(function () {
//     if (GoogleMaps.loaded()) {
//     	// address=$('#autocomplete').val();
// 		// initAutocomplete();
//     PlacesAutocomplete();
//     }
// });
