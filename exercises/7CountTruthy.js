//takes an array and returns number of truthy values in it

//MINE

function countTruthy(array) {
    let truthyCount = 0;
    for (let item of array) {
        if(item) truthyCount++;
    }
    return truthyCount;
}

let truthyArray = [2, true, NaN, false, 'Leah'];

console.log(countTruthy(truthyArray));


// CLASS

function countTruthy2(array) {
    let count = 0;
    for (let value of array)
        if (value)
            count++
    return count;
}

console.log(countTruthy2(truthyArray));
