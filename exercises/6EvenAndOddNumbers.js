//show all numbers 0 to limit, even label next to numbers if even, odd if odd


//MINE
function showNumbers (limit) {
    for (i = 0 ; i <= limit ; i++){
        if (i % 2 === 0){
            console.log(i + ' : EVEN');
        } else {
            console.log(i + ' : ODD');
        }
    }
}

console.log(showNumbers(9));


//CLASS

function showNumbers2 (limit) {
    
    for (i = 0 ; i <= limit ; i++){
        const MESSAGE = (i % 2 === 0 ? 'EVEN' : 'ODD');
        console.log(i, MESSAGE);
    }
}

console.log(showNumbers2(9));
