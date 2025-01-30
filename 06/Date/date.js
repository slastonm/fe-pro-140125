let userBirthYear = 1995;
let curenYear = new Date().getFullYear();

console.log(`User age ${curenYear-userBirthYear}`);

let nowDate = new Date();
// let customDate = new Date(year, mounth, hours, minute, second, ms);


console.log(nowDate);

let tomorowDate = new Date(2000, 1, 28, 12);
console.log(tomorowDate);

console.log(nowDate.getDate());
console.log(nowDate.getDay());
console.log(nowDate.getFullYear());
console.log(nowDate.getMonth());
console.log(nowDate.getHours());
console.log(nowDate.getMinutes());

console.log(nowDate.toJSON());
console.log(nowDate.toDateString());
console.log(nowDate.toUTCString());
console.log(nowDate.toISOString());






