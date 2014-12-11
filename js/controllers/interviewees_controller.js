App.IntervieweesController = Ember.ArrayController.extend({
  actions: {
    createInterviewee: function() {
      var controller = this; // So I don't lose the controller scope in the save promise
      var newInterviewee = this.store.createRecord('interviewee');
      newInterviewee.set('firstName', this.firstName);
      newInterviewee.set('lastName', this.lastName);
      newInterviewee.save().then(function(newInterviewee){
        controller.set('firstName', '');
        controller.set('lastName', '');
        controller.transitionTo('interviewees.interviews', newInterviewee);
      });
    }
  },

  firstName: '',

  disabled: function() {
    return Ember.isEmpty(this.get('firstName')) || Ember.isEmpty(this.get('lastName'))
  }.property('firstName', 'lastName')

});
