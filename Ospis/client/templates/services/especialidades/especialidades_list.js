Template.especialidadesList.helpers({
  especialidades: function() {
    console.log(Especialidades.find());
    return Especialidades.find();
  }
});

Template.especialidadesList.onCreated(function() {
  Meteor.subscribe('Especialidades');
});
