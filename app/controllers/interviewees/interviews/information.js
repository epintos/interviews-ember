import Ember from "ember";

export default Ember.ObjectController.extend({
  actions:{
    addInterviewer: function(){
      var newInterviewer = this.get('newInterviewer');
      var interview = this.get('model');
      interview.get('interviewers').pushObject(newInterviewer);
      interview.save();
    },
    addInterviewExercise: function(){
      var interview = this.get('model');
      var exercise = this.get('exercise');
      var newInterviewExercise = interview.get('interviewExercises').createRecord();
      newInterviewExercise.set('mark', this.get('mark'));
      newInterviewExercise.set('exercise', exercise);
      newInterviewExercise.save().then(function(){
        interview.save();
      });
    }
  },
  allExercises: function() {
      return this.get('store').find('exercise');
  }.property(),
  allInterviewers: function() {
      return this.get('store').find('interviewer');
  }.property()
});
