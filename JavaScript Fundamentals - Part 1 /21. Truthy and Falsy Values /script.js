// falsy values are the values which will get converted to false when we try to convert them to boolean.
// 5 falsy values :- '', null, NaN, undefined , 0

// all the other values are truthy values.

console.log(Boolean(0));
console.log(Boolean(' '));
console.log(Boolean(''));
console.log(Boolean({}));
console.log(Boolean('Jonas'));

// But in js, the convertion to boolean always happens implicitly.
// We do not do it explicitly.

// There are two scenarios for that :- 
// 1. While using Logical Operators.
// 2. In a logical context, in a condition of if-else statement.

const money = 0;

if(money)
{
    console.log("Don't spend it all");
}
else
{
    console.log("You should get a job !")
}


let height ;
if(height)
{
 console.log("YAY! Height is defined");
}
else
{
    console.log("Height is undefined");
}
