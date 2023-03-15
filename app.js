 'use strict';

const hours = [' ', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

const tableElement = document.getElementById('sales-table');

function StoreLocation(location, minCust, maxCust, avgSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.cookiesPerHour = [];
  this.customersPerHour = [];
  this.totalCookies = 0;
}

StoreLocation.prototype.random = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

StoreLocation.prototype.getCookiesPerHour = function () {
  this.getCustomersPerHour();
  for (let i = 1; i < hours.length; i++) {
    let hour1 = Math.ceil(this.customersPerHour[i] * this.avgSale);
    this.cookiesPerHour.push(hour1);
    this.totalCookies += hour1;
  }
}

StoreLocation.prototype.getCustomersPerHour = function () {
  for (let i = 0; i < hours.length; i++) {
    this.customersPerHour.push(this.random(this.minCust, this.maxCust));
  }
}


for (let i = 0; i < hours.length; i++) {
  let thElement = document.createElement('th');
  thElement.textContent = hours[i];
  tableElement.appendChild(thElement);
}
StoreLocation.prototype.renderElements = function () {
  this.getCookiesPerHour();
  let StoreLocationRowEl = document.createElement('tr');
  tableElement.appendChild(StoreLocationRowEl);

  // store names
  let StoreLocationRowHeadingEl = document.createElement('th');
  StoreLocationRowHeadingEl.textContent = this.location;
  StoreLocationRowEl.appendChild(StoreLocationRowHeadingEl);

  // cookies per hour
  for (let i = 0; i < hours.length; i++) {
    let tdElement = document.createElement('td');
    tdElement.textContent = this.cookiesPerHour[i];
    StoreLocationRowEl.appendChild(tdElement);
  }

  // total cookies
  let totalTdEl = document.createElement('td');
  totalTdEl.textContent = this.totalCookies;
  StoreLocationRowEl.appendChild(totalTdEl);

};

let city1 = new StoreLocation('seattle', 23, 65, 6.3);
let city2 = new StoreLocation('tokyo', 3, 24, 1.2);
let city3 = new StoreLocation('dubai', 11, 38, 3.7);
let city4 = new StoreLocation('paris', 20, 38, 2.3);
let city5 = new StoreLocation('lima', 2, 16, 4.6);


city1.renderElements();
city2.renderElements();
city3.renderElements();
city4.renderElements();
city5.renderElements();

/* let standOpen = 6;
let standClose = 20;
let hoursOpen = standClose - standOpen;
let stores = [];

function StoreLocation(location, minCust, maxCust, avgSale) {
  this.location = location;
  this.min = minCust;
  this.max = maxCust;
  this.avgSale = avgSale;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookiesSold = 0;
  stores.push(this);
}

function displayTableHeader() {
  //looks for the table by id='sales-table'
  let table = document.getElementById('sales-table');
  // creates a <thead> element to store the header
  let thead = document.createElement('thead');
  // creates <tr> to hold each time cell
  let headerRow = document.createElement('tr');

  //Add the <thead> to the <table>
  table.appendChild(thead);

  //add headerRow <tr> to the <thead>
  thead.appendChild(headerRow);

  //creates a blank <th> variable so i can put it before the times
  let blankTh = document.createElement('th');

  // add blank <th> to <tr>
  headerRow.appendChild(blankTh);

  // for loop that generates the time based on what time a location opens and what time it closes. If using an array, you would just set i = 0; i <= array.length and loop through your array.
  for (let i = standOpen; i <= standClose; i++) {
    // create <th>
    let thead = document.createElement('th');

    //give <th> a value
    if (i === 12) {
      thead.textContent = `${i}pm`;
    } else if (i > 12) {
      thead.textContent = `${i - 12}pm`;
    } else {
      thead.textContent = `${i}am`;
    }
    //add <th> to the <tr>
    headerRow.appendChild(thead);
  }
  // create a cell/column to store the totals
  let totalHeader = document.createElement('th');

  // give the header the Total Value
  totalHeader.textContent = 'Total';
  // this just gives it style
  totalHeader.style = 'font-weight: 600; list-style:none; padding: 10px 0;';
  // adds the total column after all the times from the for-loop
  headerRow.appendChild(totalHeader);
}



function displayTableFooter() {
  console.log('tableFooter');
  let table = document.getElementById('sales-table');

  let tfoot = document.createElement('tfoot');
  let footerRow = document.createElement('tr');

  table.appendChild(tfoot);
  tfoot.appendChild(footerRow);

  let totalFooter = document.createElement('td');

  totalFooter.textContent = 'Total';
  totalFooter.style = 'font-weight: 600; list-style:none; padding: 10px 0;';
  footerRow.appendChild(totalFooter);


  let grandTotal = 0;

  // while the hour is less than the hours open
  // let standOpen = 6; let standClose = 20; let hoursOpen = standClose - standOpen;


  let h = 0;
  while (h <= hoursOpen) {
    let hourlyTotal = 0; // resets the hourlyTotal to zero after each iteration

    for (let i = 0; i < stores.length; i++) {
      hourlyTotal += stores[i].cookiesPerHour[h]; //hourlyTotal starts at 0 because of code on line 143.
      grandTotal += stores[i].cookiesPerHour[h]; //keeps running total because we do not reset grandTotal = 0 anywhere in for or while loop.
    }
    let tableFooterTotal = document.createElement('td');
    tableFooterTotal.textContent = hourlyTotal;
    tableFooterTotal.style = 'font-weight: 600; list-style:none; padding: 10px 0;';
    footerRow.appendChild(tableFooterTotal);

    h++;
  }

  let grandTotalFooter = document.createElement('td');
  grandTotalFooter.textContent = grandTotal;
  grandTotalFooter.style = 'font-weight: 600; list-style:none; padding: 10px 0;';
  footerRow.appendChild(grandTotalFooter);
}
 
 */