// Switch statement is basically used for conditional execution of code just like if - else

const day = 'wednesday';

switch(day){
    case 'monday': // day === monday -> case does strict comparison.
        console.log('Day is monday');
        break;
    case 'tuesday':
        console.log('Day is tuesday');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Day is wednesday or thursday');
        break;
    case 'friday':
        console.log('Day is friday');
        break;
    case 'saturday':
        console.log('Day is saturday');
        break;
    case 'sunday':
        console.log('Day is sunday');
        break;
    default:
        console.log('Not correct day!'); 
}


// Implememt same thing using if-else
if(day === 'monday')
    console.log('Day is monday');
else if (day === 'tuesday')
    console.log('Day is tuesday');
else if (day === 'wednesday'|| day === 'thursday')    
console.log('Day is wednesday or thursday');
else if (day === 'friday')
    console.log('Day is friday');
else if (day === 'saturday')
    console.log('Day is saturday');
else if (day === 'sunday')
    console.log('Day is sunday');
else
    console.log('Not correct day!'); 
