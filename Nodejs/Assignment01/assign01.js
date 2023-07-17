/* 
Nodejs Assignment-1
Create a Node.js program that takes two numbers as input from the command line
and performs arithmetic operations on them (e.g., addition, subtraction).
*/

var num1 = Number(process.argv[2]);
var num2 = Number(process.argv[3]);
 
console.log(`The sumation of ${num1} and ${num2} is : ${num1+num2}`);
console.log(`The difference of ${num1} and ${num2} is : ${num1-num2}`);
console.log(`The multiplication of ${num1} and ${num2} is : ${num1*num2}`);
console.log(`The division of ${num1} and ${num2} is : ${num1/num2}`);
console.log(`The modulus of ${num1} and ${num2} is : ${num1%num2}`);


/*
C:\SuperCoder\Practice\ node assignment01.js 10 20 

Output : The sumation of 20 and 50 is : 70
         The difference of 20 and 50 is : -30
         The multiplication of 20 and 50 is : 1000
         The division of 20 and 50 is : 0.4
         The modulus of 20 and 50 is : 20
*/
