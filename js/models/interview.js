App.Interview = DS.Model.extend({
  createdAt: DS.attr('date'),
  interviewExercises: DS.hasMany('interviewExercise', { async: true }),
  interviewers: DS.hasMany('interviewer', { async: true }),
  interviewee: DS.belongsTo('interviewee', { async: true }),
  totalMark: function(){
    var marks = [];
    marks.pushObjects(this.get('interviewExercises').map(function(interviewExercise) {
        return interviewExercise.get('mark') || 0;
    }))
    if(marks.length){
      return marks.reduce(function(pv, cv) { return pv + cv; }, 0) / marks.length;
    }
    return 0;
  }.property('interviewExercises.@each.mark')
});
