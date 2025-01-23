// let firstNumber = Number(prompt('First number'));
// let secondNumber = Number(prompt('Second number'));
// let thirdNumber = Number(prompt('third number'));

// if(firstNumber>=secondNumber && firstNumber>=thirdNumber){
//     console.log(`First number найбільше число`);
// }
// else if(secondNumber>=firstNumber && secondNumber>=thirdNumber){
//     console.log(`Second number найбільше число`);
// }
// else{
//     console.log(`Third number найбільше число`);
// }


let monthNumber = Number(prompt('Напишіть число від 1 до 12'));

if(monthNumber>=1 && monthNumber<=12){
    if(monthNumber>=3 && monthNumber<=5){
        console.log('Весна');
    }
    else if(monthNumber>=6 && monthNumber<=8){
        console.log('Літо');
    }
    else if(monthNumber>=9 && monthNumber<=11){
        console.log('Осінь');
    }
    else{
        console.log('Зимові');
    }
}else{
    console.log(`Значення повино бути від 1 до 12`);
}

let angelValue = 145;

let angelType = (angelValue>0 && angelValue<90)? 'Гострий кут':'Tyпий кут';
console.log(angelType);

// 1*0 = 0;
// 1*1 = 1;

let multiplyValue = 5;

for(let i =0; i<11; i++){
    console.log(`Результат множення ${i} * ${multiplyValue} = ${i*multiplyValue}`);
}
