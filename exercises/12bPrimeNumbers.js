
//function takes in a limit and prints the prime numbers from 0 to the limit

// cycles through all numbers from 2 to the given limit and prints them. 1 and 0 are not prime so we can just skip over them and start looking at 2
// function primeNumbers (givenLimit) {
//     for (let currNumber = 2; currNumber <= givenLimit; currNumber++) {
//         console.log(currNumber, givenLimit);
//     }
// }

// primeNumbers(20);


//cycles through all numbers from 2 to the given limit, then cycles through each of those individually and prints each number next to the index we will divide by, so 2 to number - 1. 
// function primeNumbers (givenLimit) {
//     for (let currNumber = 2; currNumber <= givenLimit; currNumber++) {
//         for (let index = 2; index < currNumber; index++) {
//             console.log(currNumber, index);
//         }
//     }
// }

// primeNumbers(20);

//cycles through all numbers from 2 to given limit and then applies an index from 2 to number - 1 to each number and prints the pairs that are found not to be prime (number is evenly divisible by index) with a label. each prime cycles through the whole loop without hitting that state. 
// function primeNumbers (givenLimit) {
//     for (let currNumber = 2; currNumber <= givenLimit; currNumber++) {
//         for (let index = 2; index < currNumber; index++) {
//             if (currNumber % index === 0) {
//                 console.log(currNumber + ': ' + index + ' NOT PRIME COMBO');
//             } 
//             else {
//                 console.log(currNumber, index);
//             }
//         }
//     }
// }

// primeNumbers(20);

//the flag for prime or not is set for each individual number so it needs to be accessible by the time we hit the index for loop, but doesnt need to be outside the loop that cycles the current number because it doesnt apply to anything there. We want is prime status currently on every pair to make sure its working, but will need moved down below. Should print undefined for every pair that is prime, and will print undefinied for each current number that is not prime until it hits an evenly divisible pair, so it will print false for that pair and all other pairs for that current number after it. 
// function primeNumbers (givenLimit) {
//     for (let currNumber = 2; currNumber <= givenLimit; currNumber++) {
//         let isPrime;
//         for (let index = 2; index < currNumber; index++) {
//             if (currNumber % index === 0) {
//                 isPrime = false;
//                 console.log(currNumber + ': ' + index + ' NOT PRIME COMBO' + ', Prime: ' + isPrime);
//             } 
//             else {
//                 console.log(currNumber + ': ' + index + ', Prime: ' + isPrime);
//             }
//         }
//     }
// }

// primeNumbers(20);

//if we find a factor the current number is divisible by the prime flag is set to false.  we can then move on to the next number and dont need to continue running that number against indices. Adding the break will  jump to the next current number if the flag is set (ie. not prime because its found an evenly divisible pair)
// function primeNumbers (givenLimit) {
//     for (let currNumber = 2; currNumber <= givenLimit; currNumber++) {
//         let isPrime;
//         for (let index = 2; index < currNumber; index++) {
//             if (currNumber % index === 0) {
//                 isPrime = false;
//                 console.log(currNumber + ': ' + index + ' NOT PRIME COMBO' + ', Prime: ' + isPrime);
//                 break;
//             } 
//             else {
//                 console.log(currNumber + ': ' + index + ', Prime: ' + isPrime);
//             }
//         }
//     }
// }

// primeNumbers(20);

//we dont need to print the numbers that are prime at all, so moving the print statment to outside the mod loop that until a non prime pair is reached (%index is not 0) the current number and index pair will print, but once a non prime pair is found, the break statement will jump out to the index for loop and the next number will start.  So this should print all prime pairs up until a non prime pair is found, then the current number should roll over to the next. This will still print current numbers that ARENT prime because they print prime pairs until one is reached. 
// function primeNumbers (givenLimit) {
//     for (let currNumber = 2; currNumber <= givenLimit; currNumber++) {
//         let isPrime;
//         for (let index = 2; index < currNumber; index++) {
//             if (currNumber % index === 0) {
//                 isPrime = false;
//                 break;
//             } 
//             console.log(currNumber + ': ' + index + ', Prime: ' + isPrime);
//         }
//     }
// }

// primeNumbers(20);

//setting prime flag explicitly to true so that it will show true next to all prime pairs not undefined and only be false once a non prime pair is found and then it is set in the if mod statement.  We should never see non prime pairs or any pairing with a number that is past being found not to be prime
// function primeNumbers (givenLimit) {
//     for (let currNumber = 2; currNumber <= givenLimit; currNumber++) {
//         let isPrime = true;
//         for (let index = 2; index < currNumber; index++) {
//             if (currNumber % index === 0) {
//                 isPrime = false;
//                 break;
//             } 
//             console.log(currNumber + ': ' + index + ', Prime: ' + isPrime);
//         }
//     }
// }

