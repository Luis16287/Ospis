if (Meteor.isClient) {
  Meteor.startup(function() {
    var ANDROID_KEY = 'AIzaSyDStZLka4A71KOtYCTDp16eacNbc4urudI';
    var IOS_KEY = 'AIzaSyDKvEvR7qML7poEMKUrNQMnWRB1dIIxkQQ';

    GoogleMaps.load({ v: '3', key: 'AIzaSyDKvEvR7qML7poEMKUrNQMnWRB1dIIxkQQ', libraries: 'geometry,places' });

  });
}
