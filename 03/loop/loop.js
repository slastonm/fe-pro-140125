// console.log('Hello Tom');
// console.log('Hello Bob');
// console.log('Hello Anna');
// console.log('Hello Andzey');

// console.log('Hello student 1');
// console.log('Hello student 2');
// console.log('Hello student 3');
// console.log('Hello student 4');
// console.log('Hello student 5');
// console.log('Hello student 6');
// console.log('Hello student 7');
// console.log('Hello student 8');

let couter = 1;

do{
    console.log(`Hellou user ${couter}`);
    couter++;
}while(couter<2);

console.log('end do while');

let whileCounter = 0;
while(whileCounter<5){
    console.log(`While counter ${whileCounter+1}`);
    whileCounter++;
}

console.log('while');

for(let i =0; i<10; i++){
    
    // if(i === 5){
    //     break;
    // }
    if(i%2 === 0){
        continue;
    }
    // else{
    //     console.log(`For value ${i}`);
    // }
    console.log(`For value ${i}`);
}
console.log(`============================`);
for(let i = 5; i>0; i--){
    console.log(`Increment loop ${i}`);
}


console.log(`============================`);
for(let i = 5; i<10; ++i){
    console.log(`Increment loop ${i}`);
}


console.log(`============================`);
for(let i = 3; i<=12; i+=3){
    console.log(`Increment loop ${i}`);
}
