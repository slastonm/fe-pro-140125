let strValue = 'String String';
console.log(strValue);
console.log(`String lenght ${strValue.length}`);
let replace = strValue.replace('S', 'R');
console.log(replace);

console.log(`Slice value ${strValue.slice(1,7)}`);

let names = 'Nik Tom Bob Rob';

// let nameArr = names.split(',');
let nameArr = names.split(' ');

console.log(nameArr);

let userChoice = "  admin  ";

console.log(userChoice);
console.log(userChoice.trim());
// console.log(userChoice.trimEnd());
// console.log(userChoice.trimStart());

if(userChoice.trim() === 'admin'){
    console.log('Hello admin');
}

// камінь === Камінь КАМІНЬ кАміНь 

let jsString = 'JavaScript';

let upperJs = jsString.toUpperCase();
console.log(upperJs);

let lowerJs = jsString.toLowerCase();
console.log(lowerJs);