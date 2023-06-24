// Ternary operator

let age = 23;

const drink = age >= 18 ? 'I like to drink wine 🍷':'I like to drink water 💧';
console.log(drink);

// Ternary operator is an expression which returns a value.
// exp ? 'executed when true' : 'executed when false';

let drink2;

if(age >= 18)
{
    drink2 = 'wine 🍷';
}
else 
{
     drink2 = 'water 💧';
}

console.log(drink2);


console.log(age>18 ? 'I like to drink wine 🍷': 'I like to drink water💧');
