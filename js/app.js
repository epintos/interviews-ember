window.App = Ember.Application.create({
  // Basic logging, e.g. "Transitioned into 'post'"
  // LOG_TRANSITIONS: true,

  // Extremely detailed logging, highlighting every internal
  // step made while transitioning into a route, including
  // `beforeModel`, `model`, and `afterModel` hooks, and
  // information about redirects and aborted transitions
  // LOG_TRANSITIONS_INTERNAL: true,
  // LOG_VIEW_LOOKUPS: true,
  // LOG_ACTIVE_GENERATION: true,
  // LOG_RESOLVER: true
});

App.IntervieweesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('interviewee');
  }
});

// App.InterviewsRoute = Ember.Route.extend({
//   model: function() {
//     return this.store.find('interview');
//   }
// });


App.ExercisesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('exercise');
  }
});

// App.InterviewsRoute = Ember.Route.extend({
//   model: function(params) {
//     // this.store.find('interview');
//     this.store.find('interviewee', params.interviewee_id).then(function(interviewee) {
//       return interviewee.get('interviews');
//     });
//   }
// });

// App.InterviewsIndexRoute = Ember.Route.extend({
//   model: function(params) {
//     {{debugger}}
//     this.store.find('interviewee', params.interviewee_id).then(function(interviewee) {
//       return interviewee.get('interviews');
//     });
//   }
// });


Ember.Handlebars.helper('format-date', function(date) {
  return moment(date).format('LL');
});
