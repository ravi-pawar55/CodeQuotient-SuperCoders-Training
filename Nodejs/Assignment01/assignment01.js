/* 
Nodejs Assignment-1
Create a Node.js program that takes two numbers as input from the command line
and performs arithmetic operations on them (e.g., addition, subtraction).
*/

var num1 = parseFloat(process.argv[2]);
var num2 = parseFloat(process.argv[3]);

var resSum = num1 + num2;
var resDiff = num1 - num2;

console.log("The sum of the two numbers is: "+resSum);
console.log("The difference of the two numbers is: "+resDiff);

/*
C:\SuperCoder\Practice\ node assignment01.js 10 20 

Output : The sum of the two numbers is: 30
         The difference of the two numbers is: -10
*/
