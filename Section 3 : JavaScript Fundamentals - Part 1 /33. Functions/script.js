// Functions are bascically piece of code that we can use again and again 
// and they can also take values as input and can produce or return values as result/ output.

function logger(level, message) {
    console.log('My name is Abhinav');
}

// calling/invoking/executing/running fucntions
console.log(logger());
// Functions return undefined by default in js.
logger();
logger();


// we can also pass arguments to functions.
function fruitProcessor(apples,oranges){
    let juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

let appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

let appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);

// functions allow us to write more maintainable code.
