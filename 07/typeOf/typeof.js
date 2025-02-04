
// undefined
// Boolean
// Number
// String
// Symbol
// BigInt
// function
// object


let typeInfo = typeof "11";
console.log(typeInfo);


console.log(`Test data type ${typeof 43}`);
console.log(`Test data type ${typeof 'Hello'}`);
console.log(`Test data type ${typeof true}`);
console.log(`Test data type ${typeof 'false'}`);

console.log(`Test data type ${typeof {key:'Test'}}`);
console.log(`Test data type ${typeof [1,2,3]}`);

console.log(`Test data type ${typeof null}`);

const symbolValue = Symbol('key');
console.log(`Test data type ${typeof symbolValue}`);

let fnValue = ()=>'hello';
console.log(`Test data type ${typeof fnValue}`);

console.log(`Test data type ${typeof undefined}`);

