//get hour, depending on time greet user with different message
// 6am-12pm "good morning!", 12pm-6pm "good afternoon!", otherwise "good evening!"

//IFELSE 

//MINE
// let time = 15;
// let message;

// if (time >= 6 && time < 12) {
//     message = "Good Morning!"
// } else if (time >= 12 && time < 18) {
//     message = "Good Afternoon!"
// } else {    
//     message = "Good Evening!"
// }

// console.log(message);

//CLASS
console.log('IF/ELSE: ');
let hour = 10;

if (hour >= 6 && hour < 12)
    console.log('Good Morning!');
else if (hour >= 12 && hour < 16) 
    console.log('Good Afternoon!');
else 
    console.log('Good Evening!');

//SWITCH CASE
console.log('SWITCH/CASE: ');
let role;

switch (role) {
    case 'guest': 
        console.log('Guest User');
        break;
    case 'moderator':
        console.log('Moderator');
    default:
        console.log('Unknown User');
} 

//DOING SAME THING IN AN IF
console.log('IF/ELSE INSTEAD OF SWITCH CASE: ');
let ifRole = 'guest';

if (ifRole === 'guest') 
    console.log('Guest User');
else if (ifRole === 'moderator') 
    console.log('Moderator');
else 
    console.log('Unknown User');

//FOR 
console.log('FOR: ');

for (let i = 0 ; i < 5 ; i++) 
    console.log('Hello World!', i);

for (let i = 0 ; i <= 5 ; i++) 
    if (i % 2 !== 0)
        console.log(i);

//WHILE
console.log('WHILE: ');

let i = 0;

while (i <= 5) {
    if (i % 2 !== 0) 
        console.log(i);
    i++;
}


//DO WHILE
console.log('DO WHILE: ');

let j = 9;

do {
    if (j % 2 !== 0)
        console.log(j);
    j++;
} while (j <= 5);

//FOR IN
console.log('FOR IN ITERATING OVER PROPERTIES OF AN OBJECT: ');

const person = {
    name: 'Leah',
    age: 27
};

for (let key in person)
    console.log(key + ': ' + person[key]);

console.log('FOR IN ITERATING OVER ELEMENTS OF AN ARRAY (USE FOR OF FOR THIS): ');

const colors = ['red', 'green', 'blue'];

for (let index in colors){
    console.log(index + ': ' + colors[index]);
}

//FOR OF 
console.log('FOR OF: ');

for (let color of colors)
    console.log(color);
