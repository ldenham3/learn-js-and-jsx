//<BASICS>
let name = 'Leah';
const interestRate = 0.3;

//Object
const person = {
    name: 'Leah',
    age: 28
};

let selection = 'name'; //access property dynamically
person[selection] = 'Mary';

console.log(person);
console.log('ACCESSING ARRAY VALUE WITH DOT NOTATION: ' + person.name); //accessing with dot notation
console.log('ACCESSING ARRAY VALUE WITH BRACKET NOTATION: ' + person['age']); //accessing with bracket notation
console.log(interestRate);

//FUNCTIONS 
//Performing a task funtions
function greet() {
    console.log('Hello World');
}

greet(console.log('CALLING A FUNCTION WITH NO PARAMS (WILL DISPLAY ON NEXT CONSOLE LINE): '));

function greetOneParam(name) {
    console.log('Hello ' + name);
}

console.log('CALLING A FUNCTION WITH ONE PARAM (WILL DISPLAY ON NEXT CONSOLE LINE): ');
greetOneParam('Leah');
console.log('CALLING A FUNCTION WITH ONE PARAM (WILL DISPLAY ON NEXT CONSOLE LINE): ');
greetOneParam('John');

function greetMultipleParam(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

console.log('CALLING A FUNCTION WITH MULTIPLE PARAMS (WILL DISPLAY ON NEXT CONSOLE LINE): ');
greetMultipleParam('Leah', 'Baker');

//Calculation funtion (vs performing task functions like greets)
function square(number) {
    return number*number;
}

//declare and print variable
let number = square(2);
console.log('RETURNING A CALULATION FUNCTION OUTPUT BY VAR DECLARATION: ' + number);

//print value directly
console.log('RETURNING A CALULATION FUNCTION OUTPUT DIRECTLY BY CALLING FUNCTION: ' + square(5))

//</BASICS>

