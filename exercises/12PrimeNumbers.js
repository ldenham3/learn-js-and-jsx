//return prime numbers 0 to limit 


//couldnt figure out prime formula, skipped to class solution because that felt like not what im trying to learn
function showPrimes(limit) {
    for (let number = 2; number <= limit; number++) {

        let isPrime = true;
        for (let factor = 2; factor < number; factor++) {
            if (number % factor === 0){
                isPrime = false;
                break;
            }
        }

        if (isPrime) console.log(number);
    }
}

// showPrimes(30);

//SEPERATING INTO DIFFERENT FUNCTIONS

//NOTE: I am leaving this jumble of nightmares BECAUSE i was at the end of a long long day and should have stopped but I didnt so this is staying to remind me of the asanine crap I come up with when im too tired and need to walk away before I break things. I started the next say with a clean file, 12b, where I went stop by step on my own to write it, clean it up, and optomize it. Thats where my solution actually is. This one is to shame me. 12c will have it done seperations of concerns style. 

//MINE

//determine if an input is prime
function isPrimeNumber (val) {
    let isPrime = true;
    for (let factor = 2 ; factor < val ; factor++ )
        if (val % factor === 0) isPrime = false;
    return isPrime;
}

//show primes from 0 to input
function showPrimeList (limit) {
    let primeList = [1, 2];
    for (let number = 3; number < limit; number++){
        if (isPrimeNumber(number)) primeList.push(number);
    }
    return primeList;
}

console.log(isPrimeNumber(30));
console.log(isPrimeNumber(11));
console.log(showPrimeList(30));

//CLASS

function isPrime (number) {
    for (let factor = 2; factor < number; factor++){
        if (number % factor === 0) return false;
    }
    return true;
}

function showPrimes2 (limit) {
    for (let number = 2; number <= limit; number++){
        if (isPrime(number)) console.log(number);
    }
}

showPrimes2(30);