let user1 = 'Tom';
let user2 = 'Bob';
let user3 = 'John';
let users = new Array(10);// []
console.log(users);

let politics = [];// []
console.log(politics);

users[0] = user1;
users[3] = user3;
users[5] = user2;

console.log(users);

let myArr = [user1, user2, 'My value', 123, true, ['Second array', 123]];
console.log(myArr);

myArr[1] = user3;
console.log(myArr);

let usersArr = [user1, user2, user3, 'Max', 'Nick'];
console.log(usersArr);
console.log(usersArr.length);

// console.log(`Hello Max`);
// console.log(`Hello Nick`);
let userCount = usersArr.length; // number
// console.log(usersArr[0]);
// console.log(usersArr[1]);
// console.log(usersArr[2]);


// for(let i = 0; i<userCount; i++){
//     console.log(`Hello user ${usersArr[i]}`);
// }

for(let i = 0; i<usersArr.length; i++){
    console.log(`Hello user ${usersArr[i]}`);
}

for(let i = 0; i<usersArr.length; i++){
    if(usersArr[i] === 'Nick'){
        usersArr[i] = 'New Nick user';
    }
}

console.log(usersArr);

console.log(usersArr[0]);
usersArr[usersArr.length -1] = 'Last user';
console.log(usersArr[usersArr.length-1]);
console.log(usersArr);

let moreUserData = [
    ['Tom', 'tom@gmai.com', 23, 123456],
    ['John', 'john@gmail.com', 33, 234567],
    ['Ann', 'ann@gmail.com', 33, 987612]
];
console.log(moreUserData);
console.log(moreUserData[0][0]);
console.log(moreUserData[0][1]);
console.log(moreUserData[0][2]);


console.log('====');

for(let i = 0; i<moreUserData.length; i++){
    // console.log(moreUserData[i][0]);
    // console.log(moreUserData[i][1]);
    // console.log(moreUserData[i][2]);
    for(let c = 0; c<moreUserData[i].length; c++){
        console.log(`User info: ${moreUserData[i][c]}`);
    }
    console.log('====');
}