let navUl = document.querySelector('.nav');
console.log(navUl);
let liElements = [...navUl.children]; // 3

let siteText = ['home page', 'about', 'sale', 'test', 'test2']; //3
liElements.forEach((li, index)=>{
    li.innerHTML = `Js text: ${siteText[index]}`
});

// console.log(navUl.firstChild);
console.log(navUl.firstElementChild);
console.log(navUl.lastElementChild);

let activeLi = document.querySelector('.active');
activeLi.innerHTML = 'ACTIVE';
let siblingPrev =activeLi.previousElementSibling;
siblingPrev.innerHTML = 'PREV ACTIVE';
let siblingNext =activeLi.nextElementSibling; // null
if(siblingNext !== null){
    siblingNext.innerHTML = 'Next ACTIVE';   
}

// console.log(navUl.parentElement.parentElement.parentElement);

