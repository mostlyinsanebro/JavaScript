// Hositing in Practice

// HOISTING IN VARIABLES

console.log(a);
// Now, var variable will be hoisted and it will have the value of undefined at this point.

// let variable will give uninitialized error here because even though it is there in the variable env.
// it is still uninitialized and same is the case with const variable.For these, hoisting does not work.

// This area is simply a temporal deadzone(TDZ) for const and let variables.
// console.log(b);
// console.log(c);


var a = 10;
let b = 20;
const c = 30;


// HOISTING IN FUNCTIONS

// This works because hoisting works for function declarations.
console.log(addDecl(2,3));

// This will give error because the function is being assigned to addExpr const variabble and this is the TDZ 
// for that const variable. But, even if we replace the const keyword with var keyword, this will still give 
// addExpr is not a fuunction error because addExpre function is undefined rn and it is equivalent to calling
// undefined(2,3) which gives error.

// console.log(addExpr(2,3));

// console.log(addArrow(2,3));

// Function Declaration
function addDecl(a,b){
    return a+b;
}


// Function expression
const addExpr = function(a,b){
    return a+b;
}


// Arrow Function
var addArrow = (a,b) => a+b; // implicit return in arrow function.

// Only function that can be used before declaration is function declaration.



// Example of hoisting

if(!numberOfProducts) deleteShoppingCart();

var numberOfProducts = 10;

function deleteShoppingCart(){
    console.log('Delete the Shopping Cart');

}

// Now, what we are trying to do here is that we have created a variable of var type having value as 10
// and we have written if condition here, which states that the shoppingCart will be deleted i.e. the 
// deleteshoppingCart() will be called when the numberOfProducts becomes 0.

// But what happens is that the deleteShoppingCart() function is called even though numberOfProducts is
// not 0 because of hoisting.

// 0 is a falsy value but so is undefined and in the if condition, numberOfProducts is undefined due to hositing
// due to which our shopping cart got deleted and created a bug in the code.


// Take away from this is that use const and let keywords and not var in order to define variables.
// Always declare variablkes and functions before using them in the code as best practice.


// DIFFERENCE BETWEEN LET, CONST AND VAR
// It is that when we run our program var variables create properties in the window object and not let and 
// const, so we can access var variable in the window object.
// Window is the global object of js in the browser.


var x = 2;
let y = 3;
const z = 4;

if(x ==  window.x) console.log(x); // x exists in window objecta and not y and z.
if(y == window.y) console.log(y);
if(z == window.z) console.log(z);


