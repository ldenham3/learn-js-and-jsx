//returns all multiples of 3 and 5 from 0 to limit


//MINE - WRONG, double counts multiples which i thought i was supposed to do, I was not
function sum (limit) {
    let fiveMultiples = [];
    let threeMultiples = [];
    let total;

    for (let i = 0 ; i <= limit ; i++){
        if (i % 3 === 0) threeMultiples.push(i);
        if (i % 5 === 0) fiveMultiples.push(i);
    }

    var sumThrees = threeMultiples.reduce(function(a,b){
        return a + b;
    }, 0);

    var sumFives = fiveMultiples.reduce(function(a,b){
        return a + b;
    }, 0);

    total = sumFives + sumThrees;

    return total;
}

console.log(sum(20));

//CLASS

function sum2 (limit) {
    let sum = 0;

    for (let i = 0; i <= limit; i++)
        if (i % 3 === 0 || i % 5 === 0)
            sum += i;
            
    return sum;
}

console.log(sum2(20));
