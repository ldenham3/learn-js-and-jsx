console.log('EXERCISE 1: SWAPPING VARIABLES');

let a = 'red';
let b = 'blue';

//swap variables so that a is blue and b is red

//my solution no google (matches his) called temporary variable
let storeA = a;
a = b;
b = storeA;

console.log('A(blue): ' + a);
console.log('B(red): ' + b);

//Internet solutions

//1. Destructuring assignment 
let d1 = 1;
let d2 = 2;

[d1, d2] = [d2, d1];

console.log('Destructuring array assignment method: d1: ' + d1 + ', d2: ' + d2);

console.log('XOR and addition/subtraction methods exist but they seem limited and not worth time now.');