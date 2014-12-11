App.Interview = DS.Model.extend({
  createdAt: DS.attr('date'),
  interviewExercises: DS.hasMany('interviewExercise', { async: true }),
  interviewers: DS.hasMany('interviewer', { async: true }),
  interviewee: DS.belongsTo('interviewee', { async: true })
});
