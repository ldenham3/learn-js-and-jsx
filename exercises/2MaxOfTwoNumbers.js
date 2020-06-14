//Write a function that takes in two numbers and returns the maximum of the two

//MINE

function maxNumber (firstNumber, secondNumber) {
    if (firstNumber === secondNumber) return 'same number';
    else  if (firstNumber > secondNumber) return firstNumber;
    else return secondNumber;
}

console.log(maxNumber(1,3));
console.log(maxNumber(10,3));
console.log(maxNumber(3,3));

//CLASS
//I assumed that if they were the same we'd do something different, meaning we had more than 2 outcomes. he does not.

function max (a, b) {
    // if (a > b) return a;
    // return b;
    return (a>b) ? a : b;
}

console.log(max(2,3));
console.log(max(5,3));