// Template.serviceItem.helpers({
//   domain: function() {
//     var a = document.createElement('a');
//     a.href = this.url;
//     return a.hostname;
//   }
// });
Template.serviceItem.events({
  'click': function () {
  Session.set('service',this.title);
  // if (this.title=='Emergencias'){
  //   Router.go('/');
  // }
},
});
