//Exercise 12, taking a limit and returning all the prime numbers from 0 to that limit, but with seperation of concerns.  One function to return true or false if a number is prime or not, another to take in a limit and print the numbers. Making myself not look at before so there will be iterations like 12b


//<FUNCTION 1> Take in a number and check if it is prime or not. Returns true or false. 

//checking that the type of input is a number. If its not a number, return false. In the future this will be an exception but not there yet in class so dont want to use it. Writing without the else block because practicing js weirdness
// function isPrime (numberToCheck) {
//     if (typeof numberToCheck == 'number') {
//         return 'Thats a number';
//     }
//     return false;
// }

//prints 2 to half the number.  These will be the indicies to mod the number by to check if its prime. 
// function isPrime (numberToCheck) {
//     if (typeof numberToCheck == 'number') {
//         for (let index = 2; index <= (numberToCheck / 2); index++) {
//             console.log(index);
//         }
//     }
//     return false;
// }

//mods number to check by each index and prints the number, index, and the mod result
// function isPrime (numberToCheck) {
//     if (typeof numberToCheck == 'number') {
//         for (let index = 2; index <= (numberToCheck / 2); index++) {
//             console.log(numberToCheck, index, (numberToCheck%index));
//         }
//     }
//     return false;
// }


//create a boolean flag isPrime variable to set to true. Moding the number to check by the index, and only printing the ones that are 0, which will mean the number is not prime
// function isPrime (numberToCheck) {
//     if (typeof numberToCheck == 'number') {
//         let isPrime = true;
//         for (let index = 2; index <= (numberToCheck / 2); index++) {
//             if (numberToCheck % index === 0) {
//                 console.log(numberToCheck, index, (numberToCheck%index));
//             }
//         }
//     }
// }

//using the mod 0 to set the isprime flag to false if its reached. if its never reached it stays true. if the input is a number and the if statment isnt reached, isprime will be true and we return that. added back in the return false outside the top if that checks if the input is a number because i think i accidentally deleted it somewhere. Thats where errors and exceptions come in in the future. For now, if its not a number, its false.  
function isPrime (numberToCheck) {
    if (typeof numberToCheck == 'number') {
        let isPrime = true;
        for (let index = 2; index <= (numberToCheck / 2); index++) {
            if (numberToCheck % index === 0) {
                isPrime = false;
                break;
            }
        }
        return isPrime;
    }
    //this is where the exception if the input isnt valid will go in the future
    return false; 
}

//</FUNCTION 1>

//<FUNCTION 2> Take in a limit and print all the prime numbers from 0 to that limit

//takes in a limit. calls the isprime function and passes in limit just to make sure its working
// function zeroToLimitPrimeNumbers (limit){
//     return isPrime(limit);
// }

//prints 2 to the limit given to the console
// function zeroToLimitPrimeNumbers (limit){
//     for (let index = 2; index <= limit; index++){
//         console.log(index);
//     }
// }

//calls is prime on each index, if true is returned it prints the number, if not it passes it. This should work. Other than a non number giving undefined, not adding the extra check, the error handling if i had it in isPrime would get it
function zeroToLimitPrimeNumbers (limit){
    for (let index = 2; index <= limit; index++){
        if(isPrime(index)) {
            console.log(index);
        }
    }
}

//returning as an array because i hate functions that just print to console. non numbers and instances without any primes to print will return an empty array, which would be expected behavior anyways. Calling this done. 12d will have the class follow along
function zeroToLimitPrimeNumbers (limit){
    let listOfPrimes = [];
    for (let index = 2; index <= limit; index++){
        if(isPrime(index)) {
            listOfPrimes.push(index);
        }
    }
    return listOfPrimes;
}

//</FUNCTION 2>

console.log(zeroToLimitPrimeNumbers(20));
console.log(zeroToLimitPrimeNumbers(7));
console.log(zeroToLimitPrimeNumbers('blue'));
