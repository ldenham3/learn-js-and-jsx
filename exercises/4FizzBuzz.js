// if number is divisible by 3 -> "fizz"
// divisible by 5 ->  "buzz"
// if 3 and 5 -> "fizzbuzz"
// not divisible by 3 or 5 return the input
// not a number -> "not a number"

// MINE 
function fizzBuzz(input) {
    if (typeof input !== 'number') return "Not a Number";

    if (input % 3 === 0) {
        if (input % 5 === 0) return "FizzBuzz";
        return "Fizz";
    } else if (input % 5 === 0) {
        return "Buzz";
    } return input;
}

console.log(fizzBuzz(6));
console.log(fizzBuzz(10));
console.log(fizzBuzz(15));
console.log(fizzBuzz(7));
console.log(fizzBuzz(true));

//CLASS (he explicitly said string not a number not NaN)

function fizzBuzz2(input) {
    if (typeof input !== 'number')
        return NaN;
        
    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz'
    
    if (input % 3 === 0)
        return 'Fizz';

    if (input % 5 === 0)
        return 'Buzz';

    return input;
}

console.log(fizzBuzz2(6));
console.log(fizzBuzz2(10));
console.log(fizzBuzz2(15));
console.log(fizzBuzz2(7));
console.log(fizzBuzz2(true));