let cout = 0;
let container = document.querySelector('.erea');

// function countClicker(){
//     container.innerHTML = `Click count ${cout}`;
//     cout++;
// }

// container.onclick = function(e){
//     countClicker();
// };

container.onmousedown = function(e){
    this.innerHTML = e.type;
    this.style.background = 'red';
}
container.onmouseup = function(e){
    this.innerHTML = e.type;
    this.style.background = 'white';
}

let hoverEl = document.querySelector('.hover-block');

hoverEl.onmouseover = function(e){
    this.innerHTML = e.type;
    this.style.background = 'orange';
}
hoverEl.onmouseout = function(e){
    this.innerHTML = e.type;
    this.style.background = 'skyblue';
}