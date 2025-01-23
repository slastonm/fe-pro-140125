
let first = 2;
let second = 2;

let summ = first+ second;

let one = 3;
let two = 5;

let nextSumm = one+two;

// console.log('===');
// console.log('Hello user');
// console.log('===');

showInfo();
function showInfo(username){
    console.log('===');
    console.log(`Hello ${username}`);
    console.log('===');
}



showInfo('Tom');
showInfo('Bob');
showInfo('Bob2');



let summFn = function(a, b){
    // console.log(`${a+b}`);
    let summInsideFn = a+b;
    let values = a*b;
    return [arguments, values, summInsideFn];
    // summInsideFn-10; Після return  код не виконується
    // let my = 'Tom';
    // console.log(my);
    // console.log(summInsideFn);
}

let fnResult = summFn(10,22);
console.log(fnResult);
console.log(`Plus operation ${fnResult[2]}`);
console.log(`Multiply operation ${fnResult[1]}`);
console.log(`Info about function values ${fnResult[0]}`);



// console.log(`Result from function ${fnResult}`);

// console.log(summFn(2,2));
// console.log(summFn(4,3));
// console.log(summFn(5,3));

// console.log(summFn(2,3,4,5,6,7,7,8,10));

function calculator(number1, number2, operator){
    let minusValue = 0;
    let plusValue = 0;
    if(operator === '-'){
        minusValue = number1-number2;
    }
    else if(operator === '+'){
        plusValue = number1+number2;
    }
    else{
        console.log('No info about operator');
    }
    return [
        ['Minus operation', minusValue],
        ['plus operation', plusValue]
    ]
}

console.log(calculator(1,2,'+'));
console.log(calculator(1,2,'-'))
console.log(calculator(3,4));

function helloUser(userName){
    console.log('=======');
    console.log(`${userName}`);
    console.log('=======');
}

function helloAdmin(adminName){
    console.log('!!!!!!!!');
    console.log(`Admin hello ${adminName}`);
    console.log('!!!!!!!!!');
}

function helloUserStar(userName){
    console.log('*********');
    console.log(`${userName}`);
    console.log('******');
}

function helloAdminStar(adminName){
    console.log('!!!!!!!!*****************');
    console.log(`Admin hello ${adminName}`);
    console.log('!!!!!!!!!***************');
}

let userLoging = ['Tom', 'Admin', 'Bob', 'Ann', 'Nat'];

function greatUsers(array, callBackUser, callBackAdmin){
    for(let i = 0; i<array.length; i++){
        if(array[i] !== 'Admin'){
            callBackUser(array[i]); // helloUser(array[i])
        }
        else{
            callBackAdmin(array[i]); //helloAdmin(array[i])
        }
    }
    // if(userName === 'Admin'){
    //     console.log('=======');
    //     console.log(`Admin hello ${userName}`);
    //     console.log('=======');
    // }
    // else{
    //     console.log('=======');
    //     console.log(`${userName}`);
    //     console.log('=======');
    // }
}


greatUsers(userLoging, helloUser, helloAdmin);

greatUsers(['user1', 'user2','Admin', 'user3'], helloUserStar, helloAdminStar);






