'use strict'

/*
///////////////////////////////////////
// Default Parameters

const bookings = [];

const createBooking = function(
  flightNum,
  numPassengers = 1,
  price = 2000 * numPassengers
){

  const booking = {
    flightNum,numPassengers,price,
  };

  console.log(booking);
  bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);


///////////////////////////////////////
// How Passing Arguments Works: Values vs. Reference

const flight = 'LH223';
const details = {
  name: 'Naman Bhagat',
  passport: 12345678934,
};

const checkIn = function (flightNum,passenger) {
  flightNum = 'LH234';
  passenger.name = 'Mr. ' + passenger.name;

  if(passenger.passport === 12345678934) {
    // alert('Check In');
  }else{
    // alert('Wrong passport!');
  }
};

checkIn(flight,details);
console.log(flight);
console.log(details);




///////////////////////////////////////
//  Functions Accepting Callback Functions

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);




///////////////////////////////////
// Functions Returning Functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeter = greet('Hey');
greeter('Naman');
greeter('Power');

greet('Hello')('Vivek');
*/



///////////////////////////////////
// Call and Apply Method

const emirates = {
  airline: 'Emirates',
  iatacode: 'EM',
  bookings: [],

  book(flightNum, name) {
     console.log(
       `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`
     );
     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

emirates.book(123, 'Naman Bhagat');
emirates.book(234, 'Vivek Kumar');

console.log(emirates);

const indigo = {
  name: 'Indigo',
  iataCode: 'IN',
  bookings: [],
};

const book = emirates.book;

//Does Not work
// book(23,'Power Bhai');

book.call(indigo,23,'Power Bhai' );
console.log(indigo);