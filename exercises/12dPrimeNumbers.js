//class follor along for the seperation of concerns part of the prime numbers exercise. Part 1 is 12. My solution to 1 is 12b. My solution to seperation of concerns is 12c. 

showPrimes(20);


function showPrimes(limit) {
    for (let number = 2; number <= limit; number++) 
        if (isPrime(number)) console.log(number);
}

function isPrime(number) {
    for (let factor = 2; factor < number; factor++)
        if (number % factor === 0)
            return false;

    return true;
}