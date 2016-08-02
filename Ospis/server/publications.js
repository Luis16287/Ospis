Meteor.publish('services', function() {
  return Services.find();
});
Meteor.publish('prestadores', function() {
  return Prestadores.find();
});
Meteor.publish('farmacias', function() {
  return Farmacias.find();
});
Meteor.publish('emergencias', function() {
  return Emergencias.find();
});
Meteor.publish('Especialidades', function() {
  return Especialidades.find();
});
Meteor.publish('locations', function() {
  return Locations.find();
});
Meteor.publish('markers', function() {
return Markers.find();
});
