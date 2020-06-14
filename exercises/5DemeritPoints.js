//Speed limit = 70
//For every 5 over + 1 point
// 12 points -> suspended

//MINE

function checkSpeed(speed) {
    const POINTS = Math.floor((speed - 70) / 5);

    if (POINTS <= 0) return 'Ok';
    if (POINTS >= 12) return 'License Suspended';
    
    return POINTS;
}

console.log(checkSpeed(5));
console.log(checkSpeed(500));
console.log(checkSpeed(70));
console.log(checkSpeed(71));
console.log(checkSpeed(77));
console.log(checkSpeed(85));
console.log(checkSpeed(120));

//CLASS


function checkSpeed2(speed) {
    const SPEEDLIMIT = 70;
    const KMPERPOINT = 5;

    if(speed < SPEEDLIMIT + KMPERPOINT){
        return 'Ok';
    } 
    

    const POINTS = Math.floor((speed - SPEEDLIMIT) / KMPERPOINT);
    if (POINTS >= 12) {
        return 'License Suspended';
    } else {
        return POINTS;
    }
}

console.log(checkSpeed2(5));
console.log(checkSpeed2(500));
console.log(checkSpeed2(70));
console.log(checkSpeed2(71));
console.log(checkSpeed2(77));
console.log(checkSpeed2(85));
console.log(checkSpeed2(120));