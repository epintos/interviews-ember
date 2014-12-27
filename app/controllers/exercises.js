import Ember from "ember";

export default Ember.ArrayController.extend({
  actions: {
    createExercise: function() {
      var controller = this; // So I don't lose the controller scope in the save promise
      var newExercise = this.store.createRecord('exercise');
      newExercise.set('title', this.get('title'));
      newExercise.set('description', this.get('description'));
      newExercise.set('type', this.get('exerciseType').name);
      newExercise.save().then(function(){
        controller.set('title', '');
        controller.set('description', '');
      });
    }
  },

  title: '',
  description: '',

  disabled: function() {
    return Ember.isEmpty(this.get('title')) || Ember.isEmpty(this.get('description'));
  }.property('title', 'description'),
  allTypes: [
   {
     name: 'Logic',
   },
   {
     name: 'Algorithm',
   },
   {
     name: 'Theoric',
   },
   {
     name: 'OOP',
   },
   {
     name: 'Android',
   },
   {
     name: 'IOS',
   },
   {
     name: 'Web',
   }
  ]

});
