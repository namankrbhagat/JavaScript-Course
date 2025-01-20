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
*/



///////////////////////////////////////
// How Passing Arguments Works: Values vs. Reference
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