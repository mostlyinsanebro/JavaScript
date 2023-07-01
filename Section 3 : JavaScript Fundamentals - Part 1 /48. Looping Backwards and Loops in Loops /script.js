// Looping backwards

const abhi = [
    'Abhinav',
    'Prajapati',
     2023-2000,
     'Software developer',
     'Gurugram'
];



// Looping backwards

for(let i= abhi.length -1 ; i>=0 ; i--) {

    console.log(abhi[i]);
}


// Loops within loops

for(let i=1;i<=3;i++) {
    
    console.log(`---------Starting Exercise ${i}`);

    for(let j=1;j<=5;j++){
        console.log(`Exercise ${i} : Lifting weight repitition ${j}`);
    }

}
