// Demo for objects-to-constructors
'use strict';

var britt = {
  course: '201d11',
  firstName: 'Britt',
  lastInitial: 'J',
  faveNumber: 16,
  isCodeNinja: true,
  introduction: function() {
    console.log('My name is ' + this.firstName + ' and my favorite number is ' + this.faveNumber);
  }
};

// I would need 154 lines of code to model our class this way
// (14 students * 11 lines each)

// What if... I had a function to make these many similar objects for me? A function where I could pass in a student's unique characteristics as arguments, and then that function would make the individual objects?

var mahClass = [];
