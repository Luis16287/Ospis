Template.locationsList.helpers({
  display: function () {
    // console.log('geo',Geolocation.currentLocation());
    // var latLong=Geolocation.latLng();
    // if (latLong){
    //   reverseGeocode.getLocation(latLong.lat, latLong.lng, function(location){
    //     var addressObj=reverseGeocode.getAddrObj();
    //     var locality,area1,area2;
    //     for (var i=0;i<addressObj.length;i++){
    //       // console.log(addressObj[i].type);
    //       if (addressObj[i].type=='locality') locality=addressObj[i].longName;
    //       if (addressObj[i].type=='administrative_area_level_2') area2=addressObj[i].longName;
    //       if (addressObj[i].type=='administrative_area_level_1') area1=addressObj[i].longName;
    //     }
    //     // console.log(locality,area1,area2);
  	//      Session.set('address', locality+', '+area1);
    //      console.log(Session.get('address'));
    //    });
    // }
    if (Session.get('view')=='especialidades'){
      console.log('____si');
      return 'display:none';
    }
    else{
      return 'display:block';
    }
  },
  locations: function() {
    console.log('+++',Session.get('view'));
    console.log(Locations.find().count());
    // if (Session.get('location')!==''){
    //   return Locations.find({provincia:Session.get('location')});
    // }
    // else{
      return Locations.find();
    // }
  }

});


Template.locationsList.onCreated(function() {
  Meteor.subscribe('locations');
});

Template.locationsList.events({
  'change #locationList': function(events,template) {
    Session.set('location',$('#locationList option:selected').text());
    console.log('change',Session.get('location'));
  }
//   'change select': function(events) {
//     console.log(change);
//   }
});
// Template.locationItem.helpers({
//   selected: function() {
//     Session.set('location',this.name);
//     console.log(this.name);
//   }
// });
