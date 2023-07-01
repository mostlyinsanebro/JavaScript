// Traversing an array

const abhi = [
    'Abhinav',
    'Prajapati',
    2023 - 2000,
    'Software developer',
    'Gurugram'
];

const types = [];

for(let i=0; i < abhi.length ; i++) {

    // Reading an array
    console.log(abhi[i]);


    // Writing to an aary
    // types[i] = typeof abhi[i];

    // or

    types.push(typeof abhi[i]);
}


// can not do this too const array var
// types = [1,1,1,1,1,1]; // will give error

console.log(types);

const birthYear = [1995,2000,2003,2005];
const ages = [];

for(let i=0;i< birthYear.length;i++) {
    ages.push(2023 - birthYear[i]);
}

console.log(ages);

// Continue :- This keywork is used to skip the current iteration in a loop and go to the next one.
console.log('------Continue with Strings------');
for(let i=0;i<abhi.length;i++) {

    if(typeof abhi[i] !== 'string')
     continue;

    console.log(abhi[i]+" "+ typeof abhi[i]);
}


// Break:- This keyword is used to end the execution of loop immediately.
console.log('------Break with Number------');
for(let i=0;i<abhi.length;i++) {

    if(typeof abhi[i] === 'number')
     break;

    console.log(abhi[i]+" "+ typeof abhi[i]);
}

