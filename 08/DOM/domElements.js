
// #,.,:nth-child

// let arrLinks = Array.from(linkElements);

// let [...sectionParagrafs] = document.querySelectorAll('section p');
// console.log(sectionParagrafs);

let [...classlistLi] =document.querySelectorAll('ul.nav > li');
console.log(classlistLi);
let nthSecondChild = document.querySelector('li:nth-child(2)');
console.log(nthSecondChild);
let headerLilnk = document.querySelector('header nav a');
console.log(headerLilnk);

let firstLi = document.querySelector('li:first-child');
firstLi.innerHTML = 'Hello first li element';
let lastChildLi = document.querySelector('li:last-child');
lastChildLi.innerHTML = 'Hello last li';