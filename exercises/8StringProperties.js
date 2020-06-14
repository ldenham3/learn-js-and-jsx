//pass an object, display all the objects properties of type string


//MINE
function showProperties (object) {
    for (let key in object) 
        if (typeof object[key] == 'string')
            console.log(key, object[key]);
}

const PUPPY = {
    name : 'Stormy',
    breed : 'Newfounland',
    weight : 100
};

showProperties(PUPPY);

//CLASS
function showProperties2 (object) {
    for (let key in object)
        if(typeof object[key] === 'string')
            console.log(key, object[key]);
}

showProperties2(PUPPY);
