App.IntervieweesInterviewsController = Ember.ObjectController.extend({
  actions: {
    createInterview: function() {
      var controller = this; // So I don't lose the controller scope in the save promise
      var interviewee = this.get('model');
      var newInterview = interviewee.get('interviews').createRecord();

      newInterview.save().then(function(newInterview){
        newInterview.set('interviewee', interviewee);
        interviewee.save().then(function(interviewee){
          controller.transitionTo('interviewees.interviews.information', newInterview);
        });
      });
    }
  }
});
