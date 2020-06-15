
//BASIC OBJECT - OBJECT LITERAL SYNTAX
const circle = {
    radius: 1, 
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log('draw');
    }
};

console.log('CALLING AN OBJECT METHOD:');
circle.draw(); //Method - function part of an object

//CREATING OBJECTS - factory functions vs constructor functions

//FACTORY FUNCTION - creates objects
function createCircle(radius) {
    return {
        radius, 
        //removed for ease of learning
        // location: location,
        // isVisible: true,

        //simpler way to define method below
        // draw: function() {
        //     console.log('draw');
        // }
        draw() {
            console.log('draw by factory function');
        }
    };
}

//creating object from factory function
const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);

//CONSTRUCTOR FUNCTION
function Circle(radius) {
    this.radius = radius; //this is a reference to the object executing this code. imagine its an empty object. imagine we are adding this property to an empty object
    this.draw = function() {
        console.log('draw by constructor function');
    }
}

//creating object from constructor function
const circle3 = new Circle(1);
console.log(circle3);

//DYNAMIC NATURE OF OBJECTS
const circle4 = {
    radius: 1
};

//add property
circle4.color = 'yellow';
//add method
circle4.draw = function() {}
//delete property
delete circle4.color;
//delete method
delete circle4.draw;

console.log(circle4);

//CONSTRUCTOR PROPERTY