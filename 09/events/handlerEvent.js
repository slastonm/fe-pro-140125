let firstEl = document.querySelector('#first');
let secondEl = document.querySelector('#second');
let thirdEl = document.querySelector('#third');
let isTunel = false;


firstEl.addEventListener('click',function(e){
    this.style.background = 'green';
    e.stopPropagation();
    alert('1 block');
},isTunel);
secondEl.addEventListener('click',function(e){
    this.style.background = 'orange';
    e.stopPropagation();
    alert('2 block');
},isTunel);
thirdEl.addEventListener('click',function(e){
    this.style.background = 'blue';
    e.stopPropagation();
    alert('3 block');
},isTunel);