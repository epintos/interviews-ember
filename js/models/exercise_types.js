App.ExerciseTypes = DS.Model.extend({
  name: DS.attr('string'),
  color: DS.attr('string')
});

App.ExerciseTypes.FIXTURES = [
 {
   name: 'Logic',
   color: '#b5cdee'
 },
 {
   name: 'Algorithm',
   color: '#df2121'
 },
 {
   name: 'Theoric',
   color: '#f8f8df'
 },
 {
   name: 'OOP',
   color: '#f8dff8'
 },
 {
   name: 'Android',
   color: '#dff8f8'
 },
 {
   name: 'IOS',
   color: '#3399dd'
 },
 {
   name: 'Web',
   color: '#c6f4be'
 }
];
