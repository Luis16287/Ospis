Template.prestadorItem.events({
  'click a': function(events,template) {
    events.preventDefault();
    $('#'+this._id).toggle();
  }
});
