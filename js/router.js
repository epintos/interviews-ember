// For more information see: http://emberjs.com/guides/routing/

App.Router.map(function() {
  this.resource('exercises', function() {});
  this.resource('interviewees', function() {
    this.resource('interviewees.interviews', { path: ':interviewee_id/interviews/' }, function(){
      this.resource('interviewees.interviews.information', { path: ':interview_id/information' }, function(){});
    });
  });
});
