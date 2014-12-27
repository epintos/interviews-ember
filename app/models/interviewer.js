import DS from "ember-data";

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  updatedAt: DS.attr('date'),
  createdAt: DS.attr('date'),
  email: DS.attr('string'),
  fullName: function(){
    return this.get('firstName') + ' ' + this.get('lastName');
  }.property('firstName', 'lastName')
});
