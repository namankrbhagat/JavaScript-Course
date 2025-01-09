'use strict'

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
  },

  
  // order(starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },


  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function(ing1, ing2, ing3){
    console.log(`Here is your delicous pasta with ${ing1},${ing2},${ing3}`);

  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
///////////////////////////////////
// Working with Strings - Part 3

console.log('a+very+nice+string'.split('+'));
console.log('Naman Kumar Bhagat'.split(' '));

const [firstName,LastName] = 'Naman Bhagat'.split(' ');

const newName = ['Mr.'+ firstName + LastName.toUpperCase()].join(' ');
console.log(newName);

const capitalize = function(name){
  const names = name.split(' ');
  const nameUpper = [];
  for(const n of names){
    nameUpper.push(n[0].toUpperCase() + n.slice(1));
    console.log(namesUpper.join(' '));
  }

  capitalize('jessica ann smith davis');
  capitalize('jonas schmedtmann');

}

//Padding
const maskCreditCard = function(number){
  const str = number + ''; // converts number to string
  const last = str.slice(-4);
  return last.padStart(str.length,'*');
}

console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard('334859493847755774747'));

//Repeat

const msg2 = 'Bad Weather... All Departures Delayed... ';
console.log(msg2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);

/*
///////////////////////////////////
// Working with Strings - Part 2

const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'jOnAS';
const passLower = passenger.toLowerCase();
const Correct = passLower[0].toUpperCase() + passLower.slice(1);

console.log(Correct);

//Comparing Emails
const email = 'namanku@gmail.com';
const login = ' Namanku@Gmail.com \n';

const correctEmail = login.toLowerCase().trim();
console.log(correctEmail);
console.log(email === correctEmail);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

// Alternative solution to replaceAll with regular expression
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

//Practice Exercise

const checkBaggage = function(items){
  const baggage = items.toLowerCase();

  if(baggage.includes('knife') || baggage.includes('gun')){
    console.log('You are not allowed on board');
  }else{
    console.log('Welcome abroad!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');




///////////////////////////////////
// Working with Strings - Part 1

const airline = 'Air India';
const plane = 'A230';

console.log(plane[2]);
console.log('B345'[1]);

console.log(airline.length);
console.log('B345'.length);

console.log(airline.indexOf('i'));
console.log(airline.lastIndexOf('i'));
console.log(airline.indexOf('India'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const middleSeat = function(seat){
  const s = seat.slice(-1);
  if(s === 'B' || s === 'E'){
    console.log('You got the middle seat 🥲');
  }else{
    console.log('You were lucky 😉');
  }
}

middleSeat('11B');
middleSeat('23C');
middleSeat('3E');

console.log(typeof new String('Naman'));
console.log(typeof new String('Aman').slice(1));



////////////////////////////////////
// Maps: Iteration

const ques = new Map([
  ['Question','What is the best programming language in the world'],
  [1,'C'],
  [2,'Java'],
  [3,'C++'],
  ['correct',3],
  [true, 'Correct Answer'],
  [false, 'Try Again']
]);

console.log(ques);

//Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);


//Quiz App
for(const [key,value] of ques) {
  if(typeof key === 'number'){
    console.log(`Answer ${key} : ${value}`);
    
  }
}

const answer = Number(prompt('Your answer'));
console.log(answer);

console.log(ques.get(ques.get('correct') === answer));
console.log(...ques);
console.log(...ques.keys);
console.log(...ques.values);




/////////////////////////////////////
// Maps Fundamentals
const rest = new Map();
rest.set('name','Classico Italiano');
rest.set(1,'Firenze, Italy');
console.log(rest.set(2,'Lisbon, Portugal'));

rest
    .set('categories',['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open',11)
    .set('close',23)
    .set(true,'We are open :D')
    .set(false, 'We are closed ');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 0;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);




///////////////////////////////////////
// Sets
const orderSet = new Set([
  'Pizza',
  'Pizza',
  'Pizza',
  'Rissotto',
  'Pasta',
  'Pasta',
]);
console.log(orderSet);
console.log(new Set('Jonas'));
console.log(orderSet.size);
console.log(orderSet.has('Bread'));
console.log(orderSet.has('Pizza'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Rissoto');

console.log(orderSet);
for(const order of orderSet){
  console.log(order);
}

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const find = [...new Set(staff)];
console.log(find);




///////////////////////////////////////
// Looping Objects: Object Keys, Values, and Entries
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days`;

for(const day of properties){
  console.log(day);
}

//Property Value
const values = Object.values(openingHours);
console.log(values);

//Entire Object
const entries = Object.entries(openingHours);
console.log(entries);

for(const [day, {open,close}] of entries){
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}




///////////////////////////////////////
// Optional Chaining
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// const users = [];

console.log(users[0]?.name ?? 'User array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');





///////////////////////////////////////
// The for-of Loop


const menu = [...restaurant.starterMenu,...restaurant.mainMenu];

for(const item of menu){
  console.log(item);
}

for(const [i,el] of menu.entries()){
  console.log(`${i+1}: ${el} `);
}





///////////////////////////////////////
// Logical Assignment Operators
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);




///////////////////////////////////////
// The Nullish Coalescing Operator
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);




///////////////////////////////////////
// Short Circuiting (&& and ||)

console.log('---- OR ----');
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- AND ----');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'jonas');

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');




///////////////////////////////////////
// Rest Pattern and Parameters
// 1) Destructuring

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');



//////////////////////////////////
//The Spread Operator (...)

const arr = [7,8,9];
const newArr = [1,2, ...arr];
console.log(newArr);

const newMenu = [...restaurant.mainMenu,'Noodles'];
console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 Arrays
const menu = [...restaurant.starterMenu,...restaurant.mainMenu];
console.log(menu);

//Iterables: arrays,strings,maps,sets, not objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Schmedtmann`);


// const ingredients = [prompt("Let's make pasta! Ingredient 1?"),
//                      prompt('Ingredient 2?'),
//                      prompt('Ingredient 3?'),
// ];
// console.log(...ingredients);
// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);




///////////////////////////////////////
// Destructuring Objects
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
