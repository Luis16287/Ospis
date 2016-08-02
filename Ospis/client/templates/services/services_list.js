Template.servicesList.helpers({
  services: function() {
    return Services.find();
  }
});
// Template.servicesList.events({
//   'click #emergencia_item': function() {
//     console.log('click____');
//     Session.set('service','Emergencias');
//     // Router.go('/');
//   }
// });
// Template.servicesList.events({
//   'click #prestadores': function (events,template) {
//     Session.set('service','Prestadores');
//     Router.go('/prestadores');
//   // if (this.title=='Emergencias'){
//   //   Router.go('/');
//   }
// });
