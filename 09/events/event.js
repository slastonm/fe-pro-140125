let clickBtn = document.querySelector('.clickBtn');

function showAlert(){
    alert('Hello js');
}

//Option 1
// clickBtn.onclick = function(){

//     showAlert();
// }

//Option 2
clickBtn.addEventListener('click', showAlert);

let removeClickBtn = document.querySelector('.removeClick');

removeClickBtn.addEventListener('click', function(){
    clickBtn.removeEventListener('click', showAlert);
    alert('click was deleted');
});

const [...pElemnts] = document.querySelectorAll('p');
pElemnts.forEach(item=>{
    item.onclick = function(){
        // item.innerHTML = 'Changed';
        // item.style.backgroundColor = 'orange';
        console.log(this);
        this.innerHTML = 'Changed';
        this.style.backgroundColor = 'orange';
    }
});


let linkEl = document.querySelector('a');
linkEl.onclick = function(event){
    event.preventDefault();
    console.log(event);
    // alert('Study js');
}



let ulList = document.querySelector('ul');
ulList.onclick = function(e){
    console.log(e.target);
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('active')        
    }


}