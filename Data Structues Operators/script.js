'use strict'

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

const { 
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName,hours,tags);

// Default values
const { 
  menu = [], 
  starterMenu: starters = [] 
} = restaurant;
console.log(menu, starters);

//Mutating variables
let a =111;
let b = 864;
const obj = {a:23 ,b:5, c: 24};
({a,b} = obj); 
console.log(a,b);

//Nested objects
const { 
  fri: { open: o, close: c },
} = restaurant.openingHours;
console.log(o,c);

/*
//////////////////////////////////////
//Destructuring Arrays
let [main,secondary] = restaurant.categories;
console.log(main,secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main,secondary);

[main,secondary] = [secondary,main];
console.log([main,secondary])

const [starter,mainCourse] = restaurant.order(2,0);;
console.log(starter,mainCourse);


//Nested Destructuring
const nested = [2,4,[5,6]];
// const [i, , j] = nested;
// console.log(i,j);

const [i, , [j,k]] = nested;
console.log([i,j,k]);


//Default Values
const [p=1,q=1,r=1] = [6,7];
console.log(p,q,r);

*/
