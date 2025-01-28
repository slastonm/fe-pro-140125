console.log([1,2]);

let animals = ['Dog'];
// let animalsLenght = animals.length;
// animals[animalsLenght] = 'Cat';
animals.push('Cat');
animals.push('Bat');
animals.push('Rat');
animals.push('Cow');

console.log(animals);

//pop remove last

animals.pop();
console.log(animals);


animals.pop();
animals.pop();
console.log(animals);

animals.unshift('Bat');
animals.unshift('Rat');
animals.unshift('Cow');
console.log(animals);

animals.shift();
animals.shift();
console.log(animals);

let numberValue = 112;

// numberValue.push();

//isArray Array.isArray('Test');

console.log(Array.isArray('String'));
console.log(Array.isArray(123));
console.log(Array.isArray([123, 'String']));

//fill
let fillArray = new Array(10);
console.log(fillArray); //1
fillArray.fill(0);
// fillArray.fill(0, 5);
fillArray.fill('!', 5,8);

console.log(fillArray); //2 

//Sort
console.log('==Sort==');
let arraySort = [13,2,1,5,6,28,51];
// let arraySort = [ "Rat", "Bat", "Cat" ];
// arraySort.sort();
// arraySort.sort((a,b)=>a-b);
arraySort.sort((a,b)=>b-a);
console.log(arraySort);

//Reverse

console.log('==Reverse==');
arraySort.sort((a,b)=>b-a);
arraySort.reverse();
console.log(arraySort);

//Concat
console.log('==Concat==');
let firstArray = [1,2,3];
let secondArray = [4,5,6];

// for(let i=0; i<secondArray.length; i++){
//     firstArray.push(secondArray[i]);
// }
// firstArray = firstArray.concat(secondArray, 7, 8, 9, [10, 11]);
firstArray = firstArray.concat(secondArray);

console.log(firstArray);

let magicNumbers = [2,1,123, 20, 321, 11, 12];
for(let i=0; i<magicNumbers.length; i++){
    if(magicNumbers[i] === 20){
        magicNumbers[i] = 'Changed value';
    }
}

console.log(magicNumbers);

//Includes
console.log('==Includes==');

console.log(magicNumbers.includes(2));
console.log(magicNumbers.includes(222));
console.log(magicNumbers.includes('Test'));
console.log(magicNumbers.includes(12));

//IndexOf
console.log('==IndexOf==');

console.log(magicNumbers.indexOf(2));
console.log(magicNumbers.indexOf(222));
console.log(magicNumbers.indexOf('Changed value'));
console.log(magicNumbers.indexOf(11));
console.log(magicNumbers);


//Slice
console.log('==Slice==');

let myNumbers = [1,2,3,4,5,6,7,8];
let selectNumbers = myNumbers.slice(2,5);

console.log(myNumbers);
console.log(selectNumbers);

//Splice
console.log('==Splice==');

let myNumbers2 = [1,2,3,4,5,6,7,8];
let spliceNumber = myNumbers2.splice(2,3);
console.log(myNumbers2);
console.log(spliceNumber);

myNumbers2.splice(0,1,[333,444,555]);
console.log(myNumbers2);

//Filter
console.log('==Filter==');

let filterPrice = [12, 20, 23, 10, 120, 5, 7, 19];

// let selectPrice = [];
// for(let i=0; i<filterPrice.length; i++){
//     if(filterPrice[i]>=20){
//         selectPrice.push(filterPrice[i]);
//     }
// }
// console.log(selectPrice);

function checkPrice(value){
    return value >=19;
}
let filtredValue = filterPrice.filter(checkPrice);
console.log(filtredValue);

let noFilterValues = [1,3,4,5,7,8,9,10];

let pairNumbers = noFilterValues.filter((number)=> number %2 === 0);
console.log(pairNumbers);


//ForEach
console.log('==ForEach==');
let users = ['Tom','Ann', 'Bob'];

// users.forEach((value, index, arr)=>{
//     console.log(`ForEach ${value} index:${index} arr: ${arr}`);
// })

users.forEach((value)=>{
    console.log(`ForEach ${value}`);
});

//Map
console.log('==Map==');
let oldArr = ['a','b','c'];
//['new a','new b','new c']

let newMapArr = oldArr.map((value, index, arr)=>{
        // return (`Map value ${value} index:${index} arr: ${arr}`);
        return (`Price ${value} $`);

});

console.log(oldArr);
console.log(newMapArr);

