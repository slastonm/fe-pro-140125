let thisYear = 2026;

if(thisYear === 2025){
    alert('Happy 2025!');
}else{
    console.log('hello');
}

// if else if else
let userNumber = 70;

if(userNumber<4){
    console.log(`user number less than 4`);
}
else if(userNumber>5 && userNumber<10){
    console.log(`user number > than 5 and < 10`);
}
else if(userNumber>10 && userNumber<15){
    console.log(`user number > than 5 and < 10`);
}
else{
    console.log('Unknow number');
}

let userIsAdmin = false;

// if(!userIsAdmin){
//     console.log('Hello user');
// }
// else{
//     console.log('Hello user');
// }

let userLogin = false;
let loginResult = '';

// if(userLogin){
//     loginResult ='Hello user !!!!';
// }
// else{
//     loginResult ='Login to system';
// }

loginResult = userLogin ? 'Hello short if User Login true' : 'Else Login to system';
console.log(`Login resut text ${loginResult}`);

let firstCompareNumber = 100;
let secondCompareNumber = 20;
let maxValue = 0;

// if(firstCompareNumber>secondCompareNumber){
//     maxValue = firstCompareNumber;
// }
// else{
//     maxValue = secondCompareNumber
// }
maxValue = firstCompareNumber>secondCompareNumber ? firstCompareNumber : secondCompareNumber;
console.log(`Max value: ${maxValue}`);

let score = 85;
let grade = 'No information';
// console.log(grade);

// if(score>=90){
//     grade='A';
// } else if(score>=80){
//     grade ='B';
// } else if(score>=70){
//     grade ='C';
// } else{
//     grade = 'D';
// }

grade = (score>=90) ? 'short A' :
        (score>=80) ? 'short B' :
        (score>=70) ? 'short C' : 'short D'; 

console.log(grade);