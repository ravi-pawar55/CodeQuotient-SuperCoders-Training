/* 
Nodejs Assignment - 2 
Create a module that exports a function for generating a random number between a given range. Then import and use this module in a new program to perform calculations.
*/

const generateRandomNumber = require('./RandomNumberGenerator');

const randomNumber = generateRandomNumber(1, 25);

const res = randomNumber * 2;

console.log('Random Number:', randomNumber);
console.log('Result:', res);
