import DS from "ember-data";

export default DS.Model.extend({
  updatedAt: DS.attr('date'),
  createdAt: DS.attr('date'),
  mark: DS.attr('number'),
  exercise: DS.belongsTo('exercise', { async: true }),
  interview: DS.belongsTo('interview', { async: true })
});
