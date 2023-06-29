// We can put function expressions in the value part in objects and use the function// function name as key for it because
// function expressions are just values in js.

const abhi = {
    firstName : 'Abhinav',
    lastName  : 'Prajapati',
    birthYear : 2000,
    job       : 'Software developer',
    hasDriversLicense: false,

    calcAge1 : function(birthYear)
    {
        return 2037 - birthYear;
    },

    calcAge2    : function ()
    {
        return 2037 - this.birthYear;
    },

    calcAge3    : function(){
        this.age = 2037 - this.birthYear; // It creates a new property -> age.
        return this.age;
    },
    getSummary  : function(){
        return `${this.firstName} is a ${this.calcAge3()} years old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
    }

};

// The functions associated with objects are called methods.

console.log(abhi.calcAge1(2000));
console.log(abhi['calcAge1'](1995));

// This keyword
// This keyword is used to reference the object which has called the function.

console.log(abhi.calcAge2());

// We can also calculate the age once, store it in a property and then retrieve it whenever we want to 
// from there ahead in objects.

console.log(abhi.calcAge3());

console.log(abhi.age);
console.log(abhi.age);
console.log(abhi.age);


// Challenge -> Print this
// Abhinav is a 37 years old Software Developer and he has a/no driver's license.

console.log(abhi.getSummary());


// Arrays are also objects which are special type of objects and they have their methods
// which we can call to add or remove elements and do other things.
