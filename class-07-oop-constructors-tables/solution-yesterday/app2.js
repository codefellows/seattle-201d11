'use strict';

var hours = ['6:00am', '7:00am', '8:00am', '9:00am'];

var firstAndPike = {
  locationName: 'First and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  custEachHourArray: [],
  cookiesEachHourArray: [],
  totalDailyCookieSales: 0 // lets us use += later
};

firstAndPike.calcCustEachHour = function() {
  // This method will generate a random number of customers for each hour and push them into an array.
  for (var i = 0; i < hours.length; i++) {
    var singleHourCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    this.custEachHourArray.push(singleHourCust);
  }
};

firstAndPike.calcCookiesEachHour = function() {
  // This method will use the array of customers for each hour, multiply each of those hourly values by the average cookies per customer, and generate an array of hourly cookie sales
  this.calcCustEachHour();
  for (var i = 0; i < hours.length; i++) {
    var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookiesPerCust);
    this.cookiesEachHourArray.push(singleHourCookies);
    this.totalDailyCookieSales += singleHourCookies;
  }
};

firstAndPike.render = function() {
  // This method will take the array of hourly cookie sales and display the data as an unordered list
  this.calcCookiesEachHour();
  //Code to make the list starts here
};

firstAndPike.render();
