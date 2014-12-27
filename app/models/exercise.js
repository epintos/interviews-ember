import DS from "ember-data";

export default DS.Model.extend({
  title: DS.attr('string'),
  updatedAt: DS.attr('date'),
  createdAt: DS.attr('date'),
  description: DS.attr('string'),
  type: DS.attr('string')
});
