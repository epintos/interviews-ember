import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('exercises', function() {});
  this.resource('interviewees', function() {
    this.resource('interviewees.interviews', { path: ':interviewee_id/interviews/' }, function(){
      this.resource('interviewees.interviews.information', { path: ':interview_id/information' }, function(){});
    });
  });
});

export default Router;
