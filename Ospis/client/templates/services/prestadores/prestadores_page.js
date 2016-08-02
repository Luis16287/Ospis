Template.prestadoresPage.onCreated(function (){
  console.log('____');
  Session.set('view','all');
});

Template.prestadoresPage.events({
  'click #especialidades_': function(events,template) {
    events.preventDefault();
    $('#all').removeClass("active");
    $('#especialidades').addClass("active");
    Session.set('view','especialidades');
    // document.location.reload(true);
    Router.go('/especialidad');
  },
  'click #all_': function(events,template) {
    events.preventDefault();
    $('#especialidades').removeClass("active");
    $('#all').addClass("active");
    console.log('.....');
    Session.set('view','all');
    Router.go('/prestadores');
  },
  'click #buscar_':function(events) {
    events.preventDefault();
    $('#especialidades').removeClass("active");
    $('#all').removeClass("active");
    $('#buscar').addClass("active");
    Router.go('/search');
  }
});

// Template.prestadoresPage.onRendered(function () {
//   var view=Session.get('view');
//   if (view=='especialidades'){
//     $('#especialidades_section').attr('display:block');
//     $('#prestadores').attr('display:none');
//   }
// })
