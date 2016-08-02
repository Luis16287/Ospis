Template.especialidadItem.events({
  'click a':function (events,template) {
    console.log('name',this.name);
    Session.set('view','oneEspecialidad');
    Session.set('especialidad',this.name);
  }
});
