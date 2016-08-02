Template.farmaciasList.helpers({
  farmacias: function() {
    if (Session.get('location')=='Todos'||Session.get('location')===undefined){
      return Farmacias.find();
    }else{
      return Farmacias.find({provincia:Session.get('location')});
    }
  }
});

Template.farmaciasList.onCreated(function() {
  Meteor.subscribe('farmacias');
});
