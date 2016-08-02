Template.especialidadPage.helpers({
  name: function () {
    return Session.get('especialidad');
  },
  prestadores: function () {
    if (Session.get('location')===""||Session.get('location')=='Todos'){
      return Prestadores.find({especialidad:Session.get('especialidad')});
    }
    else{
      return Prestadores.find({provincia:Session.get('location'),especialidad:Session.get('especialidad')});
    }
  // return Prestadores.find({especialidad:Session.get('especialidad')});
  }
});

Template.especialidadPage.onCreated(function() {
  Meteor.subscribe('Prestadores');
});


Template.especialidadPage.events({
  'click #back': function(events,template) {
    Session.set('view','especialidades');
    Router.go('especialidad');
  }
});
