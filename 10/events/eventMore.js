let dangerBtn = document.querySelector('.btn-danger');

dangerBtn.addEventListener('contextmenu', function(e){
    e.preventDefault();
});

let moveEl = document.querySelector('.move');
moveEl.addEventListener('mousemove', function(e){
    moveEl.innerHTML =`
        Type ${e.type} <br>
        ClientX ${e.clientX} and Y ${e.clientY} <br>
        LayerX ${e.layerX} and Y ${e.layerY} <br>
        OffsetX ${e.offsetX} and Y ${e.offsetY} <br>
    `
});

let inputEl = document.querySelector('#input');
let outputEl = document.querySelector('.output');
let readEl = document.querySelector('.read');

readEl.onclick = function(){
    console.log(inputEl);
    let inputValue = inputEl.value;
    outputEl.innerHTML = inputValue;
}

// keydown
// keyup
// keypress застарілий метод

inputEl.addEventListener('keyup', function(e){
    outputEl.innerHTML = `
        Type ${e.type} <br>
        Key ${e.key} key code ${e.code} <br>
        Shift ${e.shiftKey} <br>
        Alt ${e.altKey} <br>
        Ctrl ${e.ctrlKey} <br>
    `
});


// form events

let myForm = document.querySelector('.myForm');
let emailEl = document.querySelector('#exampleInputEmail1');
let passwordEl = document.querySelector('#exampleInputPassword1');
let checkEl = document.querySelector('#exampleCheck1');
let submitBtn = document.querySelector('.submit');
let resetBtn = document.querySelector('.reset');

resetBtn.onclick = function(){
    myForm.reset();
}

submitBtn.onclick = function(e){
    e.preventDefault();
    let passwordEl = document.querySelector('#exampleInputPassword1');
    console.log(passwordEl.value.length);
    if(passwordEl.value.length >6){
        myForm.submit();
    }
}

console.log([...myForm.elements]);

myForm.onchange = function(){
    alert('Form changed');
}

emailEl.onfocus = function(){
    this.style.background = 'green';
}
emailEl.onblur = function(){
    if(this.value === ""){
        this.style.background = 'red';
    }
    else{
        this.style.background = 'yellow';
    }
}