// primeNumbers(20);

//we only want to print a number if it is prime overall, and not the pairs up until it is found to be prime. Moving the console log statment to after the for index loop (ie once each current number has had all the indeces that will be run against it done so). This should leave us with a list of the current numbers, 2 to the given limit, with its prime status printed beside it. Each number should only print once, and the prime status should be correct even if the number had prime pairs run before a non prime was reached. 
// function primeNumbers (givenLimit) {
//     for (let currNumber = 2; currNumber <= givenLimit; currNumber++) {
//         let isPrime = true;
//         for (let index = 2; index < currNumber; index++) {
//             if (currNumber % index === 0) {
//                 isPrime = false;
//                 break;
//             } 
//         }
//         console.log(currNumber, isPrime);
//     }
// }

// primeNumbers(20);


//we only want to print the numbers that are prime, aka the ones that have the prime flag as true. wrapping the console log statment in an if to check if the flag is true before printing. this will avoid printing all the numbers that are not prime because if the flag is false then the log statement wont be reached. This should print only the prime numbers. Removed the prime flag because we know that isPrime is true if the number is printing.
// function primeNumbers (givenLimit) {
//     for (let currNumber = 2; currNumber <= givenLimit; currNumber++) {
//         let isPrime = true;
//         for (let index = 2; index < currNumber; index++) {
//             if (currNumber % index === 0) {
//                 isPrime = false;
//                 break;
//             } 
//         }
//         if(isPrime == true) {
//             console.log(currNumber);
//         }
//     }
// }

// primeNumbers(20);


//technically the solution above is the answer to the problem BUT i want to return them not print them. printing to the console as a functions action is not very real world applicable. Its more likely a function will return something.  Because a function ends when a return statment is hit, we need an array to hold the prime numbers that we will add to in place of printing the current number. Then return the array at the end. This means wrapping the call below in a console log statment so it actually shows up. So this funtion now returns an array of the primes found. This has to happen after the loops because inside them we will hit the return statement early and the function will end prematurely. 
// function primeNumbers (givenLimit) {
//     let listOfPrimes = [];
//     for (let currNumber = 2; currNumber <= givenLimit; currNumber++) {
//         let isPrime = true;
//         for (let index = 2; index < currNumber; index++) {
//             if (currNumber % index === 0) {
//                 isPrime = false;
//                 break;
//             } 
//         }
//         if(isPrime == true) {
//             listOfPrimes.push(currNumber);
//         }
//     }
//     return listOfPrimes;
// }

// console.log(primeNumbers(20));


//seeing what i can optomize. 
//1. can remove == true to if isPrime, its true already
//2. shortened the inner loop of indicies to current number divided by 2, because nothing above that matters 
// jesse check of approval given, moving on
// function primeNumbers (givenLimit) {
//     let listOfPrimes = [];
//     for (let currNumber = 2; currNumber <= givenLimit; currNumber++) {
//         let isPrime = true;
//         for (let index = 2; index < (currNumber / 2); index++) {
//             if (currNumber % index === 0) {
//                 isPrime = false;
//                 break;
//             } 
//         }
//         if(isPrime) {
//             listOfPrimes.push(currNumber);
//         }
//     }
//     return listOfPrimes;
// }

// console.log(primeNumbers(20));

//javascripting the thing. I want to add in all the things like one lines, no {} or ; so I can prove to myself I know them so that I can actually read other peoples code. The worst part of js by far. Can we just have some damn rules please. 
//1. removing {} from if is prime statment and making it one line
// jesse seal of approval again. potentally add in things like map and reduce in the future but I dont want to use anything the class hasnt covered at this point because its not intended to be in the soltion. I dont think arrays were, but I couldnt handle that so oh well.
function primeNumbers (givenLimit) {
    let listOfPrimes = [];
    for (let currNumber = 2; currNumber <= givenLimit; currNumber++) {
        let isPrime = true;
        for (let index = 2; index < (currNumber / 2); index++) {
            if (currNumber % index === 0) {
                isPrime = false;
                break;
            } 
        }
        if(isPrime) listOfPrimes.push(currNumber);
    }
    return listOfPrimes;
}

console.log(primeNumbers(20));

//DONE. Or I am offically out of ideas to keep going. 