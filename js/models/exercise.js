App.Exercise = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  interview_exercise: DS.belongsTo('interview_exercise', {async: true}),
});
