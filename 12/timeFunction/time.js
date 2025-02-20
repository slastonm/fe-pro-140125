function showAlert(){
    alert('Hello world');
}

let timOutAlert = setTimeout(showAlert, 5000);

document.querySelector('.stop').onclick = function(){
    clearTimeout(timOutAlert);
}

setTimeout(function(){
    console.log('Hello setTimeout');
}, 8000);

let count = 0;
function counter(){
    count++;
    document.querySelector('p').innerHTML = `Count: ${count}`;
    if(count>20){
        clearInterval(intervalCounter);
    }

}

let intervalCounter = setInterval(counter, 1000);