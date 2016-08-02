Template.layout.onCreated(function() {
  Session.set('service','');
});
//
 Template.layout.helpers({
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



// Template.layout.onRendered(function() {
// //   var service=Session.get('service')
// //   if(service=='Emergencias'){
// //     console.log('_____');
//   $('#emergencias').attr('style','display:none');
// //   }
// });
//
// Template.layout.events({
//   'click #emergencia_item':function(events,template) {
//     $('#emergencias').attr('style','display:block');
//   }
// })
