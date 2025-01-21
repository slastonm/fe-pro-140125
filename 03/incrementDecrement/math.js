let numberValue = 1;
//numberValue = numberValue + 1; // 1+1;
numberValue+=1;
console.log(numberValue);

// +=, -=, *=, /=
// numberValue = numberValue+3;
numberValue*=3;
console.log(numberValue);



let postFixIncrement = 1;
// postFixIncrement++;

console.log(`Start value ${postFixIncrement}`);// 1
console.log(`call with increment value ${postFixIncrement++}`); // ?
console.log(` second call with increment value ${postFixIncrement}`); // ?
console.log(`call with increment value ${postFixIncrement++}`); // ?
console.log(` second call with increment value ${postFixIncrement}`); // ?
console.log(`call with increment value ${postFixIncrement++}`); // ?


console.log('===========================================');
let postFixDecrement = 10;

console.log(`Start value ${postFixDecrement}`);// 10
console.log(`call with decrement value ${postFixDecrement--}`); // ?
console.log(` second call with decrement value ${postFixDecrement}`); // ?
console.log(`call with decrement value ${postFixDecrement--}`); // ?
console.log(` second call with decrement value ${postFixDecrement}`); // ?
console.log(`call with decrement value ${postFixDecrement--}`); // ?

console.log('===========================================  prefix ==========================');


let prefixIncrement = 1;
// prefixIncrement++;

console.log(`Start value ${prefixIncrement}`);// 1
console.log(`call with increment value ${++prefixIncrement}`); // ?
console.log(` second call with increment value ${prefixIncrement}`); // ?
console.log(`call with increment value ${++prefixIncrement}`); // ?
console.log(` second call with increment value ${prefixIncrement}`); // ?
console.log(`call with increment value ${++prefixIncrement}`); // ?


console.log('===========================================');
let prefixDecrement = 10;

console.log(`Start value ${prefixDecrement}`);// 10
console.log(`call with decrement value ${--prefixDecrement}`); // ?
console.log(` second call with decrement value ${prefixDecrement}`); // ?
console.log(`call with decrement value ${--prefixDecrement}`); // ?
console.log(` second call with decrement value ${prefixDecrement}`); // ?
console.log(`call with decrement value ${--prefixDecrement}`); // ?



