let userNameEl = document.querySelector('#userName');
let userPhoneEl = document.querySelector('#userPhone');
let callInfoEl = document.querySelector('#callInfo');
let submitEl = document.querySelector('.submit');
let formEL = document.querySelector('form');

formEL.onchange = function(){
    let userNameEl = document.querySelector('#userName');
    let userPhoneEl = document.querySelector('#userPhone');

    if(userNameEl.value.length>2 && userPhoneEl.value.length>=10 && userPhoneEl.value.length<12){
        // 0611 2312 34
        // 80 0511 1233 43
        submitEl.removeAttribute('disabled');
    }else{
        submitEl.setAttribute('disabled','disabled');
    }
}

userNameEl.onkeyup = function(){
    if(this.value.length>=2){
        this.style.background = 'green';
    }
    else{
        this.style.background = 'red';
    }
}

userPhoneEl.onkeyup = function(){
    if(this.value.length<10 || this.value.length>13){
        this.style.background = 'red';
    }
    else{
        this.style.background = 'green';
    }
}

callInfoEl.onchange = function(){
   console.log(callInfoEl.checked); 
}
