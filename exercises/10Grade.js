//calculate student grade, array of grades to function, calculate average grade and assign letter
//1-59 - F, 60-69 - D, 70-79 - C, 80-89 - B, 90-100 - A

//MINE - CAN CALCULATE SUM OF ARRAY WITH FOR OF, DONT NEED REDUCE
function calculateGrade(marks) {
    var sum = marks.reduce(function(a, b){
        return a + b;
    }, 0);

    var average = sum / marks.length;
    
    var grade;
    switch(true) {
        case (average < 60):
            grade = 'F';
            break;
        case (average < 70):
            grade = 'D';
            break;
        case (average < 80):
            grade = 'C';
            break;
        case (average < 90):
            grade = 'B';
            break;
        case (average <= 100):
            grade = 'A';
            break;
        default:
            grade = 'Something Is Wrong';
    }
    return grade;
}

const STUDENTA = [90, 20, 30, 99, 50];
const STUDENTB = [90, 92, 94];
console.log(calculateGrade(STUDENTA));
console.log(calculateGrade(STUDENTB));

//CLASS

function calculateGrade2(marks) {
    let sum = 0;

    for (let mark of marks)
        sum += mark;
    
    let average = sum / marks.length;

    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    
    return 'A';

}

console.log(calculateGrade2(STUDENTA));
console.log(calculateGrade2(STUDENTB));

//BREAKING INTO TWO FUNCTIONS

function calculateAverage (array) {
    let sum = 0;
    for (let val of array) sum += val;
    return sum / array.length;
}

function calculateGrade3 (marks) {
    const average = calculateAverage(marks);

    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B'; 

    return 'A';
}

console.log(calculateGrade3(STUDENTA));
console.log(calculateGrade3(STUDENTB));