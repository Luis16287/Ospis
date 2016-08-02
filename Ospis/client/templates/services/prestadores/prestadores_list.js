Template.prestadoresList.helpers({
  prestadores: function() {
    if (Session.get('location')=='Todos'||Session.get('location')===undefined){
      return Prestadores.find();
    }else{


    return Prestadores.find({provincia:Session.get('location')});
  }
  }
});

Template.prestadoresList.onCreated(function() {
  Meteor.subscribe('prestadores');
  Session.set('location','Todos');
});
// Meteor.subscribe('tasks');
