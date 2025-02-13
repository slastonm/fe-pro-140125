let buttonPlus = document.querySelector(".third .btn");
let countFieldSpan = document.querySelector('.third span');
let count = 0;

function incresaCounter(){
    count++;
    countFieldSpan.innerHTML = count;
    if(count>=10){
        buttonPlus.removeEventListener('click', incresaCounter);
    }
}
buttonPlus.addEventListener('click', incresaCounter);

let removeContainer = document.querySelector('.removeContainer');
for(let i=0; i<10; i++){
    let divItem = document.createElement('div');
    divItem.classList.add('p-5', 'bg-success', 'm-1', 'text-white');
    divItem.innerHTML = `${i+1}`;
    // divItem.onclick = function(){
    //     this.remove();
    // }
    removeContainer.appendChild(divItem);
}

let allItems = document.querySelectorAll('.removeContainer>div');
allItems.forEach(item=>{
    item.onclick = function(){
        this.remove();
    }
});

let menuBtn = document.querySelector('.menuBtn');
let menuEl = document.querySelector('.list-group');
menuBtn.onclick = function(){
    this.classList.toggle('active');
    if(this.classList.contains('active')){
        this.innerHTML = 'Закрити меню';
    }
    else{
        this.innerHTML = 'Відкрити меню';
    }
    menuEl.classList.toggle('d-none');
}