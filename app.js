'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Seattle:

let seattle = {
  location: 'seattle',
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  cookiesPerHour: [],
  customersPerHour: [],
  totalCookies: 0,
  // Gives the customer per hour # based on the range of min cust and max cust.
  getCustomersPerHour: function () {
    //console.log(this.minCust)
    for (let i = 0; i < hours.length; i++) {
      //let result = random(this.minCust, this.maxCust)
      //console.log(result)
      //this.customerPerHour.push(result)
      this.customersPerHour.push(random(this.minCust, this.maxCust));
    }
  },

  //  gives cookies per hour based off cust per hour depending on the hour of the day

  getCookiesPerHour: function () {
    this.getCustomersPerHour();
    for (let i = 0; i < hours.length; i++) {
      let hour1 = Math.ceil(this.customersPerHour[i] * this.avgSale);
      this.cookiesPerHour.push(hour1);
      this.totalCookies += hour1;
    }
  },

  render: function () {
    this.getCookiesPerHour();
    let seattleList = document.getElementById('seattle');
    for (let i = 0; i < hours.length; i++) {
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies.`;
      seattleList.appendChild(liElement);
    }

    let liElement = document.createElement('li');
    liElement.textContent = `Total: ${this.totalCookies} cookies.`;
    seattleList.appendChild(liElement);
  },
}

seattle.render();
console.log(seattle.cookiesPerHour);

// Elements
let seattleElement = document.getElementById('seaH2');
let h2Element1 = document.createElement('h2');
h2Element1.textContent = seattle.location;
seattleElement.appendChild(h2Element1);

 
let tokyo = {
  location: 'tokyo',
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  cookiesPerHour: [],
  customersPerHour: [],
  totalCookies: 0,

  // Gives the customer per hour # based on the range of min cust and max cust.

  getCustomersPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customersPerHour.push(random(this.minCust, this.maxCust));
    }
  },

  //  gives cookies per hour based off cust per hour depending on the hour of the day

  getCookiesPerHour: function () {
    this.getCustomersPerHour();
    for (let i = 0; i < hours.length; i++) {
      let hour1 = Math.ceil(this.customersPerHour[i] * this.avgSale);
      this.cookiesPerHour.push(hour1);
      this.totalCookies += hour1;
    }
  },

  render: function () {
    this.getCookiesPerHour();
    let tokyoList = document.getElementById('tokyo');
    for (let i = 0; i < hours.length; i++) {
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies.`;
      tokyoList.appendChild(liElement);
    }

    let liElement = document.createElement('li');
    liElement.textContent = `Total: ${this.totalCookies} cookies.`;
    tokyoList.appendChild(liElement);
  },
}

tokyo.render();
console.log(tokyo.cookiesPerHour);

// Elements
let tokyoElement = document.getElementById('tokyoH2');
let h2Element2 = document.createElement('h2');
h2Element1.textContent = tokyo.location;
tokyoElement.appendChild(h2Element2); 

 let dubai = {
  location: 'dubai',
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
  cookiesPerHour: [],
  customersPerHour: [],
  totalCookies: 0,

  // Gives the customer per hour # based on the range of min cust and max cust.

  getCustomersPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customersPerHour.push(random(this.minCust, this.maxCust));
    }
  },

  //  gives cookies per hour based off cust per hour depending on the hour of the day

  getCookiesPerHour: function () {
    this.getCustomersPerHour();
    for (let i = 0; i < hours.length; i++) {
      let hour1 = Math.ceil(this.customersPerHour[i] * this.avgSale);
      this.cookiesPerHour.push(hour1);
      this.totalCookies += hour1;
    }
  },

  render: function () {
    this.getCookiesPerHour();
    let dubaiList = document.getElementById('dubai');
    for (let i = 0; i < hours.length; i++) {
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies.`;
      dubaiList.appendChild(liElement);
    }

    let liElement = document.createElement('li');
    liElement.textContent = `Total: ${this.totalCookies} cookies.`;
    dubaiList.appendChild(liElement);
  },
}

dubai.render();
console.log(seattle.cookiesPerHour);

// Elements
let dubaiElement = document.getElementById('dubaiH2');
let h2Element3 = document.createElement('h2');
h2Element1.textContent = dubai.location;
dubaiElement.appendChild(h2Element3); 

let paris = {
 location: 'paris',
 minCust: 20,
 maxCust: 38,
 avgSale: 2.3,
 cookiesPerHour: [],
 customersPerHour: [],
 totalCookies: 0,

 // Gives the customer per hour # based on the range of min cust and max cust.

 getCustomersPerHour: function () {
   for (let i = 0; i < hours.length; i++) {
     this.customersPerHour.push(random(this.minCust, this.maxCust));
   }
 },

 //  gives cookies per hour based off cust per hour depending on the hour of the day

 getCookiesPerHour: function () {
   this.getCustomersPerHour();
   for (let i = 0; i < hours.length; i++) {
     let hour1 = Math.ceil(this.customersPerHour[i] * this.avgSale);
     this.cookiesPerHour.push(hour1);
     this.totalCookies += hour1;
   }
 },

 render: function () {
   this.getCookiesPerHour();
   let seattleList = document.getElementById('paris');
   for (let i = 0; i < hours.length; i++) {
     let liElement = document.createElement('li');
     liElement.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies.`;
     parisList.appendChild(liElement);
   }

   let liElement = document.createElement('li');
   liElement.textContent = `Total: ${this.totalCookies} cookies.`;
   parisList.appendChild(liElement);
 },
}

paris.render();
console.log(seattle.cookiesPerHour);

// Elements
let parisElement = document.getElementById('parisH2');
let h2Element4 = document.createElement('h2');
h2Element1.textContent = paris.location;
parisElement.appendChild(h2Element4);

let lima = {
 location: 'lima',
 minCust: 2,
 maxCust: 16,
 avgSale: 4.6,
 cookiesPerHour: [],
 customersPerHour: [],
 totalCookies: 0,

 // Gives the customer per hour # based on the range of min cust and max cust.

 getCustomersPerHour: function () {
   for (let i = 0; i < hours.length; i++) {
     this.customersPerHour.push(random(this.minCust, this.maxCust));
   }
 },

 //  gives cookies per hour based off cust per hour depending on the hour of the day

 getCookiesPerHour: function () {
   this.getCustomersPerHour();
   for (let i = 0; i < hours.length; i++) {
     let hour1 = Math.ceil(this.customersPerHour[i] * this.avgSale);
     this.cookiesPerHour.push(hour1);
     this.totalCookies += hour1;
   }
 },

 render: function () {
   this.getCookiesPerHour();
   let limaList = document.getElementById('lima');
   for (let i = 0; i < hours.length; i++) {
     let liElement = document.createElement('li');
     liElement.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies.`;
     limaList.appendChild(liElement);
   }

   let liElement = document.createElement('li');
   liElement.textContent = `Total: ${this.totalCookies} cookies.`;
   limaList.appendChild(liElement);
 },
}

lima.render();
console.log(seattle.cookiesPerHour);

// Elements
let limaElement = document.getElementById('limaH2');
let h2Element5 = document.createElement('h2');
h2Element1.textContent = lima.location;
limaElement.appendChild(h2Element5); 