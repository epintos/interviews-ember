import Ember from "ember";

export default Ember.ObjectController.extend({
  username: null,
  password: null,
  loggedIn: false,
  loginMessage: null,

  actions:{
    login: function(){
      var controller = this,
          ParseUser = this.store.modelFor('parse-user'),
          data = {
            username: this.get('username'),
            password: this.get('password')
          };
      {{debugger}}
      ParseUser.login(this.store, data).then(
        function(user){
          sessionStorage.setItem('sessionToken', user.get('sessionToken'));
          controller.set('loggedIn', true);
          controller.set('loginMessage', "Welcome!");
          controller.transitionToRoute('interviewees');
        },
        function(error){
          controller.set('loggedIn', false);
          controller.set('loginMessage', error.message || error.error);
        }
      );
    }
  },
  allExercises: function() {
      return this.get('store').find('exercise');
  }.property(),
  allInterviewers: function() {
      return this.get('store').find('interviewer');
  }.property(),
  disabled: function() {
    return Ember.isEmpty(this.get('username')) || Ember.isEmpty(this.get('password'));
  }.property('username', 'password')

});
