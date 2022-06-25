'use strict';
const ps = require('prompt-sync');
const prompt = ps();

const operand = prompt('Welcome. Enter \n1. for addition \n 2.for subtraction  \n 3. for multiplication \n 4. for division')

const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;

switch(operator) {
    case 1:
         result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;

    case 2:
         result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;

    case 3:
         result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;

    case 4:
         result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;

    default:
        console.log('Invalid option');
        break;
}

console.log(`${number1} ${operator} ${number2} = ${result}`);