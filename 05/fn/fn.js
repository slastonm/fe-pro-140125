// function summ(a,b){
//     return a+b;
// }
let summ = (a,b)=>a+b;

let firtsResult = summ(2,13);
console.log(firtsResult);

let secondResult = summ(20,30);
console.log(secondResult);

let compare = (a,b)=>{
    if(a>b){
        return a;
    }
    else{
        return b;
    }
}

let firtsResultcompare = compare(2,13);
console.log(firtsResultcompare);

let secondResultcompare = compare(20,30);
console.log(secondResultcompare);

function callUser(userName = 'Anonimus user', age = 'No info'){
    console.log(`${userName} age:${age}`);
}

callUser('Tom', 35);
callUser(36);
callUser();


