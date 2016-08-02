// Template.servicePage.helpers({
//   service: function() {
//     // console.log('___',Session.get('service'));
//     return Session.get('service');
//   }
// });
Template.servicePage.onRendered(function() {
    var service=Session.get('service');
    console.log(service);
    switch (service) {
      case 'Prestadores':
        $('#prestadores').attr('style', 'display:block');
        console.log('...');
        break;
      case 'Farmacias':
        $('#farmacias').attr('style', 'display:block');
        break;
      default:
        Router.go('/');
        // $('#emergencias').attr('style', 'display:block');
    }
});
