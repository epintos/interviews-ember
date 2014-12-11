App.Interviewee = DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  interviews: DS.hasMany('interview', { async: true })
});


