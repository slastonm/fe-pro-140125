let simpleStr = /hi/;
let simplePatern = /\d\d\d/g;

let regClass = new RegExp('hi');
let regClassPatern = new RegExp("\d\d\d");

let textPatern = "Lorem  ipsum 4e56 dolor sit amet consectetur adipisicing elit. Rerum eius eligendi, 789 laudantium numquam commodi molestiae laboriosam voluptatem 321 expedita, laborum asperiores voluptas dignissimos aspernatur 980 consequuntur dolor dolorum ipsa harum temporibus quos!";

//search 
let firstSearchIndex = textPatern.search(simplePatern);
console.log(`Search result ${firstSearchIndex}`);

//replace

let newResult = textPatern.replace(simplePatern, 1111);
console.log(textPatern);
console.log('===');
console.log(newResult);

// match

let matchResult = textPatern.match(simplePatern);
console.log(matchResult);

// test

let pincodePatern = /\d\d\d\d/;

console.log(pincodePatern.test('123'));
console.log(pincodePatern.test('1234'));
console.log(pincodePatern.test('1 34'));
console.log(pincodePatern.test('1a34'));
console.log(pincodePatern.test('1ae4'));
console.log(pincodePatern.test('1-!4'));



