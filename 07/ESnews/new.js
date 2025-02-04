const keyValue = Symbol('key');
const nextKeyValue = Symbol('key');

console.log(`Test symbol value ${keyValue === nextKeyValue}`);
console.log(`Test symbol value ${keyValue == nextKeyValue}`);

// Spread ...

let firstArr = [1,2,3];
let secondArr = [0, ...firstArr, 4, 5, 6];
console.log(secondArr);

let firstObj = {
    userName:'Tom',
    userAge: 111
}

let secondObj = {
    ...firstObj,
    skill: 'js'
}
console.log(secondObj);

// Rest operator (...)

function numbersFr (...value){
    console.log(value);
}
numbersFr(1,2,3,4,5,6,7);
numbersFr(1,2);


const person = {
    firstName:'John',
    lastName:'Doe'
}

// console.log(person.firstName);

const {firstName, lastName} = person;
console.log(`User info ${firstName} last name ${lastName}`);

let userData = ['Name Tom', 'Age 20', 'HTML', 'CSS', 'JS'];

const [userName, userAge, ...skills] = userData;

console.log(skills);
// console.log(`user name ${userName} use age ${userAge}`);
console.log(`user name ${userData[0]} use age ${userData[1]}`);

const hero = {
    heroName: 'Batman',
    realName: 'Bruce',
    suitColor: 'red'
}

const {heroName, realName, suitColor = 'black'} = hero;

console.log(`Hero info ${heroName} real name ${realName} color:${suitColor}`);


const heroes = [
    {heroName: 'Batman'},
    {heroName: 'Iron man'},
    {heroName: 'Spiderman'}
]

// for(const hero of heroes){
//     console.log(hero.heroName);
// }

for(const {heroName} of heroes){
    console.log(heroName);
}

const textInfoArr = heroes.map(({heroName})=>{
    return `This hero name is ${heroName}`
});

console.log(textInfoArr);
