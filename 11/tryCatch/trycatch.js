let user = {
    userName:'Tom',
    userAge:22
}

// console.log(user.email);
function myFn(){
    console.log(1111);
}

try{
    console.log(myFn());
}
catch(error){
    console.log(error);
    console.log(`Hello error ${error.message}`);
    console.log(`Hello error ${error.name}`);
    console.log(`Hello error ${error.stack}`);
}
finally{
    console.log('Finaly work code');
}