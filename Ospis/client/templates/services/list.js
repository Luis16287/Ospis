Template.servicesList.events({
  'click #prestadores': function (events,template) {
    Session.set('view','all');
    Session.set('service','Prestadores');
    Router.go('/prestadores');
  },
  'click #farmacias': function (events,template) {
    Session.set('service','Prestadores');
    Router.go('/farmacias');
  },
  'click #emergencias': function (events,template) {
    Session.set('service','Emergencias');
    Router.go('/emergencias');
  }
});
