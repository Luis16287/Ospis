Template.emergenciasList.helpers({
  emergencias: function() {
    if (Session.get('location')=='Todos'||Session.get('location')===undefined){
      return Emergencias.find();
    }else{
      return Emergencias.find({provincia:Session.get('location')});
    }
  }
});

Template.emergenciasList.onCreated(function() {
  Meteor.subscribe('emergencias');
});
