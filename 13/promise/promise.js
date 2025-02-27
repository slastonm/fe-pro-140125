let firstPromise = new Promise(function(resolve, reject){
    console.log(`Promise work`);
});
//pending
//fulfilled
//rejected

let x = 2;
let y = 0;

let promiseCalculate = new Promise(function(resolve, reject){
    if(y === 0){
        reject(alert('0 is bad value'));
    }
    else{
        let result = x/y;
        resolve(alert(`result ${result}`));
    }
});


let numberValue = 10;
let checkNumber = new Promise(function(resolve, reject){
    if(numberValue>20){
        resolve(`${numberValue} is nice number`);
    }
    else{
        reject('Bad value');
    }
});

checkNumber.then(function(value){
    console.log(value);
}).catch(function(error){
    console.log(`Promise error ${error}`);
});

let firstP = new Promise(function(resolve){
    resolve(`First promise value`);
});

let secondP = firstP.then(function(value){
    return `${value} + second promise`;
});

let thirdP = secondP.then(function(value){
    return `${value} + third promise`;
});

let finalP = thirdP.then(function(value){
    return `${value} + Final promise`;
});

finalP.then(function(finalValue){
    console.log(finalValue);
}).catch(function(error){
    console.log(error);
});

new Promise(resolve=>resolve('First value'))
.then(value=>`${value}+2`)
.then(value=>`${value}+3`)
.then(value=>`${value}+final`)
.then(value=>console.log(value))
.catch(function(error){
    console.log(error);
})
.finally(()=>{
    console.log('Finaly work in promise chain');
});


