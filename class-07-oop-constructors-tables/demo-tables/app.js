'use strict';

var allCats = [];

function Cat(name, color, tail) {
  this.name = name;
  this.color = color;
  this.tail = tail;
  allCats.push(this);
}

var bud = new Cat('Buddy', 'Orange and White', 'VERY long');
var alley = new Cat('Alistair', 'Orange', 'Small');
var trill = new Cat('Trillian', 'Black/Orange', 'Very small');
var meowmix = new Cat('Meow Mix', 'Black', 'Medium');
var toeny = new Cat('Toeny', 'Gray', 'Medium-Large');

// for(var i = 0; i < allCats.length; i++) {
//   console.log(allCats[i].name);
// }

console.log(bud);
console.log(alley);
console.log(trill);
console.log(meowmix);
console.log(toeny);

/* To see what we need to do to build a HTML table with JS, let's take a look at the HTML needed to start the table and make the top two rows:

<table>

  <tr>              create tr
    <th>Name</th>   create a th, give it content, add it to tr
    <th>Color</th>  create a th, give it content, add it to tr
    <th>Tail</th>   create a th, give it content, add it to tr
  </tr>             add tr to the table

  <tr>
    <td>Buddy</td>
    <td>Orange and White</td>
    <td>VERY long</td>
  </tr>

Tables are built in the same way that a typewriter types: left-to-right, top-to-bottom.

We'll need to create and append HTML elements in the same order.

We have already put an empty <table> element in the HTML, with id="cats" */



var catTable = document.getElementById('catjs');
console.log('catTable is', catTable);

function makeHeaderRow() {
  // <tr>              create tr
  var tableRow = document.createElement('tr');

  //   <th>Name</th>   create a th, give it content, add it to tr
  var thElement = document.createElement('th');
  thElement.textContent = 'Name';
  tableRow.appendChild(thElement);

  //   <th>Color</th>  create a th, give it content, add it to tr
  thElement = document.createElement('th');
  thElement.textContent = 'Color';
  tableRow.appendChild(thElement);

  //   <th>Tail</th>   create a th, give it content, add it to tr
  thElement = document.createElement('th');
  thElement.textContent = 'Tail';
  tableRow.appendChild(thElement);

  // </tr>             add tr to the table
  catTable.appendChild(tableRow);
}

function makeBuddyRow() {
  // <tr>              create tr
  var tableRow = document.createElement('tr');

  //   <th>Name</th>   create a th, give it content, add it to tr
  var tdElement = document.createElement('td');
  tdElement.textContent = allCats[0].name;
  tableRow.appendChild(tdElement);

  //   <td>Color</td>  create a td, give it content, add it to tr
  tdElement = document.createElement('td');
  tdElement.textContent = allCats[0].color;
  tableRow.appendChild(tdElement);

  //   <td>Tail</td>   create a td, give it content, add it to tr
  tdElement = document.createElement('td');
  tdElement.textContent = allCats[0].tail;
  tableRow.appendChild(tdElement);

  // </tr>             add tr to the table
  catTable.appendChild(tableRow);
}

function makeAlistairRow() {
  // <tr>              create tr
  var tableRow = document.createElement('tr');

  //   <th>Name</th>   create a th, give it content, add it to tr
  var tdElement = document.createElement('td');
  tdElement.textContent = allCats[1].name;
  tableRow.appendChild(tdElement);

  //   <td>Color</td>  create a td, give it content, add it to tr
  tdElement = document.createElement('td');
  tdElement.textContent = allCats[1].color;
  tableRow.appendChild(tdElement);

  //   <td>Tail</td>   create a td, give it content, add it to tr
  tdElement = document.createElement('td');
  tdElement.textContent = allCats[1].tail;
  tableRow.appendChild(tdElement);

  // </tr>             add tr to the table
  catTable.appendChild(tableRow);
}

function makeAllCatRows() {

  for (var cat = 0; cat < allCats.length; cat++) {
    // <tr>              create tr
    var tableRow = document.createElement('tr');

    //   <th>Name</th>   create a th, give it content, add it to tr
    var tdElement = document.createElement('td');
    tdElement.textContent = allCats[cat].name;
    tableRow.appendChild(tdElement);

    //   <td>Color</td>  create a td, give it content, add it to tr
    tdElement = document.createElement('td');
    tdElement.textContent = allCats[cat].color;
    tableRow.appendChild(tdElement);

    //   <td>Tail</td>   create a td, give it content, add it to tr
    tdElement = document.createElement('td');
    tdElement.textContent = allCats[cat].tail;
    tableRow.appendChild(tdElement);

    // </tr>             add tr to the table
  }
  catTable.appendChild(tableRow);
}

makeHeaderRow();
