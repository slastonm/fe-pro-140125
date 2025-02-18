let styleName = 'css';
console.log(`Test string ${/^c/.test(styleName)}`);
console.log(`Test string ${/ss$/.test(styleName)}`);

// let timeString = "9:30";
// let timeString = "19:30";

let timeRegEx = /^\d{1,2}:\d{2}$/;
console.log(`Time test ${timeRegEx.test('5:34')}`);
console.log(`Time test ${timeRegEx.test('15:34')}`);
console.log(`Time test ${timeRegEx.test(' 6:34')}`);
console.log(`Time test ${timeRegEx.test('6 35')}`);
console.log(`Time test ${timeRegEx.test('6:35 ')}`);

let helloWorld = 'Helloooo world';
let oRegEx = /o+/g;
let oMatch = helloWorld.match(oRegEx);
console.log(oMatch);


let animals = "cat cow rat chicken bat";
let uniqSelector = /.at/gi;
console.log(animals.match(uniqSelector));


// ||  |
let fruits = "apple banana cherry orange";
let appleOrCherry = /apple|cherry/g;
console.log(fruits.match(appleOrCherry));

let personInfoText = 'One day in 2-1-1999 person start trip and finish in 10-10-2004';

let dataRegEx = /\d{1,2}-\d{1,2}-\d{4}/g;

let dataArr = personInfoText.match(dataRegEx);
console.log(dataArr);

// 061 123 23 45 | 0611232345