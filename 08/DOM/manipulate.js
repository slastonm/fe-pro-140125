let mainEl = document.querySelector('main');
let titleEl = document.createElement('h2');
titleEl.innerHTML = 'Hello js Title';
mainEl.appendChild(titleEl);
let linksText = [
    'sale','main','about','contact'
];

let navBlock = document.querySelector('header nav');
for(let link of linksText){
    let linkEl = document.createElement('a');
    linkEl.innerHTML = link;
    navBlock.appendChild(linkEl);
    // navBlock.prepend(linkEl);
    // navBlock.after(linkEl);
    // navBlock.before(linkEl);
}

let navUlElement = document.querySelector('.nav');
let activeEl = document.querySelector('.active');
let newLi = document.createElement('li');
newLi.innerHTML = 'Replace content';
navUlElement.replaceChild(newLi, activeEl);

let myTitle = document.querySelector('h2');
myTitle.remove();
