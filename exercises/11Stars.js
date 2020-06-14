//take in number of rows, return that many rows with the same number of stars in each


//MINE
function showStars (rows) {
    row = '';    
    for (let i = 0; i < rows ; i++){
        for (let j = 0; j <= i; j++ )
            row += '*';
        row += '\n';
    }
    return row;
}

console.log(showStars(5));
console.log(showStars(10));

//CLASS
function showStars2 (rows) {
    for (let row = 1; row <= rows; row++){
        let patttern = '';
        for (let i = 0; i < row; i++)
            patttern += '*';
        console.log(patttern);
    }
}


showStars2(5);
showStars2(10);
