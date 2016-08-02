Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  // notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('services'); }
});

// Router.route('/', {name: 'servicesList'});
Router.route('/', {name: 'List'});
// Router.route('/', {
//   name: 'List',
//   path: '/home',
//   template: 'List',
//   layoutTemplate: 'layout',
//   yieldRegions: {
//     'List':{to: 'content'}
//   }
// });
// Router.route('/services/:title', {
//   name: 'servicePage',
//   data:function() {
//     return Services.findOne(this.params.title);
//   }
// });
// Router.route('/:service',{
//   name:'servicePage',
//   data: function () {
//     return Session.get('service');
//   }
// });
Router.route('/search', {name: 'Search'});
Router.route('/prestadores', {
  name: 'prestadoresPage',
  path: '/prestadores',
  template: 'prestadoresContainer',
  layoutTemplate: 'prestadoresPage',
  yieldRegions: {
    'prestadoresContainer':{to: 'container'}
}});
Router.route('/farmacias', {
  name: 'farmaciasPage',
  template: 'farmaciasPage',
  layoutTemplate: 'layout',
  yieldRegions: {
   'farmaciasPage':{to: 'main'}
 }
});
Router.route('/emergencias', {name: 'emergenciasPage'});
Router.route('/especialidad', {
  name: 'especialidad',
  path: '/especialidad',
  template: 'prestadoresContainer',
  layoutTemplate: 'prestadoresPage',
  yieldRegions: {
   'prestadoresContainer':{to: 'container'}
 }
});

Router.route('/especialidad/:name', {
  name: 'especialidadPage',
  data:function() {
    return Especialidades.findOne(this.params.name);
  },
  template: 'especialidadPage',
  layoutTemplate: 'prestadoresPage',
  yieldRegions: {
   'especialidadPage':{to: 'container'}
 }
});
// Router.route('/prestadores-especialidad',{name:'prestadoresPage'});
// Router.onBeforeAction('dataNotFound', {only: 'servicePage'});
