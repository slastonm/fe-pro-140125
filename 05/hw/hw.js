function helloUser(userName){
    console.log('======');
    console.log(userName);
    console.log('======');
}
function helloUser2(userName){
    console.log('!!!!!!');
    console.log(userName);

}
let users = ['John', 'Tom','Iren','Kat'];

function workWithUser(array, callBackFn){
    for(let i=0; i<array.length; i++){
        // callBackFn(array[i]);
        callBackFn(array[i]);
    }
}

workWithUser(users, helloUser);
workWithUser(['Max', 'Test!', 'Users!'], helloUser2);


for(let i=0; i<=10; i++){
     if(i%2 === 0){
        console.log(`Перше парне число ${i}`);
        break;
     }
}


for(let i=0; i<=10; i++){
    if(i%2 !== 0){
       continue;
    }
    console.log(`Парне ${i}`);
}
