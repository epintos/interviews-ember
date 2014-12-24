App.InterviewExercise = DS.Model.extend({
  createdAt: DS.attr('date'),
  mark: DS.attr('number'),
  exercise: DS.belongsTo('exercise', { async: true }),
  interview: DS.belongsTo('interview', { async: true })
});
