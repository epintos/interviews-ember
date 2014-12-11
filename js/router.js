// For more information see: http://emberjs.com/guides/routing/

App.Router.map(function() {
  this.resource('exercises', function() {});
  this.resource('interviewees', function() {
    this.route('interviews', { path: ':interviewee_id' }, function(){
      this.route('information', { path: '/interviews/:interview_id' }, function(){});
    });
  });

});
