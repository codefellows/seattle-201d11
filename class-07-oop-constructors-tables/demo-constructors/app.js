// Demo for objects-to-constructors
'use strict';

// var britt = {
//   course: '201d11',
//   firstName: 'Britt',
//   lastInitial: 'J',
//   faveNumber: 13,
//   isCodeNinja: true,
//   introduction: function() {
//     console.log('My name is ' + this.firstName + ' and my favorite number is ' + this.faveNumber);
//   }
// };

// I would need 154 lines of code to model our class this way
// (14 students * 11 lines each)

// What if... I had a function to make these many similar objects for me? A function where I could pass in a student's unique characteristics as arguments, and then that function would make the individual objects?

var mahClass = [];

//DID SOME CODEZ

// var britt = {
function Student(firstName, lastInitial, faveNumber) {
  this.course = '201d11';
  this.firstName = firstName;
  this.lastInitial = lastInitial;
  this.faveNumber = faveNumber;
  this.isCodeNinja = true;
  this.introduction = function() {
    console.log('My name is ' + this.firstName + ' and my favorite number is ' + this.faveNumber);
  };
  mahClass.push(this);
  console.log('An object was made for', this.firstName);
};

var britt = new Student('Britt', 'J', 13); //eslint-disable-line
var lee = new Student('Lee', 'B', 42); //eslint-disable-line
var michael = new Student('Michael', 'M', 48); //eslint-disable-line
var sera = new Student('Sera', 'S', 37); //eslint-disable-line

//DID SOME CODEZ

function listStudents() {
  // get a grip on the <ol> in the HTML
  var studentList = document.getElementById('students');
  // iterating through the array of students requires a for loop
  for (var index = 0; index < mahClass.length; index++) {
    // create a list element
    var listElement = document.createElement('li');
    // give the list element text content of a student's first name
    listElement.textContent = mahClass[index].firstName + ' loves the number ' + mahClass[index].faveNumber;
    // append the list element to the ol
    studentList.appendChild(listElement);
  }
}

listStudents();
