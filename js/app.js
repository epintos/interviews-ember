window.App = Ember.Application.create({
  // Basic logging, e.g. "Transitioned into 'post'"
  // LOG_TRANSITIONS: true

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

App.ExercisesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('exercise');
  }
});

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('interviewees');
  }
});

Ember.Handlebars.helper('format-date', function(date) {
  return moment(date).format('LL');
});
